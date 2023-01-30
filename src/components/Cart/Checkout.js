import React from 'react'
import classes from '/Checkout.module.css';

const Checkout = () => {
  return (
    <form>
        <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
        </div>
    </form>
  )
}

export default Checkout