import React from "react";
import { connect } from "react-redux";
// import pizza1 from "../assets/images/pizza1.png";
import { Categories } from "../components/Categories";
import { PizzaBlock } from "../components/PizzaBlock";
import { Sort } from "../components/Sort";
import { AddPizza } from "../redux/main/actions";

// const pizzas = [
//   {
//     name: "Meat Pizza",
//     price: 100,
//     picture: pizza1,
//     types: [0, 1],
//     sizes: [20, 40],
//     category: 0,
//     rating: 4,
//   },
//   {
//     name: "Meat Pizza",
//     price: 100,
//     picture: pizza1,
//     types: [0, 1],
//     sizes: [20, 30],
//     category: 0,
//     rating: 4,
//   },
//   {
//     name: "Meat Pizza",
//     price: 100,
//     picture: pizza1,
//     types: [0, 1],
//     sizes: [40],
//     category: 0,
//     rating: 4,
//   },
//   {
//     name: "Meat Pizza",
//     price: 100,
//     picture: pizza1,
//     types: [0, 1],
//     sizes: [20, 30, 40],
//     category: 0,
//     rating: 4,
//   },
//   {
//     name: "Meat Pizza",
//     price: 100,
//     picture: pizza1,
//     types: [0, 1],
//     sizes: [20, 30, 40],
//     category: 0,
//     rating: 4,
//   },
// ];
// const sizes = ["26cm", "30cm", "40cm"];
// const types = ["тонкое", " традиционное"];

const Main = ({ pizzas, loading, AddPizza }) => {
  // const AddPizza = (e) => console.log(e);
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
              onClickAddPizza={AddPizza}
              picture={pizza.picture}
              key={i}
              name={pizza.name}
              sizes={pizza.sizes}
              types={pizza.types}
              price={pizza.price}
              id={pizza.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  pizzas: state.data,
  loading: state.loading,
});

const mapDispatchToProps = {
  AddPizza,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
