import TrackList from "../tracklist/tracklist";

function Playlist(props) {
    const title = "Playlist";
    const playlist = props.playlist || { name: '', tracks: [] };
    return (
        <>
            <h1>{title}</h1>
            <TrackList trackList={playlist.tracks} />
            <button>Save to Spotify</button>
        </>
    )
}

export default Playlist;