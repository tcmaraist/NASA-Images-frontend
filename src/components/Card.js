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
      <div>{card.data[0].title}</div>
      <div>{card.data[0].description}</div>
    </div>
  );
}
