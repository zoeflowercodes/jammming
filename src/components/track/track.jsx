function Track(props) {
    const track = props.track;
    return (
        <div key={track.id}>
            <p>{track.name}</p>
            <p>{track.artist}</p>
            <p>{track.album}</p>
        </div>
    )
}

export default Track;