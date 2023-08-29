/* eslint-disable jsx-a11y/anchor-is-valid */
// Write all the code here

import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FastfoodIcon from "@mui/icons-material/Fastfood";

import DropdownMenu from "./DropdownMenu";

const Header = () => {
  return (
    <nav>
      <div className="svg"><FastfoodIcon /></div>
      
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <Link to="/cart">
        <ShoppingCartIcon />
      </Link>
      <div>
        <DropdownMenu />
      </div>
    </nav>
  );
};

export default Header;
