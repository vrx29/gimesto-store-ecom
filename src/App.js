import "./App.css";
import { Footer, Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { Error404 } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
