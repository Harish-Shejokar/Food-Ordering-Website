import React from "react";
import Classes from "./MealItems.module.css";
import MealItemForm from "./MealItemForm";

const MealItems = (props) => {
  return (
    <React.Fragment>
      <li className={Classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={Classes.description}>{props.description}</div>
          <div className={Classes.price}>${props.price}</div>
        </div>
        <div>
          <MealItemForm id={props.id} item={props} />
        </div>
      </li>
    </React.Fragment>
  );
};

export default MealItems;
