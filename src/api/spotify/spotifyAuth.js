var clientId = '5aaa416cb4d14ae3ac7b2c2fb4b4a991';
const redirectUri = "http://127.0.0.1:3000/";
const scopes = [
    'user-read-private',
    'user-read-email',
    'playlist-modify-private',
    'playlist-modify-public'
];


// Utility to create a random string
function generateRandomString(length) {
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    return Array.from(array, dec => ('0' + dec.toString(16)).slice(-2)).join('');
}

// Base64-URL-encode helper
function base64urlencode(str) {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(str)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

// SHA256 hash
async function sha256(plain) {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return await crypto.subtle.digest('SHA-256', data);
}

// Step 1: Redirect user to Spotify auth page
export async function redirectToSpotifyAuth() {
    const verifier = generateRandomString(64);
    const challenge = base64urlencode(await sha256(verifier));
    localStorage.setItem('code_verifier', verifier);

    const params = new URLSearchParams({
        response_type: 'code',
        client_id: clientId,
        scope: scopes.join(' '),
        redirect_uri: redirectUri,
        code_challenge_method: 'S256',
        code_challenge: challenge,
    });

    window.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

// Step 2: Exchange authorization code for an access token
export async function getAccessToken() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (!code) return null;

    // Remove code from URL to prevent reuse
    window.history.replaceState({}, document.title, "/");

    const verifier = localStorage.getItem('code_verifier');
    if (!verifier) return null;

    const body = new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        client_id: clientId,
        code_verifier: verifier,
    });

    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
    });

    if (!response.ok) {
        console.error('Failed to get token:', await response.text());
        return null;
    }

    const data = await response.json();
    return data.access_token;
}
