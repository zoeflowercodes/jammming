import TrackList from "../tracklist/tracklist";

function Playlist(props) {
    const playlist = props.playlist || { name: '', tracks: [] };
    function handlePlaylistNameChange(e) {
        props.onUpdatePlaylistName(e.target.value);
    }
    return (
        <>
            <h1>{playlist.name}</h1>
            <form onSubmit={e => e.preventDefault()}>
                <input
                    type="text"
                    value={playlist.name}
                    onChange={handlePlaylistNameChange}
                />
            </form>
            <TrackList trackList={playlist.tracks} hasDeleteButton={true} onRemoveFromPlaylist={props.onRemoveFromPlaylist} />
            <button>Save to Spotify</button>
        </>
    )
}

export default Playlist;