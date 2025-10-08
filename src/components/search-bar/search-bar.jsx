import React, { useState } from "react";

function SearchBar(props) {
    const [term, setTerm] = useState("");

    function handleChange(event) {
        const value = event.target.value;
        setTerm(value);
        props.onSearch(value);
    }
    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter A Song, Album, or Artist"
                value={term}
                onChange={handleChange}
            />
        </form>

    )
}

export default SearchBar;