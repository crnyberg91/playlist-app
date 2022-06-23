import React from 'react';
import './SearchBar.css';

/**
 * functional component to search the spotify api
 * @parameter event what the user input entered
 * @returns api get request search results from spotify based on event
 */
const SearchBar: React.FC = () => {
    return (
<div className="SearchBar">
  <input placeholder="Enter A Song, Album, or Artist" />
  <button className="SearchButton">SEARCH</button>
</div>
    )
}

export default SearchBar;