import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ card }) {
  const navigate = useNavigate();

  function handleImageClick() {
    console.log(`${card.data[0].title}`);
    navigate(`/${card.data[0].nasa_id}`);
  }
  return (
    <div className="card">
      <img
        className="card__image"
        src={card.links[0].href}
        alt={card.data[0].title}
        onClick={handleImageClick}
      />
    </div>
  );
}
