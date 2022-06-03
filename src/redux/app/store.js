import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import wishlistSlice from "../features/wishlistSlice";
import cartSlice from "../features/cartSlice";
import productSlice from "../features/productSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    wishlist: wishlistSlice,
    cart: cartSlice,
    product: productSlice,
  },
});
