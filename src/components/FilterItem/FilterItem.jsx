import React from 'react';
import "./FilterItem.scss";

const FilterItem = (props) => {

  const {image, name, tagline,  description, abv} = props


  return (
    <div className="containerchecks">
    
      <label htmlFor="myCheck">High ABV (greater than 6.0%)</label>
      <input type="checkbox" id="myCheck" onClick=""/>
      <label htmlFor="myCheck">Classic Range</label>
      <input type="checkbox" id="myCheck" onClick=""/>
      <label htmlFor="myCheck">Acidic (ph less than 4%)</label>
      <input type="checkbox" id="myCheck" onClick=""/>
     
    </div>
    
  
  )
  }
export default FilterItem;