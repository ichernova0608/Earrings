function Drawer () {
    return (
        <div style={{display: 'none'}} className="overlay">
        <div className="drawer d-flex flex-column">
        <h2 className="mb-30 justify-between d-flex ">
          Корзина <img className="cu-p" src="/img/btn-remove.svg" alt="Remove"/>
          </h2>

    <div className="items">
      <div className="cartItem d-flex align-center mb-20"> 
        <div style={{backgroundImage: 'url(img/earrings/1.jpg)'}} className="cartItemImg">
        </div>
        <div className="mr-20">
        <p className="mb-5">Нежные серьги Heart</p>
        <b>999 руб</b>
        </div>
        <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
        </div>
        <div className="cartItem d-flex align-center mb-20">
        
        <div style={{backgroundImage: 'url(img/earrings/2.jpg)'}} className="cartItemImg">
        </div>
        <div className="mr-20">
        <p className="mb-5">Нежные серьги Luna</p>
        <b>999 руб</b>
        </div>
        <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
        </div>
        </div>
        <div className="cartTotalBlock">
        <ul>
          <li className="d-flex">
            <span>Итого: </span>
            <div></div>
            <b>1998 руб</b>
          </li>
          <li className="d-flex">
            <span>Доставка:</span>
            <div></div>
            <b>400 руб</b>
          </li>
        </ul>
        <button className="greenButton">
          Оформить заказ<img width={16} src="/img/arrow.svg" alt="arrow"/>
          </button>
        </div>
      </div>
      </div>
    );
}


export default Drawer;