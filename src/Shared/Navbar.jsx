import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li> <Link to="/">Home</Link> </li>
            <li>  <Link to="/dashboard" >Dashboard</Link></li>
            <li><a>Courses</a></li>
            <li><a>Blog</a></li>
            <li><a>Contact</a></li>

          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Learniverse</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-1 text-xl font-semibold">
          <li><Link to="/">Home</Link> </li>
          <li><Link to="/dashboard" >Dashboard</Link></li>
          <li><a>Courses</a></li>
          <li><a>Blog</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn w-52 text-white font-bold text-xl" style={{ backgroundColor: "rgb(26, 182, 157)" }}>Login</button>
      </div>
    </div>
  );
};

export default Navbar;