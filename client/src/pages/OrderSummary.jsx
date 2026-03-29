import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Popup from "../components/PopUp";

export default function OrderSummary() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const { form } = location.state || {};

  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("https://scaler-ai-assigment-riya-mittal-sde.onrender.com/cart").then((res) => setCart(res.data));
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = async () => {
    try {
      const address = `${form.name}, ${form.phone}, ${form.house}, ${form.area}, ${form.city}, ${form.state} - ${form.pincode}`;

      await axios.post("https://scaler-ai-assigment-riya-mittal-sde.onrender.com/order", {
        address,
      });

      setShowPopup(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-[900px] mx-auto p-6 bg-white shadow mt-6">
      {/* 📍 Address */}
      <h2 className="text-xl font-semibold mb-3">Delivery Address</h2>
      <p className="text-sm text-gray-700 mb-4">
        {form?.name}, {form?.phone} <br />
        {form?.house}, {form?.area} <br />
        {form?.city}, {form?.state} - {form?.pincode}
      </p>

      {/* 🧾 Order Summary */}
      <h2 className="text-xl font-semibold mb-3">Order Summary</h2>

      {cart.map((item) => (
        <div key={item.id} className="flex justify-between mb-2">
          <span>
            {item.title} × {item.quantity}
          </span>
          <span>₹{item.price * item.quantity}</span>
        </div>
      ))}

      <div className="flex justify-between font-semibold mt-4">
        <span>Total</span>
        <span>₹{total}</span>
      </div>

      {/* ✅ Place Order */}
      <button
        onClick={handlePlaceOrder}
        className="w-full bg-green-600 text-white py-3 mt-6"
      >
        Place Order
      </button>
      <Popup
        show={showPopup}
        title="Order Placed 🎉"
        message="Your order has been placed successfully!"
        buttonText="Go Home"
        onClose={() => {
          setShowPopup(false);
          navigate("/");
        }}
      />
    </div>
  );
}
