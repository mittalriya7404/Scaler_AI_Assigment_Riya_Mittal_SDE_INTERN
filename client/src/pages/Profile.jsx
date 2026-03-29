import { useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({
    firstName: "Riya",
    lastName: "Mittal",
    email: "",
    mobile: "+917404306585",
    gender: "",
  });

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-[1200px] mx-auto flex gap-6">

        {/* LEFT SIDEBAR */}
        <div className="w-1/4 space-y-4">

          {/* USER CARD */}
          <div className="bg-white p-4 shadow rounded flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center text-lg">
              👤
            </div>
            <div>
              <p className="text-sm text-gray-500">Hello,</p>
              <h2 className="font-semibold">{user.firstName} {user.lastName}</h2>
            </div>
          </div>

          {/* MENU */}
          <div className="bg-white shadow rounded text-sm">

            <div className="p-3 border-b font-semibold">MY ORDERS</div>

            <div className="p-3 border-b font-semibold">
              ACCOUNT SETTINGS
            </div>

            <div className="px-4 py-2 text-blue-600 bg-gray-100">
              Profile Information
            </div>
            <div className="px-4 py-2">Manage Addresses</div>
            <div className="px-4 py-2">PAN Card Information</div>

            <div className="p-3 border-t font-semibold">PAYMENTS</div>
            <div className="px-4 py-2 flex justify-between">
              Gift Cards <span className="text-green-600">₹0</span>
            </div>
            <div className="px-4 py-2">Saved UPI</div>
            <div className="px-4 py-2">Saved Cards</div>

            <div className="p-3 border-t font-semibold">MY STUFF</div>
            <div className="px-4 py-2">My Coupons</div>
            <div className="px-4 py-2">My Reviews & Ratings</div>

          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-3/4 bg-white p-6 shadow rounded">

          {/* PERSONAL INFO */}
          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-3">
              Personal Information
              <span className="text-blue-600 text-sm ml-2 cursor-pointer">
                Edit
              </span>
            </h2>

            <div className="flex gap-4">
              <input
                value={user.firstName}
                className="border p-2 w-1/2 rounded"
              />
              <input
                value={user.lastName}
                className="border p-2 w-1/2 rounded"
              />
            </div>

            {/* GENDER */}
            <div className="mt-4">
              <p className="text-sm mb-2">Your Gender</p>
              <div className="flex gap-4 text-sm">
                <label>
                  <input type="radio" name="gender" /> Male
                </label>
                <label>
                  <input type="radio" name="gender" /> Female
                </label>
              </div>
            </div>
          </div>

          {/* EMAIL */}
          <div className="mb-6">
            <h2 className="font-semibold mb-2">
              Email Address
              <span className="text-blue-600 text-sm ml-2 cursor-pointer">
                Edit
              </span>
            </h2>
            <input className="border p-2 w-full rounded" />
          </div>

          {/* MOBILE */}
          <div className="mb-6">
            <h2 className="font-semibold mb-2">
              Mobile Number
              <span className="text-blue-600 text-sm ml-2 cursor-pointer">
                Edit
              </span>
            </h2>
            <input
              value={user.mobile}
              className="border p-2 w-full rounded"
            />
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-semibold mb-2">FAQs</h2>
            <p className="text-sm font-medium">
              What happens when I update my email address (or mobile number)?
            </p>
            <p className="text-sm text-gray-600 mt-1">
              Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}