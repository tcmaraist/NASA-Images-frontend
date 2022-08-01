import React from "react";

export default function Card({ card }) {
  return (
    <div className="card">
      <img className="card__image" src={card.href} alt="" />
    </div>
  );
}
