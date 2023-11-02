//rfc

import React, { useContext, useState } from "react";
import "./NavBar.css";
import logo from "../Assets/basket.png"; //logo adıyla bu resmi kullanıcaz
import cart_icon from "../Assets/cart_icon.png"; //cart_icon adıyla bu resmi kullanıcaz
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
export default function NavBar() {
  const [menu, setMenu] = useState("shop");
  const { cartItems } = useContext(ShopContext); 

   // Sepetteki toplam ürün sayısı için
   const totalCartItems = Object.values(cartItems).reduce(
    (total, quantity) => total + quantity,
    0 //ilk başta 0
  );

  return (
    <div className="navBar">
      <div className="nav-logo">
        <img src={logo} alt="logo"></img>
        <p>SHOP UNIVERSE</p>
      </div>
      <ul className="nav-menu ">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}

          {/*Link ile Route içindeki pathi bağla */}
        </li>

        <li
          onClick={() => {
            setMenu("womans");
          }}
        >
          <Link to="/womans" style={{ textDecoration: "none" }}>
            Women
          </Link>
          {menu === "womans" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mans");
          }}
        >
          <Link to="/mans" style={{ textDecoration: "none" }}>
            Men
          </Link>
          {menu === "mans" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids" style={{ textDecoration: "none" }}>
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-card">
        <Link to="/login">
          <button>Login</button>{" "}
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart_icon"></img>{" "}
        </Link>
        <div className="nav-cart-count">{totalCartItems}</div>
        {/* <p>{menu}</p> */}
      </div>
    </div>
  );
}
