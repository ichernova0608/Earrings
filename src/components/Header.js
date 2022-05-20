import React from 'react';
import {Link} from 'react-router-dom';
import { useCart } from '../hooks/useCart';


function Header (props) {
  const { totalPrice } = useCart();

    return (
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <Link to= "">
        <img width={150} src="img/logo.png" alt="logo"/>
        </Link>
        <div>
          <p className="opacity-5">Магазин украшений ручной работы</p>
        </div>
        </div>
        
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={20} heigth={20} src="img/cart.svg" alt="Корзина"/>
          <span>{totalPrice} руб</span>
          </li>
          <li>
          <Link to="favorites">
          <img className="mr-20 cu-p" width={20}  src="img/heart.svg" alt="Закладки"/>
          </Link>
          </li>
          <li>
          <Link to="orders">
            <img width={20} height={20} src="img/user.svg" alt="Пользователь" />
          </Link>
          </li>
        </ul>
      </header>
    );
}

export default Header;