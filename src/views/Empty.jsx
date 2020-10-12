import React from "react";
import { Link } from "react-router-dom";
import EmptyCard from "../assets/images/empty-cart.png";
import "../scss/app.scss";

export function Empty() {
  return (
    <section className='empty'>
      <div className='empty__box'>
        <h2>Корзина пустая </h2>
        <div className='empty__box-disc'>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br /> Для того, чтобы заказать пиццу, перейди на главную страницу.
        </div>
        <div className='empty__box-image'>
          <img src={EmptyCard} alt='empty' />
        </div>
        <Link to='/' className='button-black'>
          Вернуться назад
        </Link>
      </div>
    </section>
  );
}
