import React,{ useState} from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from './Components/Cart/Cart'
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartIsShown, setIsCart] = useState(false);

  const showCartHandler = () => {
    setIsCart(true);
  }

  const hideCartHandler = () => {
    setIsCart(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onCartOpen={showCartHandler} />
      <main>
        <Meals />
      </main> 
    </CartProvider>
  );
}

export default App;
