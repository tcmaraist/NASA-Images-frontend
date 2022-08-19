import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import api from "../utils/api";
export default function Details({ img }) {
  const { nasa_id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    api
      .getDetails(nasa_id)
      .then(({ collection: { items: Data } }) => {
        setDetails(Data);
        console.log(details);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <article className="details">
      <img className="details__image" src={details} alt="" />
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
