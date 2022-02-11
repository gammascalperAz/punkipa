import React from 'react';
import Card from "../../components/Card/Card";
import beers from "../../data/beers";
// import CardList from "../../components/CardList";
import "./Main.scss";
import CardList from '../../components/CardList/CardList';






const Main = (props) => {
  const { beersArr } = props
  const beerMapped = beersArr.map((beer) => {
    return <Card
    image={beer.image_url}
    name={beer.name}
    tagline={beer.tagline}
    description={beer.description}
    abv={beer.abv}
    />
      
  });
  return (
    <div>
      {beerMapped}
    </div>
  )
};


export default Main;