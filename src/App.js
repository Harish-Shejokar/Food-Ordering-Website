import React,{Fragment} from "react";
import Header from "./Components/Layout/Header";
import FoodSummary from "./Components/Meals/FoodSummary";

function App() {
  return (
    <Fragment>
      <Header />
      <FoodSummary />
    </Fragment>
  );
}

export default App;
