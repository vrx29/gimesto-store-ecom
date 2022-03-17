import "./App.css";
import { useEffect } from "react";
import { Footer, Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import {
  Cart,
  Home,
  WishList,
  Error404,
  Products,
  SignUp,
  Login,
} from "./pages";
import { getProducts } from "./utils/productUtils/productOps";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
