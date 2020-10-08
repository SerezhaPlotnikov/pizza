import React, { useState } from "react";

export function CartBox(props) {
  const [value, setValue] = useState(0);
  const addValue = () => setValue(value + 1);
  const removeValue = () => setValue(value - 1);
  const deletePizza = (e) => console.log(e);
  return (
    <div className='cart__pizza-block'>
      <img src={props.picture} alt='Pizza' />
      <div className='cart__pizza-block-title'>
        <h3>{props.name}</h3>
        <p>
          {props.type}, {props.size}
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
        <span className='bold-text'>{props.price}p</span>
      </div>
      <div className='delete' onClick={deletePizza}>
        x
      </div>
    </div>
  );
}
