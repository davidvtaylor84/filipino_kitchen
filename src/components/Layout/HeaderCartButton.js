import React, {useEffect, useState} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";


const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const numberOfCartItems = props.cartNumber.reduce((curNumber, item)=>{
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(()=>{
    if(props.cartNumber.length === 0){
      return;
    }
    setBtnIsHighlighted(true)
    const timer = setTimeout(()=>{
      setBtnIsHighlighted(false);
    }, 300);
    return ()=>{
      clearTimeout(timer)
    }
  }, [props.cart])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Basket</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
