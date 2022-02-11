import React from 'react';
import "./Card.scss";

const FiltersList = (props) => {

  const {image, name, tagline,  description, abv} = props


  return (
    <div className="container">
      <img className="cardStyle1"src={image} />
      <p className="cardStyle">{name}</p>
      <p className="cardStyle">{tagline}</p>
      <p className="cardStyle">{description}</p>
      <p className="cardStyle">{abv}</p>
     
    </div>
    
  )
}

export default FiltersList;

