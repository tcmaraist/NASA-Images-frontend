import React from "react";
import logo from "../images/nasa-logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">IMAGES FROM NASA</h1>
      <nav>
        <Link to="/">
          <img className="header__logo" src={logo} alt="NASA logo"></img>
        </Link>
      </nav>
    </header>
  );
}
