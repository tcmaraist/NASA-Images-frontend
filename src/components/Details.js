import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import api from "../utils/api";

export default function Details({ img }) {
  const { nasa_id } = useParams();
  const [image, setImage] = useState([]);
  const [assetDetails, setAssetDetails] = useState([]);

  useEffect(() => {
    api
      .getImage(nasa_id)
      .then(
        ({
          collection: {
            items: { item },
          },
        }) => {
          setImage(item);
          console.log(item);
        }
      )
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    api
      .getDetails(nasa_id)
      .then(({ "AVAIL:Description": details }) => {
        setAssetDetails(details);
        console.log(details);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <article className="details">
      <img className="details__image" src={image} alt="" />
      <h2 className="details__title">title: </h2>
      <p className="details__subtitle">NASA ID: {nasa_id}</p>
      <p className="details__info">Description: {assetDetails}</p>
      <nav>
        <Link to="/" className="details__info link">
          Home
        </Link>
      </nav>
    </article>
  );
}
