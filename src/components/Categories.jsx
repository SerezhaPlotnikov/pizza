import classNames from "classnames";
import React, { useState } from "react";
const categories = [
  "Все",
  "Мясная",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
export function Categories() {
  const [activeCategory, setActiveCategory] = useState(0);
  return (
    <div className='main__top-categories'>
      <ul>
        {categories.map((category, index) => (
          <li
            onClick={() => setActiveCategory(index)}
            className={classNames({ active: activeCategory === index })}
            key={index}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
