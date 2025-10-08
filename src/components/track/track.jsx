import './track.module.css';


function Track(props) {
    const track = props.track;
    return (
        <div className="track">
            <div className="track-info">
                <p>{track.name}</p>
                <p>{track.artist}</p>
                <p>{track.album}</p>
            </div>
        </div>
    )
}

export default Track;