function Header () {
    return (
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
        <img width={150} src="/img/logo.png" alt="logo"/>
        <div>
          <p className="opacity-5">Магазин украшений ручной работы</p>
        </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
          <img width={20} heigth={20} src="/img/cart.svg" alt="cart"/>
          <span>1000 руб</span>
          </li>
          <li>
          <img width={20} src="/img/user.svg" alt="user"/>
          </li>
        </ul>
      </header>
    );
}

export default Header;