import React from "react";
import logo from "./assets/images/logo.png";
import "./scss/app.scss";

export default function NavbarComp() {
  return (
    <div>
      <header className='header'>
        <div className='container'>
          <a href='/'>
            <div className='header__logo'>
              <img src={logo} alt='PizzaLOGO' />
              <div>
                <h1>ReactPizza</h1>
                <p>самая вкусная пицца во вселенной</p>
              </div>
            </div>
          </a>
          <div className='header__cart'>
            <a href='/cart' className='header__cart-button'>
              520p | 3
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
