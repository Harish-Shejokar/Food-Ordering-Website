import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItem] = useState([]);

  const addItemToCartHandler = (item) => {
    updateItem((prevItem) => {
      let pointer = false;
      prevItem.forEach((elem) => {
        if (elem.name === item.name) {
          pointer = true;
          elem.quantity += item.quantity;
          // elem.price = elem.price * elem.quantity;
          // console.log(elem.price);
        }
      });
      if (pointer) return [...prevItem];
      return [...prevItem, item];
    });
  };

  const removeItemFromCartHandler = (id) => {
    // console.log(id);
    updateItem((prevItem) => {
      prevItem.forEach((item) => {
        if (item.quantity === 1 && item.id === id) {
          item.quantity -= 1;
          prevItem = prevItem.filter((elem) => {
            return elem.quantity > 0;
          });
        } else if (item.id === id) {
          item.quantity -= 1;
        }
      });

      return [...prevItem];
    });
  };

  const addMoreItemsHandler = (id) => {
    console.log(id);
    updateItem(prevItem => {
      prevItem.map(item => {
        if (item.id === id) {
          item.quantity += 1;
          console.log(item.quantity)
        }
      })
      return [...prevItem]
    })
  }

  const cartContext = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    addMoreItems: addMoreItemsHandler 
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
