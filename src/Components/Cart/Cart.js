import React, { useContext, useState, useEffect } from "react";
import Classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/cart-context";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [totalAmount, settotalAmount] = useState(0);
  // const [listItem, setListItem] = useState(cartCtx.items);
  console.log(cartCtx.items);

  const decremenInQuantity = (event) => {
    // console.log(event.target.id)
    const id = event.target.id;
    cartCtx.removeItem(id)
  }


  const incrementInQuantity = (e) => {
    console.log(e.target)
  }


  const cartItem = (
    <ul className={Classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li id={item.id} className={Classes.list} key={Math.random()}>
          <div>
            <h3>{item.name}</h3>
            <div className={Classes.amount}>
              ${(item.price)}
              <span className={Classes.quantity}>x{item.quantity} </span>
            </div>
            <div className={Classes.btn}>
              <button type="button" id={item.id} onClick={decremenInQuantity}>-</button>
              <button type="button" onClick={incrementInQuantity}>+</button>
            </div>
          </div>
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
        <span>${totalAmount}</span>
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
