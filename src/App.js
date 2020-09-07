import React from "react";
import logo from "./assets/images/logo.png";
import pizza1 from "./assets/images/pizza1.png";
import "./scss/app.scss";

function App() {
  return (
    <div className='wrapper'>
      <header className='header'>
        <div className='container'>
          <a href='/'>
            <div className='header__logo'>
              <img src={logo} alt='PizzaLOGO' />
              <div>
                <h1>ReactPizza</h1>
                <p>самая вкусная пицца во вселенной</p>
              </div>
            </div>
          </a>
          <div className='header__cart'>
            <a href='/cart' className='header__cart-button'>
              520p | 3
            </a>
          </div>
        </div>
      </header>
      <section className='main'>
        <div className='container'>
          <div className='main__top'>
            <div className='main__top-categories'>
              <ul>
                <li className='active'>Все</li>
                <li>Мясные</li>
                <li>Вегетарианская</li>
                <li>Гриль</li>
                <li>Острые</li>
                <li>Закрытые</li>
              </ul>
            </div>
            <div className='main__top-sort'>
              Сортировка по:
              <span className='main__top-sort-popup'>популярности</span>
            </div>
          </div>
          <div className='main__title'>
            <h2>Все пиццы</h2>
          </div>
          <div className='main__items'>
            <div className='pizza-block'>
              <img src={pizza1} alt='pizza' className='pizza-block__img' />
              <h2 className='pizza-block__title'>Meat Pizza</h2>
              <div className='pizza-block__selector'>
                <div className='pizza-block__selector-style'>
                  <div className='active'>тонкое</div>
                  <div>традиционное</div>
                </div>
                <div className='pizza-block__selector-size'>
                  <div className='active'>26cm</div>
                  <div>30cm</div>
                  <div>40cm</div>
                </div>
              </div>
              <div className='pizza-block__bottom'>
                <div className='pizza-block__bottom-price'>от 999р</div>
                <div className='active pizza-block__bottom-add'>
                  + Добавить | 2
                </div>
              </div>
            </div>
            <div className='pizza-block'>
              <img src={pizza1} alt='pizza' className='pizza-block__img' />
              <h2 className='pizza-block__title'>Meat Pizza</h2>
              <div className='pizza-block__selector'>
                <div className='pizza-block__selector-style'>
                  <div className='active'>тонкое</div>
                  <div>традиционное</div>
                </div>
                <div className='pizza-block__selector-size'>
                  <div className='active'>26cm</div>
                  <div>30cm</div>
                  <div>40cm</div>
                </div>
              </div>
              <div className='pizza-block__bottom'>
                <div className='pizza-block__bottom-price'>от 999р</div>
                <div className='pizza-block__bottom-add'>+ Добавить | 2</div>
              </div>
            </div>
            <div className='pizza-block'>
              <img src={pizza1} alt='pizza' className='pizza-block__img' />
              <h2 className='pizza-block__title'>Meat Pizza</h2>
              <div className='pizza-block__selector'>
                <div className='pizza-block__selector-style'>
                  <div className='active'>тонкое</div>
                  <div>традиционное</div>
                </div>
                <div className='pizza-block__selector-size'>
                  <div className='active'>26cm</div>
                  <div>30cm</div>
                  <div>40cm</div>
                </div>
              </div>
              <div className='pizza-block__bottom'>
                <div className='pizza-block__bottom-price'>от 999р</div>
                <div className='pizza-block__bottom-add'>+ Добавить | 2</div>
              </div>
            </div>
            <div className='pizza-block'>
              <img src={pizza1} alt='pizza' className='pizza-block__img' />
              <h2 className='pizza-block__title'>Meat Pizza</h2>
              <div className='pizza-block__selector'>
                <div className='pizza-block__selector-style'>
                  <div className='active'>тонкое</div>
                  <div>традиционное</div>
                </div>
                <div className='pizza-block__selector-size'>
                  <div className='active'>26cm</div>
                  <div>30cm</div>
                  <div>40cm</div>
                </div>
              </div>
              <div className='pizza-block__bottom'>
                <div className='pizza-block__bottom-price'>от 999р</div>
                <div className='pizza-block__bottom-add'>+ Добавить | 2</div>
              </div>
            </div>
            <div className='pizza-block'>
              <img src={pizza1} alt='pizza' className='pizza-block__img' />
              <h2 className='pizza-block__title'>Meat Pizza</h2>
              <div className='pizza-block__selector'>
                <div className='pizza-block__selector-style'>
                  <div className='active'>тонкое</div>
                  <div>традиционное</div>
                </div>
                <div className='pizza-block__selector-size'>
                  <div className='active'>26cm</div>
                  <div>30cm</div>
                  <div>40cm</div>
                </div>
              </div>
              <div className='pizza-block__bottom'>
                <div className='pizza-block__bottom-price'>от 999р</div>
                <div className='pizza-block__bottom-add'>+ Добавить | 2</div>
              </div>
            </div>
            <div className='pizza-block'>
              <img src={pizza1} alt='pizza' className='pizza-block__img' />
              <h2 className='pizza-block__title'>Meat Pizza</h2>
              <div className='pizza-block__selector'>
                <div className='pizza-block__selector-style'>
                  <div className='active'>тонкое</div>
                  <div>традиционное</div>
                </div>
                <div className='pizza-block__selector-size'>
                  <div className='active'>26cm</div>
                  <div>30cm</div>
                  <div>40cm</div>
                </div>
              </div>
              <div className='pizza-block__bottom'>
                <div className='pizza-block__bottom-price'>от 999р</div>
                <div className='pizza-block__bottom-add'>+ Добавить | 2</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
