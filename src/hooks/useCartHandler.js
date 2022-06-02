import axios from "axios";
import { useSelector } from "react-redux";
import { useCart } from "../context";

export const useCartHandler = () => {
  const { authToken } = useSelector((state) => state.auth);
  const { cartDispatch } = useCart();

  const config = {
    headers: {
      authorization: authToken,
    },
  };

  const addToCart = async (product) => {
    try {
      cartDispatch({ type: "SET_LOADING" });
      const res = await axios.post(
        "/api/user/cart",
        {
          product: product,
        },
        config
      );
      if (res.status === 201) {
        cartDispatch({ type: "SET_DATA", payload: res.data.cart });
        cartDispatch({ type: "SET_SUCCESS" });
      } else {
        cartDispatch({
          type: "SET_ERROR",
          payload: `Status ${res.status} : Error occured while adding item to cart.`,
        });
      }
    } catch (error) {
      cartDispatch({
        type: "SET_ERROR",
        payload: "Error occured while adding item to cart.",
      });
    }
  };

  const deleteFromCart = async (productId) => {
    try {
      cartDispatch({ type: "SET_LOADING" });
      const res = await axios.delete(`/api/user/cart/${productId}`, config);

      if (res.status === 200) {
        cartDispatch({ type: "SET_DATA", payload: res.data.cart });
        cartDispatch({ type: "SET_SUCCESS" });
      } else {
        cartDispatch({
          type: "SET_ERROR",
          payload: `Status ${res.status} : Error occured while deleting items from cart.`,
        });
      }
    } catch (error) {
      cartDispatch({
        type: "SET_ERROR",
        payload: "Error occured while adding item to cart.",
      });
    }
  };

  const updateCart = async (productId, type) => {
    try {
      cartDispatch({ type: "SET_LOADING" });
      const res = await axios.post(
        `/api/user/cart/${productId}`,
        {
          action: {
            type: type,
          },
        },
        config
      );

      if (res.data.cart.some((item) => item.qty === 0)) {
        deleteFromCart(productId);
      }
      if (res.status === 200) {
        cartDispatch({ type: "SET_DATA", payload: res.data.cart });
        cartDispatch({ type: "SET_SUCCESS" });
      } else {
        cartDispatch({
          type: "SET_ERROR",
          payload: `Status ${res.status} : Error occured while updating item in cart.`,
        });
      }
    } catch (error) {
      cartDispatch({
        type: "SET_ERROR",
        payload: "Error occured while uptating item qty.",
      });
    }
  };

  return {
    addToCart,
    deleteFromCart,
    updateCart,
  };
};
