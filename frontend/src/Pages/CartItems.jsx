import React, { useContext, useState } from "react";
import "./CartItems.css";
import removeIcon from "../Components/Assets/cart_cross_icon.png";
import { ShopContext } from "../Context/ShopContext";
import Product from "./Product";
export default function CartItems() {
  const { allProducts, cartItems, removeFromCart } = useContext(ShopContext);
  const removeFromCartHandler = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="cartItems">
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr></hr>
      {allProducts.map((product, index) => {
        if (cartItems[product.id] > 0) {
          return (
            <div className="">
              <div className="cartItems-format">
                <img
                  src={product.image}
                  className="carticon-product-icon"
                ></img>
                <p>{product.name}</p>
                <p>{product.new_price}$</p>
                <button className="cartItems-quantity">
                  {cartItems[product.id]}
                </button>
                {/* cartItems[product.id]--> sepet içinde bu belirli üründen kaç tane olduğunu temsil eder. */}
                <p>{product.new_price * cartItems[product.id]}$</p>

                <p>
                  <img
                    src={removeIcon}
                    onClick={() => removeFromCartHandler(product.id)}
                  ></img>
                </p>
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="cartItems-down">
        {/* TOTAL SUM */}
        {(() => {
          let informationOfProductsPriceMessage = "";
          let total = 0;
          for (let i = 0; i < allProducts.length; i++) {
            const product = allProducts[i];
            if (cartItems[product.id] > 0) {
              total += product.new_price * cartItems[product.id];

              informationOfProductsPriceMessage = (
                <div className="informationOfProductsPriceMessage">
                  <h1>cart Totals </h1>
                  <div className="cartTotals">
                    <p>TOTAL AMOUNT </p>
                    <p>{total}$</p>
                  </div>
                  <hr></hr>
                  <div className="cartTotals">
                    <p>SHIPPING FEE </p>
                    <p>FREE</p>
                  </div>
                  <div>
                    <button>PROCEED TO CHECKOUT</button>
                  </div>
                </div>
              );
            }
          }

          return (
            <div className="cardItems-total">
              {informationOfProductsPriceMessage}
            </div>
          );
        })()}
      </div>
    </div>
  );
}
