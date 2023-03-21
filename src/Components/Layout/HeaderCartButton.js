import React from "react";
import Classes from './HeaderCartButton.module.css';
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = () => {
    return (
        <button className={Classes.button}>
            <span className={Classes.icon}><CartIcon /></span>
            <span>YourCart</span>
            <span className={Classes.badge}>
               3
            </span>
        </button>
    )
}

export default HeaderCartButton;