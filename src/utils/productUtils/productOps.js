import axios from "axios";

export const getProducts = async (dispatch) => {
  try {
    dispatch({ type: "SET_LOADING" });
    const res = await axios.get("/api/products");
    dispatch({ type: "SET_PRODUCTS", payload: res.data.products });
    dispatch({ type: "SET_SUCCESS" });
  } catch (error) {
    console.log(error);
    dispatch({ type: "SET_ERROR", payload: error });
  }
};
