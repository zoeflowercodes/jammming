import logo from '../../logo.svg';
import './App.css';
import { useState } from 'react';
import SearchBar from '../search-bar/search-bar';
import SearchResults from '../search-results/search-results';
import Playlist from '../playlist/playlist';

function App() {
    const hardCodedSearchResults = [
        { id: 1, name: "Track 1", artist: "Track 1", album: "Track 1" },
        { id: 2, name: "Track 2", artist: "Track 2", album: "Track 2" },
        { id: 3, name: "Track 3", artist: "Track 3", album: "Track 3" },
    ];
    const hardCodedPlaylist = {
        name: "My Playlist",
        tracks: [
            {id: 4, name: "Track 4", artist: "Track 4", album: "Track 4"},
            {id: 5, name: "Track 5", artist: "Track 5", album: "Track 5"},
            {id: 1, name: "Track 1", artist: "Track 1", album: "Track 1"}
        ]
    };
    const [searchResults, setSearchResults] = useState(hardCodedSearchResults);
    const [playlist, setPlaylist] = useState(hardCodedPlaylist);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <SearchBar />
          <SearchResults searchResults={searchResults} />
          <Playlist playlist={playlist} />
      </header>
    </div>
  );
}

export default App;
