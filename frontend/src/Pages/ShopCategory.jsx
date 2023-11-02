import React, { useContext } from "react";
import "./ShopCategory.css";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";

import Items from "../Components/Items";
import { ShopContext } from "../Context/ShopContext";
import FilterWithDropdown from "../Components/Dropdown/FilterWithDropdown";
export default function ShopCategory(props) {
  const { allProducts, sortOrder, setSortOrder, sortedProducts } = useContext(
    ShopContext
  );
  return (
    <div >
      <img src={props.banner} className="shopCategory-banner"></img>
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div >
          {/* Sort by <img src={dropdown_icon}></img> */}
          <FilterWithDropdown></FilterWithDropdown>
        </div>
      </div>
      <div className="shopCategory-products">
        {allProducts.map((product, index) => {
          if (props.category === product.category) {
            return <Items key={index} data={product}></Items>;
          } else {
            return null;
          }
        })}
      </div>
      <div className="showCategory-loadmore">Explore More</div>
    </div>
  );
}
