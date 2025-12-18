import { createContext, useState } from "react";
import axios from 'axios';

// eslint-disable-next-line react-refresh/only-export-components
export const displayContext = createContext();

export const DisplayProvider = ({ children }) => {

  const apiProducts = "http://localhost:5000/products";

  const [products, setProducts] = useState({
    women: [],
    men: [],
    kids: []
  });

  const getData = async (category) => {
    try {
      const { data } = await axios.get(`${apiProducts}?category=${category}`);

      setProducts(prev => ({
        ...prev,
        [category]: data  
      }));

      return { success: true };
    } catch (error) {
      console.log(error);
      return { success: false, message: error.message };
    }
  };

  return (
    <displayContext.Provider value={{ getData, products }}>
      {children}
    </displayContext.Provider>
  );
};
