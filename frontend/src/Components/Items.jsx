import React from "react";
import "./Items.css";
import { Link } from "react-router-dom";
export default function Items(props) {
  //props.data -> product listesini tutuyor  
  return (
    <div className="item">
      {/* user her item içindeki imagelere tıklanınca /product/productId 'ye geçiş yapsın: */}
      <Link to={`/product/${props.data.id}`}>
        <img src={props.data.image} onClick={window.scrollTo(0,0)}/>
      </Link>
      <p>{props.data.name}</p>
      <div className="item-prices">
        <div className="item-price-new">{props.data.new_price}$</div>
        <div className="item-price-old">{props.data.old_price}$</div>
      </div>
    </div>
  );
}
