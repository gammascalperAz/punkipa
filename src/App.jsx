import Navbar from "./containers/Main/Navbar";
import Main from "./containers/Main/Main";
import beers from "./data/beers";
import Card from "./components/Card/Card";



const App = () => {

  const beersArr={beers}
  // const [searchTerm] = useState();
  const handleInput = (event) => {
      event.preventDefault();
      const searchTerm = event.target.value;

  }
  
  return (
    <div className="App">
      
      <Navbar beersArr={beers}/>

      <div className="beerStyle">
      <Main  beersArr={beers}/>
      {/* <Card/> */}
      
      </div>
      
     
      

    </div>
  )
}

export default App;
