import React from "react";
import buffet from '../../assets/buffet.jpeg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Tito's Food of Fomalhaut</h1>
        <HeaderCartButton onClick={props.onShowCart} cartNumber={props.cartNumber} cart={props.cart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={buffet} alt='Filipino buffet'/>
      </div>
    </>
  );
};

export default Header;
