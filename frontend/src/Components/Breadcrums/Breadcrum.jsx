import React from "react";
import "./Breadcrum.css";
import arrowIcon from "../Assets/arrow.png";
//  Breadcrumb genellikle yatay bir dizi bağlantıdan oluşur ve her bağlantı,
//  o sayfanın veya kategorinin adını veya etiketini temsil eder.
//  Örneğin: Ana Sayfa > Kategori 1 > Alt Kategori 1 > Ürün A

export default function Breadcrum(props) {
  const character = ">";
  return (
    <div className="breadcrum">
      HOME <img src={arrowIcon} height={15} />
      SHOP <img src={arrowIcon} height={15} />
      {props.pCategory} <img src={arrowIcon} height={15} />
      {props.pName}
    </div>
  );
}
