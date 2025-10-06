import TrackList from "../tracklist/tracklist";
import { useState } from "react";

function SearchResults(props) {
    const searchResultsName = "My SearchResults";
    return (
        <div>
            {searchResultsName}
            <TrackList trackList={props.searchResults} />
        </div>
    )
}

export default SearchResults;