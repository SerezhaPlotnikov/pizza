import React from "react";
import { AddButton } from "./AddButton";

export function PizzaBlock(props) {
  return (
    <div className='main__items'>
      <div className='pizza-block'>
        <img src={props.picture} alt='pizza' className='pizza-block__img' />
        <h2 className='pizza-block__title'>{props.name}</h2>
        <div className='pizza-block__selector'>
          <div className='pizza-block__selector-style'>
            {props.types.map((type, index) => (
              <div className='active' key={index}>
                {type}
              </div>
            ))}
          </div>
          <div className='pizza-block__selector-size'>
            {props.sizes.map((size, index) => (
              <div className='active' key={index}>
                {size}
              </div>
            ))}
          </div>
        </div>
        <div className='pizza-block__bottom'>
          <div className='pizza-block__bottom-price'>{props.price}</div>
          <AddButton />
        </div>
      </div>
    </div>
  );
}
