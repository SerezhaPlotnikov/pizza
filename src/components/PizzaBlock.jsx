import classNames from "classnames";
import React, { useState } from "react";
import { AddButton } from "./AddButton";

export function PizzaBlock(props) {
  const sizesName = [26, 30, 40];
  const typesName = ["тонкое", " традиционное"];
  const [activeTypes, setActiveTypes] = useState(props.types[0]);
  const [activeSizes, setActiveSizes] = useState(props.sizes[0]);
  return (
    <div className='main__items'>
      <div className='pizza-block'>
        <img src={props.picture} alt='pizza' className='pizza-block__img' />
        <h2 className='pizza-block__title'>{props.name}</h2>
        <div className='pizza-block__selector'>
          <div className='pizza-block__selector-style'>
            {typesName.map((type, index) => (
              <div
                key={index + index}
                onClick={() => setActiveTypes(index)}
                className={classNames({
                  active: activeTypes === index,
                  disabled: !props.types.includes(index),
                })}
              >
                {type}
              </div>
            ))}
          </div>
          <div className='pizza-block__selector-size'>
            {sizesName.map((size, index) => (
              <div
                onClick={() => setActiveSizes(index)}
                className={classNames({
                  active: activeSizes === index,
                  disabled: !props.sizes.includes(size),
                })}
                key={index}
              >
                {size}cm.
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
