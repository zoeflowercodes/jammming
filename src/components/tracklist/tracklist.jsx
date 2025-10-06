import Track from '../track/track';

function TrackList() {
    const trackListName = "My TrackList";
    return (
        <div>
            {trackListName}
            <Track/>
        </div>
    )
}

export default TrackList;