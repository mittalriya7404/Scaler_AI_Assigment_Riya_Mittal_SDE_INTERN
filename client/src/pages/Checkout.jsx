import { useState } from "react";
import axios from "axios";
import Popup from "../components/PopUp";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    pincode: "",
    state: "",
    city: "",
    house: "",
    area: "",
  });
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      // const address = `${form.name}, ${form.phone},${form.house}, ${form.area},${form.city}, ${form.state} - ${form.pincode}`;

      // const res = await axios.post("http://localhost:5000/order", {
      //   address,
      // });

      // setShowPopup(true);
      // console.log(res.data);
      navigate("/order-summary", {
        state: { form }, // 🔥 pass address
      });
    } catch (err) {
      console.error(err);
      alert("Order failed ❌");
    }
  };

  return (
    <div className="max-w-[900px] mx-auto p-6 bg-white shadow mt-6">
      <h2 className="text-xl font-semibold mb-4">Add delivery address</h2>

      {/* Name */}
      <input
        name="name"
        placeholder="Full Name"
        className="w-full border p-3 mb-3"
        onChange={handleChange}
      />

      {/* Phone */}
      <input
        name="phone"
        placeholder="Phone Number"
        className="w-full border p-3 mb-3"
        onChange={handleChange}
      />

      {/* Pincode */}
      <input
        name="pincode"
        placeholder="Pincode"
        className="w-full border p-3 mb-3"
        onChange={handleChange}
      />

      {/* State + City */}
      <div className="flex gap-3">
        <input
          name="state"
          placeholder="State"
          className="w-1/2 border p-3 mb-3"
          onChange={handleChange}
        />
        <input
          name="city"
          placeholder="City"
          className="w-1/2 border p-3 mb-3"
          onChange={handleChange}
        />
      </div>

      {/* Address */}
      <input
        name="house"
        placeholder="House No / Building"
        className="w-full border p-3 mb-3"
        onChange={handleChange}
      />

      <input
        name="area"
        placeholder="Area / Road"
        className="w-full border p-3 mb-3"
        onChange={handleChange}
      />

      {/* Button */}
      <button
        onClick={handleSubmit}
        className="w-full bg-orange-500 text-white py-3 mt-4"
      >
        Save Address
      </button>
      
    </div>
  );
}
