import TrackList from "../tracklist/tracklist";

function SearchResults(props) {
    const title = "SearchResults";
    const searchResults = props.searchResults || []
    return (
        <>
            <h1>{props.showTitle && title}</h1>
            <TrackList trackList={searchResults} hasAddButton={true} onAddToPlaylist={props.onAddToPlaylist}/>
        </>
    )
}

export default SearchResults;