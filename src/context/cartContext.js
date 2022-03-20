import { createContext, useContext, useReducer } from "react";
import { initialSharedState } from "../reducers/constants";
import { sharedReducer } from "../reducers/reducerFunctions";

/*
 *   Intial Shared State
 *   data: [],
 *   loading: false,
 *   error: "",
 */
const CartContext = createContext(initialSharedState);

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(
    sharedReducer,
    initialSharedState
  );
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
