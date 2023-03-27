import React, { useContext, useState, useEffect } from "react";
import Classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/cart-context";

const HeaderCartButton = (props) => {
  const [counter, setCounter] = useState(0);
  const cartCtx = useContext(CartContext);

  let totalCount = 0;

  cartCtx.items.forEach((item) => {
    // setCounter(counter + item.quantity);
    //    console.log(item);
    //  console.log(item.quantity);
    totalCount += parseInt(item.quantity);
  });

  useEffect(() => {
    setCounter(totalCount);
  }, [totalCount]);

  return (
    <button onClick={props.onClick} className={Classes.button}>
      <span className={Classes.icon}>
        <CartIcon />
      </span>
      <span>YourCart</span>
      <span className={Classes.badge}>{counter}</span>
    </button>
  );
};

export default HeaderCartButton;
