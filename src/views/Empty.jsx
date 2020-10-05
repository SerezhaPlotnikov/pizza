import React from "react";
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
          <img src='/' alt='empty' />
        </div>
        <div className='button-black'>Вернуться назад</div>
      </div>
    </section>
  );
}
