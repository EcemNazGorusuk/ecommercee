import React from "react";
import "./Popular.css";
import Items from "./Items";
import data_product from "../Components/Assets/data";
export default function Popular() {
  const data = data_product;
  return (
    <div className="popular">
      <h1>POPULAR IN WOMAN </h1>
      <div className="hr-container">
        <div className="hr-line"></div>
      </div>
      <div className="popular-item">
        {/* map operation for data object*/}
        {data.map((dt, index) => (
          <Items key={index} data={dt} />
        ))}
      </div>
    </div>
  );
}
