import React, { useState } from "react";

function SearchBar(props) {
    const [term, setTerm] = useState("");

    function handleChange(event) {
        setTerm(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault(); // prevent page reload
        props.onSearch(term);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter A Song, Album, or Artist" onChange={handleChange}/>
            <button type="submit" >Search</button>
        </form>

    )
}

export default SearchBar;