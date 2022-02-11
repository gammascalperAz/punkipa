import { useState } from "react";
import FilterItem from "../../components/FilterItem/FilterItem";
import SearchBar from "../../components/SearchBar/SearchBar";

const NavBar = (props) => {
  const { handleInput, searchTerm } = props;

  return (
    <>
      {/* <FilterItem title="results" beersArr={beersArr}/> */}

      <SearchBar
        label="beers"
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
    </>
  );
};

export default NavBar;
