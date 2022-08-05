import React from "react";

export default function Card({ card }) {
  return (
    <div className="card">
      <img
        className="card__image"
        src={card.links[0].href}
        alt={card.description}
      />
    </div>
  );
}
