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
                    placeholder="Enter Playlist Name"
                    value={playlist.name}
                    onChange={handlePlaylistNameChange}
                />
            </form>
            <TrackList trackList={playlist.tracks} hasDeleteButton={true} onRemoveFromPlaylist={props.onRemoveFromPlaylist} />
            {playlist.tracks.length !== 0 && (<button onClick={props.onSavePlaylist}>Save to Spotify</button>)}
        </>
    )
}

export default Playlist;