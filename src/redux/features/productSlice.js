import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductsService } from "../services/productServices";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const getProducts = createAsyncThunk(
  "product/get",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getProductsService();
      if (response.status === 200) {
        return response.data?.products;
      }
    } catch (error) {
      const { response } = error;
      return rejectWithValue(response.data?.errors?.[0]);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const { reducer, actions } = productSlice;
export default reducer;
export { getProducts };
