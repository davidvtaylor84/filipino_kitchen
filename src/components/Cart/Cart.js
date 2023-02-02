import React, { useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import CartContext from "../../Store/Cart-Context";

const Cart = (props) => {
  const [isCheckedOut, setIsCheckedOut] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const totalAmount = `£${props.cartState.totalAmount.toFixed(2)}`;
  const hasItems = props.cartState.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    props.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    props.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckedOut(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch("https://react-http-d9bb4-default-rtdb.europe-west1.firebasedatabase.app/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: props.cartState.items,
      }),
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    props.clearCartHandler();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {props.cartState.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["buttons--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckedOut && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckedOut && modalActions}
    </>
  );

  const isSubmittingModalContent = <p>Sending Order...</p>

  const didSubmitModalContent = 
  <>
    <p>Order sent! May the General keep your family safe from all Philosophers.</p>
    <div className={classes.actions}>
      <button className={classes.button} onClick={props.onClose}>
        Close
      </button>
    </div>
  </>

  return <Modal onClose={props.onClose}>
    {!isSubmitting && !didSubmit && cartModalContent}
    {isSubmitting && isSubmittingModalContent}
    {!isSubmitting && didSubmit && didSubmitModalContent}
  </Modal>;
};

export default Cart;
