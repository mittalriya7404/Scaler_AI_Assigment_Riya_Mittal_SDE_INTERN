import { useEffect, useState } from "react";
import axios from "axios";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/order/getOrder")
      .then((res) => setOrders(res.data))
      .catch((err) => console.error(err));
  }, []);

  console.log(orders);

  // group by order_id
  const groupedOrders = Object.values(
    orders.reduce((acc, item) => {
      if (!acc[item.order_id]) {
        acc[item.order_id] = {
          ...item,
          items: [],
        };
      }
      acc[item.order_id].items.push(item);
      return acc;
    }, {}),
  );

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-[1200px] mx-auto flex gap-6">
        {/* LEFT FILTER */}
        <div className="w-1/4 bg-white p-4 shadow">
          <h2 className="font-semibold mb-3">Filters</h2>

          <p className="text-sm font-medium mb-2">ORDER STATUS</p>
          <div className="flex flex-col space-y-2 text-sm">
            <label>
              <input type="checkbox" /> Delivered
            </label>
            <label>
              <input type="checkbox" /> Cancelled
            </label>
            <label>
              <input type="checkbox" /> Returned
            </label>
          </div>

          <p className="text-sm font-medium mt-4 mb-2">ORDER TIME</p>
          <div className="space-y-2 flex flex-col text-sm">
            <label>
              <input type="checkbox" /> Last 30 days
            </label>
            <label>
              <input type="checkbox" /> 2025
            </label>
            <label>
              <input type="checkbox" /> Older
            </label>
          </div>
        </div>

        {/* RIGHT ORDERS */}
        <div className="w-3/4 space-y-4">
          {/* SEARCH */}
          <div className="bg-white p-3 shadow flex justify-between">
            <input
              placeholder="Search your orders here"
              className="border px-3 py-2 w-full mr-3"
            />
            <button className="bg-blue-600 text-white px-4">
              Search Orders
            </button>
          </div>

          {/* ORDERS LIST */}
          {groupedOrders.map((order) => (
            <div key={order.order_id} className="bg-white p-4 shadow">
              {order.items.map((item, i) => {
                const images =
                  typeof item.images === "string"
                    ? item.images.replace(/{|}/g, "").split(",")
                    : item.images;

                return (
                  <div
                    key={i}
                    className="grid grid-cols-3 items-center border-b py-4"
                  >
                    {/* LEFT */}
                    <div className="flex gap-4 items-center">
                      <img src={images[0]} className="w-16 h-16 object-cover" />

                      <div>
                        <h2 className="text-sm font-medium">{item.title}</h2>
                        <p className="text-gray-500 text-sm">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>

                    {/* PRICE */}
                    <div className="text-center font-semibold">
                      ₹{item.price}
                    </div>

                    {/* STATUS */}
                    <div className="text-sm text-right">
                      <p className="text-green-600 font-medium">● On the way</p>
                      <p className="text-gray-500">
                        {new Date(order.created_at).toDateString()}
                      </p>

                      <p className="text-blue-600 cursor-pointer mt-1">
                        ⭐ Rate & Review Product
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
