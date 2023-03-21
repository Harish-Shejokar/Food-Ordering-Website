import React from "react";
import Classes from './MealItems.module.css';

const MealItems = (props) => {
    return (
      <li key={Math.random()} className={Classes.item}>
        <h3>{props.name}</h3>
        <p className={Classes.description}>{props.description}</p>
            <h2 className={Classes.price}>${props.price}</h2>
            <hr />
      </li>
    );
 }

export default MealItems;