import { createContext, useContext, useReducer } from "react";
import { useFetchApi } from "../hooks/useFetchApi";
import { useAuth } from "./";
import { initialSharedState } from "../reducers/constants";
import { sharedReducer } from "../reducers/reducerFunctions/sharedReducer";
import axios from "axios";

const WishListContext = createContext();

const WishListProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(
    sharedReducer,
    initialSharedState
  );
  const apiData = {
    api: "/api/user/wishlist",
    property: "wishList",
  };
  const { userAuthState } = useAuth();
  const { authToken } = userAuthState;

  const config = {
    headers: {
      authorization: authToken,
    },
  };
  useFetchApi(apiData, config);

  const addToWishlist = async (product) => {
    try {
      const res = await axios.post(
        "/api/user/wishlist",
        {
          product,
        },
        config
      );
      wishlistDispatch({ type: "SET_DATA", payload: res.data.wishlist });
    } catch (error) {
      wishlistDispatch({
        type: "SET_ERROR",
        payload: "Error occured while adding item to wishlist",
      });
    }
  };

  const deleteFromWishlist = async (productId) => {
    try {
      const res = await axios.delete(`/api/user/wishlist/${productId}`, config);
      wishlistDispatch({ type: "SET_DATA", payload: res.data.wishlist });
    } catch (error) {
      wishlistDispatch({
        type: "SET_ERROR",
        payload: "Error occured while deleting item to wishlist",
      });
    }
  };

  return (
    <WishListContext.Provider
      value={{
        wishlistState,
        wishlistDispatch,
        addToWishlist,
        deleteFromWishlist,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};

const useWishList = () => useContext(WishListContext);

export { useWishList, WishListProvider };
