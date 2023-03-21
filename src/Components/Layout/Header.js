import React,{Fragment} from "react";
import Classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
    return (
      <Fragment>
        <header className={Classes.header}>
          <h1>ReactMeals</h1>
          <HeaderCartButton />
        </header>

        <div className={Classes['main-image']}>
          <img src={mealsImage} alt="A table full of delicious meals" />
        </div>
      </Fragment>
    );
}
export default Header;