import React, { useContext, useState, useEffect } from "react";
import Classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/cart-context";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [totalAmount, settotalAmount] = useState(0);
  // const [listItem, setListItem] = useState(cartCtx.items);
  console.log(cartCtx.items);
  const cartItem = (
    <ul className={Classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li className={Classes.list} key={Math.random()}>
          <span> Dish: {item.name}</span>
          <span>Price: {(item.quantity * item.price).toFixed(2)}</span>
          <span>Quantity : {item.quantity} </span>
        </li>
      ))}
    </ul>
  );
  let amount = 0;
  cartCtx.items.forEach((item) => {
    return (amount += parseInt(item.price * item.quantity));
  });

  useEffect(() => {
    settotalAmount(amount);
    // setListItem(cartCtx.items)
  }, [amount]);
  // console.log(totalAmount);

  return (
    <Modal onClose={props.onHideCart}>
      {cartItem}
      <div className={Classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={Classes.actions}>
        <button onClick={props.onHideCart} className={Classes["button--alt"]}>
          Close
        </button>
        <button className={Classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
