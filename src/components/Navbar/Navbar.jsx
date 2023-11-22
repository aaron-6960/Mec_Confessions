import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="Navbar card">
      <h1>mecMatrimony</h1>
      <ul>
        <li>
          <Link to="/" className="text">
            Home
          </Link>
        </li>
        <li>
          <Link to="/add" className="text">
            Add Confession
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
