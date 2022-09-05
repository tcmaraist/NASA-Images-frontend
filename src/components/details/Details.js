import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import api from "../../utils/api";
import Preloader from "../preloader/Preloader";

export default function Details({ isLoaded }) {
  const { nasa_id } = useParams();
  const [image, setImage] = useState([]);
  const [details, setDetails] = useState([]);
  const [title, setTitle] = useState([]);
  const [imageIsLoaded, setImageIsLoaded] = useState(false);

  useEffect(() => {
    api
      .getImage(nasa_id)
      .then(({ collection: { items: item } }) => {
        setImage(item[1]);
        setImageIsLoaded(true);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    api
      .getDetails(nasa_id)
      .then(({ "AVAIL:Description": description, "AVAIL:Title": name }) => {
        setDetails(description);
        setTitle(name);
      })

      .catch((err) => console.error(err));
  }, []);

  return (
    <article className="details">
      {imageIsLoaded ? (
        <img className="details__image" src={image.href} alt={title} />
      ) : (
        <Preloader className="details__image" />
      )}

      <h2 className="details__title">{title}</h2>
      <p className="details__subtitle">NASA ID: {nasa_id}</p>
      <p className="details__info">{details}</p>
      <nav>
        <Link to="/" className="details__info link">
          Home
        </Link>
      </nav>
    </article>
  );
}
