import './App.css';
import React, { useEffect, useState } from 'react';
import SearchBar from '../search-bar/search-bar';
import SearchResults from '../search-results/search-results';
import Playlist from '../playlist/playlist';
import { redirectToSpotifyAuth, getAccessToken } from '../../api/spotify/spotifyAuth';
import { getUser, saveTrackToPlaylist, searchTracks} from "../../api/spotify/spotifyApi";

function App() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        getAccessToken().then(t => {
            setToken(t);
        });
    }, []);

    const [searchResults, setSearchResults] = useState([]);
    const [playlist, setPlaylist] = useState({ name: "", tracks: [] });


    function addToPlaylist(track) {
        if (!playlist.tracks.find(t => t.id === track.id)) {
            setPlaylist(prev => ({
                ...prev,
                tracks: [...prev.tracks, track]
            }));
        }
    }
    function removeFromPlaylist(track) {
        getUser(token);
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
        if (trackCollection.length != 0) {
            saveTrackToPlaylist(token, playlist);
        } else {
            alert("Your playlist is empty!");
        }
    }

    async function handleSearch(term) {
        if (!term) {
            setSearchResults([]);
            return;
        }
        const result = await searchTracks(token, term);
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
