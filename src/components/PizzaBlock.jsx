import React from "react";
import { AddButton } from "./AddButton";
import pizza1 from "./assets/images/pizza1.png";
import "./scss/app.scss";

const sizes = ["26cm", "30cm", "40cm"];
const types = ["тонкое", " традиционное"];

export default function PizzaBlock(props) {
  return (
    <div className='main__items'>
      <div className='pizza-block'>
        {/* Не забыть перевести все через пропсы. сейчас для просто показательно */}
        <img src={pizza1} alt='pizza' className='pizza-block__img' />
        <h2 className='pizza-block__title'>{props.name}</h2>
        <div className='pizza-block__selector'>
          <div className='pizza-block__selector-style'>
            {types.map((type, index) => (
              <div className='active' key={index}>
                {type}
              </div>
            ))}
          </div>
          <div className='pizza-block__selector-size'>
            {sizes.map((size, index) => (
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
