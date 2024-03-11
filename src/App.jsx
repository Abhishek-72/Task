import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/Cart";
import Platform from "./pages/Platform";
import Resources from "./pages/Resources";
import Header from "./components/Header";

import Footer from "./components/Footer";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
