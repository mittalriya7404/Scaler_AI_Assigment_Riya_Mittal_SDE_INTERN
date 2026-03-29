import { useParams } from "react-router-dom";

export default function Success() {
  const { id } = useParams();

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold text-green-600">
        🎉 Order Placed Successfully!
      </h1>
      <p className="mt-3">Order ID: {id}</p>
    </div>
  );
}