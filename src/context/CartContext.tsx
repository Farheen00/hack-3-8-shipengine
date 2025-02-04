// "use client";

// import React, { createContext, useContext, useState, ReactNode } from "react";

// interface CartItem {
//   id: string;
//   title: string;
//   price: number;
//   image: string;
//   quantity: number;
// }

// interface CartContextType {
//   cart: CartItem[];
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (id: string) => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   const addToCart = (item: CartItem) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
//       if (existingItem) {
//         return prevCart.map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         );
//       }
//       return [...prevCart, { ...item, quantity: 1 }];
//     });

"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });

    // Show a success notification
    toast.success(`${item.title} successfully added to cart!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };


  const removeFromCart = (id: string) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== id)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
