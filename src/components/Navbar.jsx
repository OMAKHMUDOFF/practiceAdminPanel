import React from "react";
import logo from "../assets/logo/logo.png";
import { Outlet } from "react-router-dom";
import { FaWpforms } from "react-icons/fa";

function Navbar() {
  return (
    <main className="flex">
      <aside className="bg-gray-800 flex p-7 h-svh w-72 flex-col gap-3">
        <div className="flex flex-col items-center w-full">
          <figure>
            <img src={logo} alt="" />
          </figure>
          <div className="text-white font-bold">
            <h3>Admin Panel</h3>
          </div>
        </div>
        <nav>
          <h4 className="text-gray-400">Menu</h4>
          <ul>
            <li>Products</li>
            <li><FaWpforms /> Form</li>
          </ul>
        </nav>
      </aside>
      <Outlet />
    </main>
  );
}

export default Navbar;
