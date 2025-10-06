import TrackList from "../tracklist/tracklist";

function Playlist() {
    const playlistName = "My Playlist";
    return (
        <div>
            {playlistName}
            <TrackList/>
            <button>Save to Spotify</button>
        </div>
    )
}

export default Playlist;