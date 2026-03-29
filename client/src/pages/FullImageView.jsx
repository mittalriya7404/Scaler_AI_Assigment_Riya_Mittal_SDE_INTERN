import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function FullImageView() {
  const location = useLocation();
  const navigate = useNavigate();

  const { images = [], index = 0 } = location.state || {};
  const [current, setCurrent] = useState(index);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="h-screen bg-white flex items-center justify-center relative">

      {/* CLOSE (BACK) */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-5 left-5 text-2xl"
      >
        ←
      </button>

      {/* IMAGE */}
      <img
        src={images[current]}
        className="max-h-[80%] max-w-[60%] object-contain"
      />

      {/* LEFT */}
      <button
        onClick={prev}
        className="absolute left-10 bg-white shadow p-3 rounded"
      >
        <FaChevronLeft />
      </button>

      {/* RIGHT */}
      <button
        onClick={next}
        className="absolute right-10 bg-white shadow p-3 rounded"
      >
        <FaChevronRight />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-10 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === current ? "bg-gray-700" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}