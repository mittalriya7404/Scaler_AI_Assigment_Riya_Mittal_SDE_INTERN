import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Products({ products }) {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);

  return (
    <div className="mt-5">
      <div className="grid grid-cols-2 bg-mist-100  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="p-4 ml-2.5 mr-2.5 hover:shadow-md transition cursor-pointer bg-white"
            onClick={() => navigate(`/product/${p.id}`)}
          >
            {/* IMAGE */}
            <div className="h-80 bg-mist-100 rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src={p.images[0]} // ✅ always first image
                alt={p.title}
                className="h-full w-full object-contain p-1"
              />
            </div>

            {/* TITLE */}
            <div className="flex mt-2 ">
            <h3 className=" text-sm text-black font-semibold line-clamp-2 whitespace-nowrap flex-shrink-0">
              {p.title}
            </h3>
            <p className="text-sm text-gray-500 ml-2 line-clamp-3 truncate">
              {p.description}
            </p>
            </div>

            {/* RATING */}
            {/* <div className="flex items-center gap-2 mt-1">
              <span className="bg-green-600 text-white text-xs px-2 py-[2px] rounded">
                4 ★
              </span>
              <span className="text-gray-500 text-xs">(1,000)</span>
            </div> */}

            {/* PRICE */}
            <div className="mt-1 flex items-center gap-2">
              <span className="text-gray-400 line-through text-sm">
                ₹{p.price + 1000}
              </span>
              <span className="text-sm font-semibold">₹{p.price}</span>
              
              <span className="text-green-600 text-sm">10% off</span>
            </div>

            {/* OFFER */}
            {/* <p className="text-green-600 text-xs mt-1">Bank Offer</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}
