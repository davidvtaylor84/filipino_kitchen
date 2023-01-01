import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState, useReducer } from "react";


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const defaultCartState = {
    items: [],
    totalAmount: 0
  }

  const cartReducer = (state, action) =>{
    if(action.type === 'ADD'){
      const updatedItems = state.items.concat(action.item);
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
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
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} cartNumber={cartState.items}/>
      <main>
        <Meals addItem={addItemToCartHandler}/>
      </main>
    </>
  );
}

export default App;
