function Track(props) {
    const track = props.track;
    const trackName = "My Track";
    return (
        <div>
            {trackName}
            {track.name}
            {track.artist}
            {track.album}
        </div>
    )
}

export default Track;