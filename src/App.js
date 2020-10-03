import React from "react";
import logo from "./assets/images/logo.png";
import pizza1 from "./assets/images/pizza1.png";
import empty from "./assets/images/shopping-cart-colour2.png";
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
              <span className='orange-text'>популярности</span>
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
      <section className='cart'>
        <div className='cart__top'>
          <div className='cart__top-left'>Корзина</div>
          <div className='cart__top-rigth'>Очистить Корзину</div>
        </div>
        <div className='cart__pizza-block'>
          <img src={pizza1} alt='Pizza' />
          <div className='cart__pizza-block-title'>
            <h3>Сырный цыпленок</h3>
            <p>тонкое тесто, 26 см.</p>
          </div>
          <div className='cart__pizza-block-changer'>
            <div className='changer'>-</div>
            <p>2</p>
            <div className='changer'>+</div>
          </div>
          <div className='cart__pizza-block-price'>
            <span className='bold-text'>770P</span>
          </div>
          <div className='delete'>x</div>
        </div>
        <div className='cart__pizza-block'>
          <img src={pizza1} alt='Pizza' />
          <div className='cart__pizza-block-title'>
            <h3>Сырный цыпленок</h3>
            <p>тонкое тесто, 26 см.</p>
          </div>
          <div className='cart__pizza-block-changer'>
            <div className='changer'>-</div>
            <p>2</p>
            <div className='changer'>+</div>
          </div>
          <div className='cart__pizza-block-price'>
            <span className='bold-text'>770P</span>
          </div>
          <div className='delete'>x</div>
        </div>
        <div className='cart__pizza-block'>
          <img src={pizza1} alt='Pizza' />
          <div className='cart__pizza-block-title'>
            <h3>Сырный цыпленок</h3>
            <p>тонкое тесто, 26 см.</p>
          </div>
          <div className='cart__pizza-block-changer'>
            <div className='changer'>-</div>
            <p>2</p>
            <div className='changer'>+</div>
          </div>
          <div className='cart__pizza-block-price'>
            <span className='bold-text'>770P</span>
          </div>
          <div className='delete'>x</div>
        </div>
        <div className='cart__bottom'></div>
        <div className='cart__bottom-text'>
          <p>
            Всего пицц: <span className='bold-text'>3шт</span>
          </p>
          <p>
            Сумма заказа: <span className='orange-text'>900р</span>
          </p>
        </div>
        <div className='cart__bottom-buttons'>
          <div className='button-grey'> Вернуться назад</div>
          <div className='button-orange'>Оплатить сейчас</div>
        </div>
      </section>
      <section className='empty'>
        <div className='empty__box'>
          <h2>Корзина пустая </h2>
          <div className='empty__box-disc'>
            Вероятней всего, вы не заказывали ещё пиццу.
            <br /> Для того, чтобы заказать пиццу, перейди на главную страницу.
          </div>
          <div className='empty__box-image'>
            <img src={empty} alt='empty' />
          </div>
          <div className='button-black'>Вернуться назад</div>
        </div>
      </section>
    </div>
  );
}
export default App;
