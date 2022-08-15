import React, { useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import api from "../utils/api";
export default function Details({ img }) {
  const { nasa_id } = useParams();

  useEffect(() => {
    debugger;
    api
      .getDetails(nasa_id)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error(err));
  }, []);

  return (
    <article className="details">
      <img className="details__image" src={img} alt="" />
      <h2 className="details__title">Lorem ipsum</h2>
      <p className="details__subtitle">NASA ID: {nasa_id}</p>
      <p className="details__info">info</p>
      <nav>
        <Link to="/" className="details__info link">
          Home
        </Link>
      </nav>
    </article>
  );
}
