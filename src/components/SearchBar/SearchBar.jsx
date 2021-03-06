import React from "react";

import "./SearchBar.scss";

const SearchBar = (props) => {
  const { label, searchTerm, handleInput } = props;

  return (
    <form className="search-box">
      <label htmlFor={label} className="search-box__label"></label>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInput}
        className="search-box__input"
      />
    </form>
  );
};

export default SearchBar;
