import React, { useState } from "react";

export function CartBox({ pizza, DeletePizza }) {
  const [value, setValue] = useState(0);
  const addValue = () => setValue(value + 1);
  const removeValue = () => setValue(value - 1);
  const deletePizza = () => DeletePizza(pizza);
  return (
    <div className='cart__pizza-block'>
      <img src={pizza.picture} alt='Pizza' />
      <div className='cart__pizza-block-title'>
        <h3>{pizza.name}</h3>
        <p>
          {pizza.type}, {pizza.size}
        </p>
      </div>
      <div className='cart__pizza-block-changer'>
        <div className='changer' onClick={removeValue}>
          -
        </div>
        <p>{value}</p>
        <div className='changer' onClick={addValue}>
          +
        </div>
      </div>
      <div className='cart__pizza-block-price'>
        <span className='bold-text'>{pizza.price}p</span>
      </div>
      <div className='delete' onClick={deletePizza}>
        x
      </div>
    </div>
  );
}
