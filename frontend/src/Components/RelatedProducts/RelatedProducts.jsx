import React from "react";
import "./RelatedProducts.css";

import Items from "../Items";
import data_product from "../Assets/data";

export default function RelatedProducts() {
  return (
    <div className="relatedProducts">
      <h1>Related Products</h1>
      <hr></hr>
      <div className="relatedProducts-item">
        {data_product.map((dt, index) => {
          return <Items data={dt} key={index}></Items>;
        })}
      </div>
    </div>
  );
}
