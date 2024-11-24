import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>Navbar panel</h1>
      <div className="navLinks">
        <Link className="link" to="/">
          Home page
        </Link>
        <Link className="link" to="/AllBooks">
          AllBooks function component
        </Link>
        <Link className="link" to="/AllBooksClass">
          AllBooksClass component
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
