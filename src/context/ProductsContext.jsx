import React, { createContext, useContext, useState } from "react";

const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [apiData, setApiData] = useState(null);

  return (
    <ProductsContext.Provider
      value={{
        selectedProducts,
        setSelectedProducts,
        apiData,
        setApiData,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);
