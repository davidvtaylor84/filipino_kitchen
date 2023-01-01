import React from "react";
import buffet from '../../assets/buffet.jpeg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Tito's Filipino Kitchen</h1>
        <HeaderCartButton onClick={props.onShowCart} cartNumber={props.cartNumber}/>
      </header>
      <div className={classes['main-image']}>
        <img src={buffet} alt='Filipino buffet'/>
      </div>
    </>
  );
};

export default Header;
