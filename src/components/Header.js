import React from "react";
import logo from "../images/nasa-logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__title">IMAGES FROM NASA</div>
      <img className="header__logo" src={logo} alt="NASA logo"></img>
    </header>
  );
}
