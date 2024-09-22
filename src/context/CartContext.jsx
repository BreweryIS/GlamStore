import React, { createContext } from "react";

export const CartContext = createContext();

const addToCart = () => {
  console.log("add to cart");
};

const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value={{addToCart}}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
