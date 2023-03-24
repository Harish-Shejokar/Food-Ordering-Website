import React,{Fragment, useState} from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from './Components/Cart/Cart'

function App() {
  const [cartIsShown, setIsCart] = useState(false);

  const showCartHandler = () => {
    setIsCart(true);
  }

  const hideCartHandler = () => {
    setIsCart(false);
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onCartOpen={showCartHandler} />
      <main>
        <Meals />
      </main>
      
    </Fragment>
  );
}

export default App;
