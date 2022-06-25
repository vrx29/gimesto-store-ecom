import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addToWishlistService,
  deleteFromWishlistService,
} from "../services/wishlistServices";

const initialState = {
  data: [],
  error: "",
  loading: false,
};

const addToWishlist = createAsyncThunk(
  "wishlist/add",
  async (product, { getState, rejectWithValue }) => {
    const token = getState().auth?.authToken;
    try {
      const response = await addToWishlistService(product, token);
      if (response.status === 201) {
        return response.data?.wishlist;
      }
    } catch (error) {
      const { response } = error;
      return rejectWithValue(response.data?.errors?.[0]);
    }
  }
);

const deleteFromWishlist = createAsyncThunk(
  "wishlist/delete",
  async (productId, { getState, rejectWithValue }) => {
    const token = getState().auth?.authToken;
    try {
      const response = await deleteFromWishlistService(productId, token);
      if (response.status === 200) {
        return response.data?.wishlist;
      }
      return [];
    } catch (error) {
      const { response } = error;
      return rejectWithValue(response.data?.errors?.[0]);
    }
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    resetWishlist: () => initialState,
  },
  extraReducers: {
    [addToWishlist.pending]: (state) => {
      state.loading = true;
    },
    [addToWishlist.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [addToWishlist.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteFromWishlist.pending]: (state) => {
      state.loading = true;
    },
    [deleteFromWishlist.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [deleteFromWishlist.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const { reducer, actions } = wishlistSlice;
export default reducer;
export const { resetWishlist } = actions;
export { addToWishlist, deleteFromWishlist };
