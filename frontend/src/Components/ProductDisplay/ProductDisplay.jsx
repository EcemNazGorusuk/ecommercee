import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_dull_icon from "../Assets/star_dull_icon.png";
import star_icon from "../Assets/star_icon.png";
import { ShopContext } from "../../Context/ShopContext";


export default function ProductDisplay(props) {

  const product = props.product;
  const {addToCart}=useContext(ShopContext);

  const addToCartHandler=(productId)=>{
      addToCart(productId);
  }
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={product.image}></img> <img src={product.image}></img>{" "}
          <img src={product.image}></img> <img src={product.image}></img>
        </div>
        <div className="product-display-img">
          <img src={product.image} className="product-display-main-img"></img>
        </div>
      </div>
      <div className="product-display-right">
        <h1 >{product.name}</h1>
        <div className="product-display-right-star">
          <img src={star_icon}></img>
          <img src={star_icon}></img>
          <img src={star_icon}></img>
          <img src={star_icon}></img>
          <img src={star_dull_icon}></img>
          <p>(122)</p>
        </div>
        <div className="product-display-right-prices">
          <div className="product-display-right-price-old">
            {product.old_price}$
          </div>
          <div className="product-display-right-price-new">
            {product.new_price}$
          </div>
        </div>
        <div className="product-display-right-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div className="product-display-right-size">
          <h1>Select Size</h1>
          <div className="product-display-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>addToCartHandler(product.id)}>ADD TO CART</button>
        <p className="product-display-right-category">
          <span>Category :</span>
          Women,T-Shirt,Crop Top <br></br>
          <span>Tags :</span>
          Modern,Latest
        </p>
      </div>
    </div>
  );
}
