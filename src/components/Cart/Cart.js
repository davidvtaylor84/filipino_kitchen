import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal';

const Cart = (props) => {

    const cartItems = <ul className={classes['cart-items']}>{[
        {id: 'c1', name: 'Chicken Afritada', amount: 2, price: 12.99}
    ].map((item)=>(
        <li>{item.name}</li>
    ))}</ul>;
  return (
    <Modal>
        {cartItems}
        <div className={classes.total}>
            <span>Total</span>
            <span>35.90</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['buttons--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  )
}

export default Cart