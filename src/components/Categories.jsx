import React from "react";
const categories = [
  "Все",
  "Мясная",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
export function Categories() {
  return (
    <div className='main__top-categories'>
      <ul>
        {categories.map((category, index) => (
          <li className='active' key={index}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
