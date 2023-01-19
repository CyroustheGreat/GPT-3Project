// functional component

import React from "react";
import { RiMenu3Line, RiClosLin } from "react-icons/ri";
import "./navbar.css";

// BEM -> Block Element Modifier
const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gp3__navbar-links_logo">
          <img src={logo} alt='logo'/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
