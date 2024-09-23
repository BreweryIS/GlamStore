import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // add to cart function
  const addToCart = (product, id) => {
    const newItem = { ...product, quantity: 1 };
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // if cart item is already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, quantity: cartItem.quantity + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // remover from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    })
    setCart(newCart);
  };

  // clear cart
  const clearCart = () => {
    setCart([])
  }

  // increase quantity
  const increaseQuantity = (id) => {
    const newCart = cart.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(newCart);
  }

  // decrease quantity
  const decreaseQuantity = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      if (cartItem.quantity <= 1) {
        removeFromCart(id)
      } else {
        const newCart = cart.map((item) => 
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        setCart(newCart)
      }
    }
  }
  return (
    <CartContext.Provider value={{ addToCart, cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
