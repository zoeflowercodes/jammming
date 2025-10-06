import TrackList from "../tracklist/tracklist";

function SearchResults(props) {
    const title = "SearchResults";
    const searchResults = props.searchResults || {}
    return (
        <>
            <h1>{title}</h1>
            <TrackList trackList={searchResults} />
        </>
    )
}

export default SearchResults;