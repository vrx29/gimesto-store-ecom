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

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <AuthProvider>
        <WishListProvider>
          <CartProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CartProvider>
        </WishListProvider>
      </AuthProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
