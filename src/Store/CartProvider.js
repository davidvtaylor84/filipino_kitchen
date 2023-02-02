import React from "react";
import CartContext from "./Cart-Context";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};

  const removeItemFromCartHandler = (id) => {};



  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler
  };


  return <CartContext value={cartContext}>{props.children}</CartContext>;
};

export default CartProvider;
