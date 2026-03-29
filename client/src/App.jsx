import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Cart from "./pages/Cart";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OrderSummary from "./pages/OrderSummary";
import FullImageView from "./pages/FullImageView";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders"; 

function App() {
  return (
    <BrowserRouter>
      {" "}
      {/* ✅ ADD THIS */}
      <div className="max-w-[1200px] mx-auto px-4">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success/:id" element={<Success />} />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="/full-image-view" element={<FullImageView />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
