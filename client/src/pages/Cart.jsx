import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CartPopUp from "../components/CartPopUp";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  //Fetch cart items
  const fetchCart = () => {
    axios
      .get("http://localhost:5000/cart")
      .then((res) => {
        // console.log(res);
        // console.log(res.data);

        setCart(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCart();
  }, []);

  //  Update quantity
  const updateQty = (id, qty) => {
    if (qty < 1) return; // prevent 0 or negative

    axios
      .put(`http://localhost:5000/cart/${id}`, {
        quantity: qty,
      })
      .then(fetchCart);
  };

  const handleSave = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  // Remove item
  const removeItem = (id) => {
    axios.delete(`http://localhost:5000/cart/${id}`).then(fetchCart);
  };

  const handleBuyNow = () => {
    navigate("/checkout");
  };

  // Calculate total
  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="bg-gray-100 min-h-screen">
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <div className="flex gap-6">
         
          {/* LEFT: Cart Items */}
          <div className="w-2/3 ml-1">
           <div className="bg-white h-20 flex items-center mb-2 p-3">
            Deliver to Rupnagar-140301
          </div>
            {cart.map((item) => (
              <div className="bg-white mb-4 shadow flex items-center">
                <div key={item.id} className="w-full">
                  {/* Product Info */}
                  <div className="flex gap-4 items-center justify-between ">
                    <div className="flex gap-4 items-center justify-between  m-4">
                      <img
                        src={item.images[0]} // always first image
                        alt=""
                        className="w-20 h-20 object-contain border-gray-200 border-2"
                      />

                      <div>
                        <h2>{item.title}</h2>
                        <p className="text-black font-semibold text-lg">
                          ₹{item.price}
                        </p>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="mr-4">
                      <button
                        onClick={() => updateQty(item.id, item.quantity - 1)}
                        className="px-2 bg-gray-300 cursor-pointer"
                      >
                        -
                      </button>

                      <span className="px-3">{item.quantity}</span>

                      <button
                        onClick={() => updateQty(item.id, item.quantity + 1)}
                        className="px-2 bg-gray-300 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 border border-gray-200 flex text-sm text-gray-600">
                    {/* Save for later */}
                    <button
                      className="flex-1 py-3 font-semibold text-gray-500 hover:bg-gray-100 border-r cursor-pointer border-gray-200"
                      onClick={handleSave}
                    >
                      Save for later
                    </button>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="flex-1 py-3 font-semibold text-gray-500 hover:bg-gray-100 border-r cursor-pointer border-gray-200"
                    >
                      Remove
                    </button>

                    {/* Buy */}
                    <button
                      className="flex-1 font-semibold text-gray-500 py-3 hover:bg-gray-100 cursor-pointer"
                      onClick={handleBuyNow}
                    >
                      Buy this now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Summary */}
          <div className="w-1/3 bg-white p-4 shadow h-fit mr-2">
            <h2 className="text-lg font-bold mb-3">Price Details</h2>

            <p className="flex justify-between">
              <span>Total Items</span>
              <span>{cart.length}</span>
            </p>

            <p className="flex justify-between font-semibold mt-2">
              <span>Total Amount</span>
              <span>₹{total}</span>
            </p>

            <button
              onClick={() => navigate("/checkout")}
              className="bg-yellow-500 text-black w-full py-2 mt-4 cursor-pointer">
              Place Order
            </button>

            
            {showPopup && (
              <CartPopUp
                message="Saved for later!"
                onClose={() => setShowPopup(false)}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
