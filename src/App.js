import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Layout/Footer";
import { useState, useReducer } from "react";


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const defaultCartState = {
    items: [],
    totalAmount: 0
  }

  const cartReducer = (state, action) =>{
    if(action.type === 'ADD'){
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
      const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
      const existingCartItem = state.items[existingCartItemIndex]
      let updatedItems;

      if(existingCartItem) {
        const updatedItem ={
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }
      
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      }
    }
    if(action.type === 'REMOVE'){
      const existingCartItemIndex = state.items.findIndex(
        item => item.id === action.id
      );
      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems;
      if(existingItem.amount === 1){
        updatedItems = state.items.filter(item => item.id !== action.id)
      } else{
        const updatedItem = {...existingItem, amount: existingItem.amount -1};
        updatedItems = [...state.items]
        updatedItems[existingCartItemIndex] = updatedItem
      }
      return {
        items:updatedItems,
        totalAmount: updatedTotalAmount
      }
    }
    return defaultCartState;
  }

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item})
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id})
  };


  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} cartState={cartState} addItem={addItemToCartHandler} removeItem={removeItemFromCartHandler}/> }
      <Header onShowCart={showCartHandler} cartNumber={cartState.items} cart={cartState}/>
      <main>
        <Meals addItem={addItemToCartHandler}/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
