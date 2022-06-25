import { deleteCookie, getCookie, setCookie } from "../utiles/cookiesHandler";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginService, signupService } from "../services/authServices";
import { resetCart } from "./cartSlice";
import { resetWishlist } from "./wishlistSlice";

const initialState = {
  loading: false,
  user: getCookie().user,
  authToken: getCookie().authToken,
  error: "",
};

const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await loginService(email, password);
      if (response.status === 200) {
        setCookie(
          response.data.encodedToken,
          response.data?.foundUser?.firstName
        );
        return response.data;
      }
      return response.data;
    } catch (error) {
      const { response } = error;
      return rejectWithValue(response.data?.errors?.[0]);
    }
  }
);

const signUp = createAsyncThunk(
  "auth/signup",
  async (data, { rejectWithValue }) => {
    try {
      const response = await signupService(data);
      if (response.status === 201) {
        setCookie(
          response.data.encodedToken,
          response.data?.foundUser?.firstName
        );
        return response.data;
      }
    } catch (error) {
      const { response } = error;
      return rejectWithValue(response.data?.errors?.[0]);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, dispatch) => {
      deleteCookie();
      state.authToken = null;
      state.user = null;
      dispatch(resetCart);
      dispatch(resetWishlist);
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload.foundUser.firstName;
      state.authToken = action.payload.encodedToken;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [signUp.pending]: (state) => {
      state.loading = true;
    },
    [signUp.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload.createdUser.firstName;
      state.authToken = action.payload.encodedToken;
    },
    [signUp.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const { reducer, actions } = authSlice;

export default reducer;
export const { logout } = actions;
export { login, signUp };
