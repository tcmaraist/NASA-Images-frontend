import React from "react";

import { Link, useParams } from "react-router-dom";
export default function Details({ img }) {
  const { nasa_id } = useParams();

  return (
    <article className="details">
      <img className="details__image" src={img} alt="" />
      <h2 className="details__title">Lorem ipsum</h2>
      <p className="details__subtitle">NASA ID: {nasa_id}</p>
      <p className="details__info">{nasa_id}</p>
      <nav>
        <Link to="/" className="details__info link">
          Home
        </Link>
      </nav>
    </article>
  );
}
