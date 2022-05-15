import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer'

function App() {
  return (
    <div className="wrapper clear">      
       <Drawer/>
<Header/>
<div className="content p-40">
<div className="d-flex align-center justify-between mb-40">
  <h1>Все товары</h1>
  <div className="search-block d-flex">
    <img  src="/img/search.svg" alt="search"/>
    <input placeholder="Поиск..."/>
  </div>
  </div>
<div className="d-flex">
<Card />
 <div className="card">
 <div className="favorite">
<img src="/img/unliked.svg" alt="unliked" />
</div>
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
 <div className="favorite">
<img src="/img/unliked.svg" alt="unliked" />
</div>
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
 <div className="favorite">
<img src="/img/unliked.svg" alt="unliked" />
</div>
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
