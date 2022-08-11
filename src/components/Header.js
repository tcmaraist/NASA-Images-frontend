import React from "react";
import logo from "../images/nasa-logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__title">IMAGES FROM NASA</div>
      <nav>
        <Link to="/" className=" link">
          <img className="header__logo" src={logo} alt="NASA logo"></img>
        </Link>
      </nav>
    </header>
  );
}
