import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addToCart = (product, id) => {
    const newItem = { ...product, quantity: 1 }
    const cartItem = cart.find((item) => {
      return item.id === id;
    })
    // if cart item is already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, quantity: cartItem.quantity + 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    }
  };
  // console.log(cart)
  return (
    <CartContext.Provider value={{ addToCart }}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
