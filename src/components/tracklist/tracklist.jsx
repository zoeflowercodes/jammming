import Track from '../track/track';

function TrackList(props) {
    const trackList = props.trackList || [];
    const showAddButton = props.hasAddButton || false;
    const showDeleteButton = props.hasDeleteButton || false;
    const tracks = trackList.map(track => (
        <div>
            <Track key={track.id} track={track} />
            {showAddButton && <button onClick={() => props.onAddToPlaylist(track)}>Add to Playlist</button>}
            {showDeleteButton && <button onClick={() => props.onRemoveFromPlaylist(track)}>Remove from Playlist</button>}
        </div>
    ));
    return (
        <>
            {tracks}
        </>
    )
}

export default TrackList;