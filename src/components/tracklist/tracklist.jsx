import Track from '../track/track';

function TrackList(props) {
    const trackListName = "My TrackList";
    const trackList = props.trackList || [];
    const tracks = trackList.map(track => (
        <Track key={track.id} track={track} />
    ));
    return (
        <div>
            {trackListName}
            {tracks}
        </div>
    )
}

export default TrackList;