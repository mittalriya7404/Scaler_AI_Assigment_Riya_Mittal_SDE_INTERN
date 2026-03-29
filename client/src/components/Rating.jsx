import { FaStar } from "react-icons/fa";

export default function Rating({ rating, count }) {
  return (
    <div className="flex items-center gap-2 mt-1">
      {/* Rating box */}
      <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md">
        <span className="text-sm font-medium text-gray-800">{rating}</span>
        <FaStar className="text-green-600 text-xs" />

        {/* Count */}
        <span className="text-sm text-gray-500">| {count}</span>
      </div>
    </div>
  );
}
