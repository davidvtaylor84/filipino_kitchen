import React from 'react'
import classes from './Cart.module.css'

const Cart = (props) => {

    const cartItems = <ul className={classes['cart-items']}>[]</ul>;
  return (
    <div>
        {cartItems}
        <div className={classes.total}>
            <span>Total</span>
            <span>35.90</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['buttons--alt']}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </div>
  )
}

export default Cart