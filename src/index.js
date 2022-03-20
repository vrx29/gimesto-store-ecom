import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider, AuthProvider } from "./context";
import { WishListProvider } from "./context/wishListContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <AuthProvider>
        <WishListProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </WishListProvider>
      </AuthProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
