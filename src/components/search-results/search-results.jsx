import TrackList from "../tracklist/tracklist";

function SearchResults() {
    const searchResultsName = "My SearchResults";
    return (
        <div>
            {searchResultsName}
            <TrackList/>
        </div>
    )
}

export default SearchResults;