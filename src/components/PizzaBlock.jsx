import classNames from "classnames";
import React, { useState } from "react";
import { AddButton } from "./AddButton";

export function PizzaBlock({
  id,
  name,
  picture,
  price,
  sizes,
  types,
  onClickAddPizza,
}) {
  const sizesName = [26, 30, 40];
  const typesName = ["тонкое", " традиционное"];
  const [activeTypes, setActiveTypes] = useState(types[0]);
  const [activeSizes, setActiveSizes] = useState(sizes[0]);
  const onAddPizza = () => {
    const obj = {
      id,
      name,
      picture,
      price,
      size: sizesName[activeSizes],
      type: typesName[activeTypes],
    };
    onClickAddPizza(obj);
    console.log(obj);
  };
  return (
    <div className='main__items'>
      <div className='pizza-block'>
        <img src={picture} alt='pizza' className='pizza-block__img' />
        <h2 className='pizza-block__title'>{name}</h2>
        <div className='pizza-block__selector'>
          <div className='pizza-block__selector-style'>
            {typesName.map((type, index) => (
              <div
                key={index + index}
                onClick={() => setActiveTypes(index)}
                className={classNames({
                  active: activeTypes === index,
                  disabled: !types.includes(index),
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
                  disabled: !sizes.includes(size),
                })}
                key={index}
              >
                {size}cm.
              </div>
            ))}
          </div>
        </div>
        <div className='pizza-block__bottom'>
          <div className='pizza-block__bottom-price'>{price}$</div>
          <AddButton onClick={onAddPizza} children={`+ Добавить |`} />
        </div>
      </div>
    </div>
  );
}
