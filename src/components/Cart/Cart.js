import React, {useState}from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckedOut, setIsCheckedOut]=useState(false);
  const totalAmount = `£${props.cartState.totalAmount.toFixed(2)}`;
  const hasItems = props.cartState.items.length > 0;

  const cartItemRemoveHandler = id => {
    props.removeItem(id);
  };

  const cartItemAddHandler = item => {
    props.addItem({...item, amount:1})
  };

  const orderHandler =()=>{
    setIsCheckedOut(true)
  }

  const submitOrderHandler = (userData)=>{
      fetch('http://localhost:8080/orders', {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderedItems: props.cartState.items
        })
      });
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {props.cartState.items.map((item) => (
        <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)}/>
      ))}
    </ul>
  );

  const modalActions = <div className={classes.actions}>
        <button className={classes["buttons--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
      </div>

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckedOut && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}/>}
      {!isCheckedOut && modalActions}
    </Modal>
  );
};

export default Cart;
