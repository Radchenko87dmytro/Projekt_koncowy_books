import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navLinks">
      <h1>Navbar panel</h1>

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
  );
};

export default Navbar;
