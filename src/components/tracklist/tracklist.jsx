import Track from '../track/track';

function TrackList(props) {
    const title = "Song List";
    const trackList = props.trackList || [];
    const tracks = trackList.map(track => (
        <Track key={track.id} track={track} />
    ));
    return (
        <>
            <h2>{title}</h2>
            {tracks}
        </>
    )
}

export default TrackList;