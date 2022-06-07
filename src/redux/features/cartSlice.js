import { betterDispatch } from "../../utils/throttling/throttle";
import {
  addToCartService,
  deleteFromCartService,
  updateCartService,
} from "../services/cartServices";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const addToCart = createAsyncThunk(
  "cart/add",
  async (product, { getState, rejectWithValue }) => {
    const token = getState().auth?.authToken;
    try {
      const response = await addToCartService(product, token);
      if (response.status === 201) {
        return response.data?.cart;
      }
    } catch (error) {
      const { response } = error;
      return rejectWithValue(response.data?.errors?.[0]);
    }
  }
);

const deleteFromCart = createAsyncThunk(
  "cart/delete",
  async (productId, { getState, rejectWithValue }) => {
    const token = getState().auth?.authToken;
    try {
      const response = await deleteFromCartService(productId, token);
      if (response.status === 200) {
        return response.data?.cart;
      }
    } catch (error) {
      const { response } = error;
      return rejectWithValue(response.data?.errors?.[0]);
    }
  }
);

const updateCart = createAsyncThunk(
  "cart/update",
  async ({ productId, type }, { dispatch, getState, rejectWithValue }) => {
    const token = getState().auth?.authToken;
    try {
      const response = await updateCartService(productId, type, token);
      const cart = response.data?.cart;

      if (cart.some((item) => item.qty < 1)) {
        await dispatch(deleteFromCart(productId));
        return rejectWithValue("Qty less than 1");
      }

      if (response.status === 200) {
        return response.data?.cart;
      }
    } catch (error) {
      const { response } = error;
      return rejectWithValue(response.data?.errors?.[0]);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: {
    [addToCart.pending]: (state) => {
      state.loading = true;
    },
    [addToCart.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [addToCart.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteFromCart.pending]: (state) => {
      state.loading = true;
    },
    [deleteFromCart.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [deleteFromCart.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [updateCart.pending]: (state) => {
      state.loading = true;
    },
    [updateCart.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [updateCart.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const { reducer, actions } = cartSlice;
export default reducer;
export { addToCart, deleteFromCart, updateCart };
