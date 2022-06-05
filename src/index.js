import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider, CartProvider, FilterProvider } from "./context";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <FilterProvider>
          <App />
        </FilterProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
