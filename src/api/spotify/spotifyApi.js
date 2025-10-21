// spotifyApi.js
export async function searchTracks(token, query) {
    if (!token) return [];

    const response = await fetch(
        `https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(query)}`,
        {
            headers: { Authorization: `Bearer ${token}` }
        }
    );

    if (!response.ok) {
        console.error('Spotify search failed', await response.text());
        return [];
    }

    const data = await response.json();

    return data.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0]?.name || "Unknown Artist",
        album: track.album?.name || "Unknown Album",
        uri: track.uri
    }));
}

export async function getUser(token) {
    if (!token) return "There is no token";

    const response = await fetch(
        `https://api.spotify.com/v1/me`,
        {
            headers: { Authorization: `Bearer ${token}` }
        }
    );

    if (!response.ok) {
        console.error('get username failed', await response.text());
        return [];
    }

    const data = await response.json();
    return data;

}

export async function createNewPlaylist(token, name) {
    const user = await getUser(token);
    const userId = user.id;
    const url = `https://api.spotify.com/v1/users/${userId}/playlists`;
    if (!token) return [];
    const response = await fetch(
        url,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                name: name,
                description: 'New playlist description',
                public: false
            })
        }
    );

    if (!response.ok) {
        console.error('Spotify search failed', await response.text());
        return [];
    }

    const data = await response.json();
    console.log('Created new playlist called:', data.name);
    return data;
}

export async function saveTrackToPlaylist(token, query) {
    const playlist = await createNewPlaylist(token, query.name);
    const playlistId = playlist.id;
    const trackUris = query.tracks.map(track => track.uri);
    const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
    if (!token) return [];
    const response = await fetch(
        url,
        {
            headers: { Authorization: `Bearer ${token}` },
            method: 'POST',
            body: JSON.stringify({
                uris: trackUris,
                position: 0,
            })
        }
    );

    if (!response.ok) {
        console.error('Spotify search failed', await response.text());
        return [];
    }
}