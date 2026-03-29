import { useState } from "react";

export default function ProductCarousel({ images }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-80">

      {/* Image */}
      <img
        src={images[index]}
        className="w-full h-80 object-contain bg-gray-100 rounded"
      />

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white shadow px-2 py-1 rounded-full"
      >
        ◀
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white shadow px-2 py-1 rounded-full"
      >
        ▶
      </button>
    </div>
  );
}