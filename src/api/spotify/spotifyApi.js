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
