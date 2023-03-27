import React, { useContext} from "react";
import Classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
import CartContext from "../../Store/cart-context";

const MealItemForm = (props) => {
  

  const cartCtx = useContext(CartContext);
 
  const addItemToCart = (event) => {
    event.preventDefault();
    const quantity = document.getElementById("amount" + props.id).value;
    const obj = { ...props.item, quantity: parseInt(quantity) }
   
    // console.log(obj);
    cartCtx.addItem(obj);
    
  };

  return (
    <form className={Classes.form}>
      {/* {console.log('inside reder',cartCtx.items)} */}
      <Input
        label={"Amount"}
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+Add</button>
    </form>
  );
};

export default MealItemForm;
