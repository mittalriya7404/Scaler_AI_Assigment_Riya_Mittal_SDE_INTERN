import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { HiOutlineCube } from "react-icons/hi2";
import { CgMoreO } from "react-icons/cg";

import axios from "axios";

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [userOpen, setUserOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleProfile = () => {
    setUserOpen(false);
    navigate("/profile");
  };

  const handleOrders = () => {
    setUserOpen(false);
    navigate("/orders");
  };

  return (
    <div className="bg-white px-2 py-4 sticky top-0 z-50">
      {/* TOP ROW */}
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <div
          className="h-10 w-30 bg-yellow-300 flex items-center gap-2 px-4 py-2 rounded-xl"
          onClick={() => navigate("/")}
        >
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/52/44/image/d2ecfddf891a3922.png?q=60"
            alt="logo"
            className="h-6"
          />
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/92/36/image/31f7e3af490c225f.png?q=60"
            alt="Flipkart"
            className="h-5 cursor-pointer"
          />
        </div>
      </div>

      {/* SEARCH */}
      <div className="flex items-center justify-between mt-4  ">
        <div className="flex items-center w-3/4 md:w-2/3 sm:w-1/3 border border-blue-400 border-2 rounded-xl px-2 py-2">
          <CiSearch className="text-2xl mr-2 ml-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                navigate(`/?search=${search}`);
              }
            }}
            placeholder="Search for Products, Brands and More"
            className="w-full bg-transparent outline-none"
          />
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">
          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 pr-6">
            {/* USER */}
            <div className="relative">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => setUserOpen(!userOpen)}
              >
                <CgProfile className="text-xl" />
                <span>Riya</span>
                <FaChevronDown className="text-xs" />
              </div>

              {userOpen && (
                <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md w-40 z-50">
                  <h1 className="font-bold px-2 py-2">Your account</h1>
                  <p className="hover:bg-gray-100 p-2" onClick={handleProfile}>
                    My Profile
                  </p>
                  <p className="hover:bg-gray-100 p-2" onClick={handleOrders}>
                    Orders
                  </p>
                  <p className="hover:bg-gray-100 p-2">Logout</p>
                </div>
              )}
            </div>

            {/* MORE */}
            <div className="flex items-center gap-1 cursor-pointer">
              <span>More</span>
              <FaChevronDown className="text-xs" />
            </div>

            {/* CART */}
            <div
              className="flex relative cursor-pointer"
              onClick={() => navigate("/cart")}
            >
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                2
              </span>
              <IoCartOutline className="text-2xl" />
              <span className="ml-2">Cart</span>
            </div>
          </div>

          {/* MOBILE MENU ICON */}
          <div className="md:hidden relative">
            <FaBars
              className="text-xl cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />

            {/* MOBILE DROPDOWN */}
            {menuOpen && (
              <div className="absolute right-0 mt-3 bg-white shadow-lg rounded-lg p-4 w-44 flex flex-col gap-3 z-50">
                <div className="flex items-center gap-2">
                  <CgProfile />
                  <span>My Profile</span>
                </div>

                <div className="flex items-center gap-2">
                  <HiOutlineCube />
                  <span>Orders</span>
                </div>

                <div className="flex items-center gap-2">
                  <CgMoreO />
                  <span>More</span>
                </div>

                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => navigate("/cart")}
                >
                  <IoCartOutline />
                  <span>Cart</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
