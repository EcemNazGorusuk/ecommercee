import React from "react";
import "./NewCollections.css";
import new_collection from "../Assets/new_collections";
import Items from "../Items";
export default function NewCollections() {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <div className="hr-container">
        <div className="hr-line"></div>
      </div>
      <div className="collections">
        {new_collection.map((collection, index) => {
          return <Items key={index} data={collection}></Items>;
        })}
      </div>
    </div>
  );
}
