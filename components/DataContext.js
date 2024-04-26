// DataContext.js
import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataContext.Provider");
  }
  return context;
};

const DataContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <DataContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, useDataContext, DataContextProvider };
