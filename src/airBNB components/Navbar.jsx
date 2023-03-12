import React from "react";
import Logo from "../images/Logo.png";

export function Navbar() {
  return (
    <nav className="navbar">
      <img src={Logo} alt="airbnb logo" />
    </nav>
  );
}
