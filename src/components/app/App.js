import './App.css';
import React, { useEffect, useState } from 'react';
import SearchBar from '../search-bar/search-bar';
import SearchResults from '../search-results/search-results';
import Playlist from '../playlist/playlist';
import { redirectToSpotifyAuth, getAccessToken } from '../../api/spotify/spotifyAuth';
import {createNewPlaylist, getUser, searchTracks} from "../../api/spotify/spotifyApi";

function App() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        getAccessToken().then(t => {
            setToken(t);
        });
    }, []);

    const hardCodedPlaylist = {
        name: "My Playlist",
        tracks: [
            {id: 4, name: "You're On Your Own, Kid", artist: "Taylor Swift", album: "Midnights"},
            {id: 5, name: "You're Gonna Go Far", artist: "Noah Kahan", album: "Stick Season (We'll All Be Here Forever)"},
            {id: 6, name: "You Know I'm No Good", artist: "Amy Winehouse", album: "Back To Black (Deluxe Edition)"}
        ]
    };
    const [searchResults, setSearchResults] = useState([]);
    const [playlist, setPlaylist] = useState(hardCodedPlaylist);

    function addToPlaylist(track) {
        if (!playlist.tracks.find(t => t.id === track.id)) {
            setPlaylist(prev => ({
                ...prev,
                tracks: [...prev.tracks, track]
            }));
        }
    }
    function removeFromPlaylist(track) {
        getUser(token).then(r => { console.log(r) });
        if (playlist.tracks.find(t => t.id === track.id)) {
            setPlaylist(prev => ({
                ...prev,
                tracks: [...prev.tracks.filter(t => t.id !== track.id)]
            }));
        }
    }

    function updatePlaylistName(name) {
        setPlaylist(prev => ({
            ...prev,
            name: name
        }));
    }

    function savePlaylist() {
        const trackCollection = playlist.tracks.map(track => track.id);
        console.log("trackCollection");
        createNewPlaylist(token, playlist.name).then(r => { console.log(r) });
        console.log("playlist.tracks");
        if (trackCollection.length != 0) {
            setPlaylist({name: "New Playlist", tracks: []});
        } else {
            alert("Your playlist is empty!");
        }
    }

    async function handleSearch(term) {
        const result = await searchTracks(token, term)
        setSearchResults(result);
    }

    return (
        <div className="App">
            {!token ? (
                <div>
                    <h1>Spotify Auth with PKCE</h1>
                    <button onClick={redirectToSpotifyAuth}>Log in with Spotify</button>
                </div>
            ) : (
                <>
                    <SearchBar onSearch={handleSearch}/>
                    <SearchResults showTitle={searchResults.length !== 0} searchResults={searchResults} onAddToPlaylist={addToPlaylist} />
                    <Playlist
                        playlist={playlist}
                        onRemoveFromPlaylist={removeFromPlaylist}
                        onUpdatePlaylistName={updatePlaylistName}
                        onSavePlaylist={savePlaylist}
                    />
                </>
            )}
        </div>
    );
}

export default App;
