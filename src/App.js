import "./App.css";
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
  MockmanPage,
} from "./pages";
import { FilterProvider } from "./context";
import { PrivateRoute } from "./routes/PrivateRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/products"
          element={
            <FilterProvider>
              <Products />
            </FilterProvider>
          }
        />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <WishList />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/mockman" element={<MockmanPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
