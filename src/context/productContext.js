import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../reducers/productReducer";

const ProductContext = createContext();

const initialState = {
  products: [],
  loading: false,
  error: "",
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { useProducts, ProductProvider };
