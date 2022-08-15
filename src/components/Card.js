import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ card, handleImageClick }) {
  function onImageClick() {
    handleImageClick(card);
  }
  return (
    <div className="card">
      <img
        className="card__image"
        src={card.links[0].href}
        alt={card.data[0].title}
        onClick={onImageClick}
      />
    </div>
  );
}
