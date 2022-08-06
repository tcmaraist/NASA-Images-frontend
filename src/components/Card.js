import React from "react";

export default function Card({ card, onCardClick }) {
  function handleClick() {
    console.log("this card has been clicked");
    onCardClick(card);
  }
  return (
    <div className="card">
      <img
        className="card__image"
        src={card.links[0].href}
        alt={card.description}
        onClick={handleClick}
      />
    </div>
  );
}
