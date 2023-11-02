import React from "react";
//rfc
import "./Offers.css";
import exclusiveImage from "../Assets/exclusive_image.png";
export default function Offers() {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusiveImage} alt=""></img>
      </div>
    </div>
  );
}
