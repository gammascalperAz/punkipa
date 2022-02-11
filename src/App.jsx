import Navbar from "./containers/Main/Navbar";
import Main from "./containers/Main/Main";
import beers from "./data/beers";
import { useState } from "react";

const App = () => {
 

  const [searchTerm, setSearchTerm] = useState("");
  const [ beersArr, setBeersArr ] = useState(beers)

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
    console.log(searchTerm);
    const newArr = beersArr.filter((beer) => {
     
      
        return beer.name.toLowerCase().includes(searchTerm);
  })
    setBeersArr(newArr)
};

  // const filteredBeers = beersArr.filter((beer) => {
  //   const newArr = beer.name.toLowerCase().includes(searchTerm)
  //   setBeersArr(newArr)
  //   return beer.name.toLowerCase().includes(searchTerm);
  // });

  return (
    <>
     
      <div className="beerStyle">
      <Navbar handleInput={handleInput} searchTerm={searchTerm} />
        <Main beersArr={beersArr} />
      
        
      </div>
    </>
  );
};
export default App;

//   const beersArr={beers}
//   // const [searchTerm, set] = useState();
//   const handleInput = (event) => {
//       event.preventDefault();
//       const searchTerm = event.target.value;

//   }

//   return (
//     <div className="App">

//       <Navbar beersArr={beers}/>

//       <div className="beerStyle">
//       <Main  beersArr={beers}/>
//       {/* <Card/> */}

//       </div>

//     </div>
//   )
// }
