import React, { useContext } from "react";
import "./Product.css";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

export default function Product(props) {
  const { allProducts } = useContext(ShopContext);
  const { productId } = useParams();
  const productIdNumber = parseInt(productId);
  const product = allProducts.find((p) => p.id === productIdNumber);

  if (!product) {
    // Ürün bulunamazsa bir hata mesajı gösterilebilir veya başka bir işlem yapılabilir
    return <div>Ürün bulunamadı.</div>;
  }

  return (
    <div>
      <Breadcrum
        product={product}
        pName={product.name}
        pCategory={product.category}
      ></Breadcrum>
      <ProductDisplay product={product} />
      <DescriptionBox product={product} />
      <RelatedProducts></RelatedProducts>
    </div>
  );
}
