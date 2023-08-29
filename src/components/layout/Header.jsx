/* eslint-disable jsx-a11y/anchor-is-valid */
// Write all the code here

import React from "react";
import {Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

import DropdownMenu from "./DropdownMenu";

const Header = ({isAuthenticated = false}) => {
  return (
    <div>
      <nav>
      <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          <FiShoppingCart />
        </Link>
        <div>
          <DropdownMenu />
        </div>
      </nav>
    </div>
  );
};

export default Header;
