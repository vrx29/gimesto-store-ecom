import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  ProductProvider,
  AuthProvider,
  CartProvider,
  WishListProvider,
} from "./context";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ProductProvider>
        {/* <AuthProvider> */}
        <WishListProvider>
          <CartProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CartProvider>
        </WishListProvider>
        {/* </AuthProvider> */}
      </ProductProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
