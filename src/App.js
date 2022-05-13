function App() {
  return (
    <div className="wrapper clear">
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
<div className="content p-40">
  <h1 className="mb-40">Все товары</h1>
<div className="d-flex">
 <div className="card">
    <img width={133} height={112} src="/img/earrings/1.jpg" alt="earrings"/>
    <h5>Нежные серьги Heart</h5>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column ">
        <p>Цена: </p>
        <b>999 руб</b>
      </div>
      <button className="button">
        <img width={11} height={11} src="/img/plus.svg" alt=""/>
      </button>
    </div>
 </div>
 <div className="card">
    <img width={133} height={112} src="/img/earrings/2.jpg" alt="earrings"/>
    <h5>Нежные серьги Luna</h5>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column ">
        <p>Цена: </p>
        <b>999 руб</b>
      </div>
      <button className="button">
        <img width={11} height={11} src="/img/plus.svg" alt=""/>
      </button>
    </div>
 </div>
 <div className="card">
    <img width={133} height={112} src="/img/earrings/3.jpg" alt="earrings"/>
    <h5>Стильные серьги Yellow Knots</h5>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column ">
        <p>Цена: </p>
        <b>999 руб</b>
      </div>
      <button className="button">
        <img width={11} height={11} src="/img/plus.svg" alt=""/>
      </button>
    </div>
 </div>
 <div className="card">
    <img width={133} height={112} src="/img/earrings/4.jpg" alt="earrings"/>
    <h5>Стильные серьги Aloe Vera</h5>
    <div className="d-flex justify-between align-center">
      <div className="d-flex flex-column ">
        <p>Цена: </p>
        <b>999 руб</b>
      </div>
      <button className="button">
        <img width={11} height={11} src="/img/plus.svg" alt=""/>
      </button>
    </div>
 </div>
 </div>
</div>
</div>
  );
}

export default App;
