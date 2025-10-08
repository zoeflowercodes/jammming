import TrackList from "../tracklist/tracklist";
import './search-results.module.css';

function SearchResults(props) {
    const title = "SearchResults";
    const searchResults = props.searchResults || []
    return (
        <div className="search-results">
            <h1>{props.showTitle && title}</h1>
            <TrackList trackList={searchResults} hasAddButton={true} onAddToPlaylist={props.onAddToPlaylist}/>
        </div>
    )
}

export default SearchResults;