import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Rating from "../components/Rating";
import CartPopUp from "../components/CartPopUp";
import DeliveryCard from "../components/DeliveryCard";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % product.images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const handleAddToCart = () => {
    axios
      .post("http://localhost:5000/cart/add", {
        productId: product.id,
        quantity: 1,
      })
      .then(() => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
      })
      .catch((err) => {
        console.error(err);
        alert("❌ Failed to add to cart");
      });
  };

  const handleBuyNow = () => {
    axios
      .post("http://localhost:5000/cart/add", {
        productId: product.id,
        quantity: 1,
      })
      .then(() => {
        navigate("/checkout");
      })
      .catch((err) => {
        console.error(err);
        alert("❌ Something went wrong");
      });
  };

  return (
    <div className="flex gap-10 p-10">
      {/* Image */}
      <div className="relative w-96 h-96 flex items-center justify-center bg-gray-100 rounded">
        {/* IMAGE */}
        <img
          src={product.images[index]}
          onClick={() =>
            navigate("/full-image-view", {
              state: { images: product.images, index },
            })
          }
          className="w-full h-full object-contain cursor-pointer"
        />

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="absolute left-2 bg-white shadow p-2 rounded-full"
        >
          <FaChevronLeft />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="absolute right-2 bg-white shadow p-2 rounded-full"
        >
          <FaChevronRight />
        </button>

        {/* DOTS */}
        <div className="absolute bottom-2 flex gap-1">
          {product.images.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-gray-700" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Details */}
      <div>
        <h1 className="mb-2">{product.title}</h1>
        <Rating rating={4.1} count="4,094" />
        <p className="font-bold text-2xl text-gray-900 mt-5">
          ₹{product.price}
        </p>
        <div></div>
        <p className="mt-5">{product.description}</p>
        <p className="text-sm font-medium mb-7">
          {product.stock === 0 && (
            <span className="text-red-500">Out of Stock</span>
          )}

          {product.stock > 0 && product.stock <= 5 && (
            <span className="text-orange-500">
              Only {product.stock} left 🔥
            </span>
          )}

          {product.stock > 5 && (
            <span className="text-green-600">In Stock</span>
          )}
        </p>

        <DeliveryCard />

        <button
          disabled={product.stock === 0}
          className={`px-4 py-2 mt-3 rounded-xl border-gray-200 border-2 font-bold  ${
            product.stock === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-white cursor-pointer hover:bg-gray-100"
          }`}
          onClick={handleAddToCart}
        >
          {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </button>
        {showPopup && (
          <CartPopUp
            message="Added to cart!"
            onClose={() => setShowPopup(false)}
          />
        )}

        <button
          className="bg-yellow-300 font-bold rounded-xl px-4 py-2 mt-5 ml-3 cursor-pointer hover:bg-yellow-400"
          onClick={handleBuyNow}
        >
          Buy at ₹{product.price}
        </button>
      </div>
    </div>
  );
}
export default ProductDetail;
