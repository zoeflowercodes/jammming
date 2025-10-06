import logo from '../../logo.svg';
import './App.css';
import { useState } from 'react';
import SearchBar from '../search-bar/search-bar';
import SearchResults from '../search-results/search-results';
import Playlist from '../playlist/playlist';

function App() {
    const hardCodedSearchResults = [
        { id: 1, name: "When Did You Get Hot?", artist: "Sabrina Carpenter", album: "Man's Best Friend" },
        { id: 2, name: "When We Were Young", artist: "Adele", album: "25" },
        { id: 3, name: "when the party's over", artist: "Billie Eilish", album: "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?" },
    ];
    const hardCodedPlaylist = {
        name: "My Playlist",
        tracks: [
            {id: 4, name: "You're On Your Own, Kid", artist: "Taylor Swift", album: "Midnights"},
            {id: 5, name: "You're Gonna Go Far", artist: "Noah Kahan", album: "Stick Season (We'll All Be Here Forever)"},
            {id: 6, name: "You Know I'm No Good", artist: "Amy Winehouse", album: "Back To Black (Deluxe Edition)"}
        ]
    };
    const [searchResults, setSearchResults] = useState(hardCodedSearchResults);
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

  return (
    <div className="App">
          <SearchBar />
          <SearchResults searchResults={searchResults} onAddToPlaylist={addToPlaylist}/>
          <Playlist
              playlist={playlist}
              onRemoveFromPlaylist={removeFromPlaylist}
              onUpdatePlaylistName={updatePlaylistName}
          />
    </div>
  );
}

export default App;
