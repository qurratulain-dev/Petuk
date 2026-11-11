import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    // reducedMotion="user" respects the OS "reduce motion" setting
    <MotionConfig reducedMotion="user">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </MotionConfig>
  );
};

export default App;
