import React from "react";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import logoImg from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/" className="mr-8 font-medium">
        Home
      </NavLink>
      <NavLink to="/apps" className="mr-8 font-medium">
        Apps
      </NavLink>
      <NavLink to="/installation" className="mr-8 font-medium">
        Installation
      </NavLink>
    </>
  );
  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="flex justify-between items-center gap-2">
            <img src={logoImg} alt="logo" className="w-[40px] h-[40px]" />
            <span className="font-bold bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent uppercase">
              Hero.Io
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] rounded-sm text-white">
            <a
              href="https://github.com/sajjad44371"
              target="_blank"
              className="flex justify-between items-center gap-3 py-3 px-4"
            >
              <span>
                <FaGithub />
              </span>
              <span>Contribute</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
