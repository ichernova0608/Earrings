function Card () {
    return (
        <div className="card">
<div className="favorite">
<img src="/img/unliked.svg" alt="unliked" />
</div>
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
    );
}

export default Card;