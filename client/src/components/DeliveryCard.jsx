import { FaMapMarkerAlt, FaTruck, FaStar, FaTimesCircle, FaShieldAlt } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";

export default function DeliveryCard() {
  return (
    <div className="bg-white rounded-lg w-full max-w-md">
      
      {/* Title */}
      <h2 className="text-lg font-semibold mb-3">Delivery details</h2>

      {/* Location */}
      <div className="flex items-center justify-between bg-blue-50 p-3 rounded-md mb-3 cursor-pointer">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-gray-600" />
          <span className="text-sm">
            <span className="font-medium">140301</span>{" "}
            <span className="text-blue-600 font-medium">
              Select delivery location
            </span>
          </span>
        </div>
        <span className="text-blue-600">{">"}</span>
      </div>

      {/* Delivery */}
      <div className="flex items-center gap-2 border-b py-3">
        <FaTruck className="text-gray-600" />
        <p className="text-sm">
          <span className="font-semibold italic">EXPRESS</span>{" "}
          Delivery by Tomorrow • ₹70
        </p>
      </div>

      {/* Seller */}
      <div className="py-3 border-b">
        <p className="text-sm">
          Fulfilled by{" "}
          <span className="font-medium">SuperComNet</span>
        </p>

        <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
          <span>4.2</span>
          <FaStar className="text-green-600 text-xs" />
          <span>• 9 years with Flipkart</span>
        </div>

        <p className="text-blue-600 text-sm mt-1 cursor-pointer">
          See other sellers
        </p>
      </div>

      {/* Bottom Icons */}
      <div className="flex justify-between gap-8 text-center mt-4">
        
        <div className="flex flex-col items-center text-sm text-gray-700">
          <FaTimesCircle className="text-xl text-gray-600 mb-1" />
          <span>No returns</span>
        </div>

        <div className="flex flex-col items-center text-sm text-gray-700">
          <MdOutlinePayments className="text-xl text-gray-600 mb-1" />
          <span>No cash on delivery</span>
        </div>

        <div className="flex flex-col items-center text-sm text-gray-700">
          <FaShieldAlt className="text-xl text-blue-600 mb-1" />
          <span>Flipkart Assured</span>
        </div>

      </div>
    </div>
  );
}