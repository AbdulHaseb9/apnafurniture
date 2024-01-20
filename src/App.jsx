import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Weddingpackages } from "./pages/Weddingpackages";
import { Headertop } from "./components/Headertop";
import { Product } from "./pages/Product";
import "./App.css";
import { Headermain } from "./components/Headermain";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Headertop />
      <Headermain />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="weddingpackages">
            <Route index element={<Weddingpackages />} />
            <Route path=":Pname" element={<Product />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
