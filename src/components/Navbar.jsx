import { Table } from "@phosphor-icons/react";
import React from "react";
import { FaWpforms } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo/logo.png";

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
        <nav className="flex flex-col gap-3">
          <h4 className="text-[#C3C0C0] font-normal">Menu</h4>
          <ul className="flex flex-col gap-3 transform translate-x-3 font-medium">
            <NavLink
              to={"/"}
              className={"text-[#C3C0C0] flex items-center gap-2"}
            >
              <Table size={22} />
              Products
            </NavLink>
            <NavLink
              to={"/form"}
              className={"text-[#C3C0C0] flex items-center gap-2"}
            >
              <FaWpforms size={22} /> Form
            </NavLink>
          </ul>
        </nav>
      </aside>
      <Outlet />
    </main>
  );
}

export default Navbar;
