import React, { createContext, useState } from "react";
import allProducts from "../Components/Assets/all_product";

const getDefaultCart = () => {
  //sepet işlemleri
  let cart = {}; //empty object
  for (let index = 0; index < allProducts.length + 1; index++) {
    cart[index] = 0; //ilk aşama
  }
  return cart;
};

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  //sepet işlemleri bilgisini tutmak için useState kullandım:
  const [cartItems, setCartItems] = useState(getDefaultCart());
  console.log(cartItems);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
    console.log(cartItems);
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };

  // Filtreleme için state
  const [sortOrder, setSortOrder] = useState("");

  // Ürünleri fiyatlarına göre sırala
  const sortedProducts = [...allProducts];
  if (sortOrder === "asc") {
    // Artan sıralama
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    // Azalan sıralama
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  // Productları filtreleme işlemini gerçekleştir ->price

  //use in Index.js
  const contextValue = {
    allProducts,
    cartItems,
    addToCart,
    removeFromCart,
    sortOrder,
    setSortOrder,
    sortedProducts,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
