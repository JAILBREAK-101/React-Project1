import React from "react";
import NavBar from "./NavBar";

import logo from "./images/logo.svg";

export default function Header() {
  return (
    <div className="header-container">
      <header className="header">
        <img src={logo} alt="Main Logo" />
        <NavBar />
      </header>
    </div>
  );
}
