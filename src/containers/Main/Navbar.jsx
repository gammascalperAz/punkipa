import { useState } from 'react';
import FilterItem from '../../components/FilterItem/FilterItem';
import SearchBar from "../../components/SearchBar/SearchBar";






const NavBar = (props) => {

  const { beersArr } = props

  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
      const cleanInput = event.target.value.toLowerCase();
      setSearchTerm(cleanInput);
  }

  const filteredBeers = beersArr.filter((beer) => {
      return beer.name.toLowerCase().includes(searchTerm);
  })
  console.log(searchTerm)

  return (

    <>
    
    <FilterItem title="results" beersArr={beersArr}/>
    {/* <FilterItem /> */}
    <SearchBar label="beers"searchTerm={searchTerm} handleInput={handleInput}/>
    </>
  )

    
};


export default NavBar;