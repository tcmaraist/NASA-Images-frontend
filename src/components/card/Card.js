import React from "react";

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
      <div>
        <p className="card__title">{card.data[0].title}</p>
        <p className="card__description">{card.data[0].description}</p>
      </div>
    </div>
  );
}
