import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="notfound">
      <h1 className="notfound__title">404</h1>
      <p className="notfound__body">File not found</p>
      <p className="notfound__body">
        The site configured at this address does not contain the requested file.
      </p>
      <nav>
        <Link to="/" className="link">
          Home
        </Link>
      </nav>
    </section>
  );
}
