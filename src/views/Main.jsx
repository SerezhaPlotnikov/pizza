import React from "react";
import { connect } from "react-redux";
import pizza1 from "../assets/images/pizza1.png";
import { Categories } from "../components/Categories";
import { PizzaBlock } from "../components/PizzaBlock";
import { Sort } from "../components/Sort";

const pizzas = [
  {
    name: "Meat Pizza",
    price: 100,
    picture: pizza1,
    types: [0, 1],
    sizes: [20, 40],
    category: 0,
    rating: 4,
  },
  {
    name: "Meat Pizza",
    price: 100,
    picture: pizza1,
    types: [0, 1],
    sizes: [20, 30],
    category: 0,
    rating: 4,
  },
  {
    name: "Meat Pizza",
    price: 100,
    picture: pizza1,
    types: [0, 1],
    sizes: [40],
    category: 0,
    rating: 4,
  },
  {
    name: "Meat Pizza",
    price: 100,
    picture: pizza1,
    types: [0, 1],
    sizes: [20, 30, 40],
    category: 0,
    rating: 4,
  },
  {
    name: "Meat Pizza",
    price: 100,
    picture: pizza1,
    types: [0, 1],
    sizes: [20, 30, 40],
    category: 0,
    rating: 4,
  },
];
// const sizes = ["26cm", "30cm", "40cm"];
// const types = ["тонкое", " традиционное"];

export const Main = () => {
  return (
    <section className='main'>
      <div className='container'>
        <div className='main__top'>
          <Categories />
          <Sort />
        </div>
        <div className='main__title'>
          <h2>Все пиццы</h2>
        </div>
        <div className='main__items'>
          {pizzas.map((pizza, i) => (
            <PizzaBlock
              picture={pizza.picture}
              key={i}
              name={pizza.name}
              sizes={pizza.sizes}
              types={pizza.types}
              price={pizza.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
