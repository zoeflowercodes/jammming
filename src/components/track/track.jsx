function Track(props) {
    const track = props.track;
    return (
        <div>
            {track.name} <br/>
            {track.artist} <br/>
            {track.album}
        </div>
    )
}

export default Track;