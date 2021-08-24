import React from 'react';
import logo from '../../Media/SearchIcon/recipe-search-logo.svg';

const SearchHeader = ({ lastSearch}) => {
    return (
        <header>
      <div className="brand4"id="search">
  <img class="simg" src={logo} alt="" />
  <h1>Fridge Searcher App</h1>
</div>
        <p className="muted">
          Showing results for: 
        </p>
        <p><strong> { lastSearch}</strong></p>
      </header>
    );
};

export default SearchHeader;