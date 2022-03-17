import { createContext, useContext, useReducer } from "react";
import { sharedReducer } from "../reducers/reducerFunctions/sharedReducer";
import { useFetchApi } from "../hooks/useFetchApi";

const ProductContext = createContext({
  productState: { ...sharedReducer },
  productDispatch: () => {},
});

const ProductProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(productReducer, initialState);
  const apiData = {
    api: "/api/products",
    property: "products",
  };
  const { state: productState, dispatch: productDispatch } =
    useFetchApi(apiData);

  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

export { useProducts, ProductProvider };
