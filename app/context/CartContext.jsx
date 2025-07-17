'use client'
import client from "@/lib/contentful";
import {createContext, useContext, useState} from "react";

const CartContext = createContext();

export function useCart(){
  return useContext(CartContext);
}


export function CartProvider({ children }){
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    console.log("Adding to cart:", product);
    setCartItems((prevItems)=> [...prevItems, product] )
  }

  const removeFromCart = (productId) => {
    setCartItems((prevItems)=> prevItems.filter(item => item.id !== productId))
  }

  const clearCart = ()=> {
    setCartItems([]);
  }

  return (
    <CartContext.Provider value={{cartItems, addToCart, removeFromCart, clearCart}}>
      {children}
    </CartContext.Provider>
  )

}
