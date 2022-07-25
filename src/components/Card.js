import React from "react";
import image from "../images/card-default.jpeg";
export default function Card() {
  return (
    <div className="card">
      <img className="card__image" src={image} alt="" />
      <div className="card__info">
        <h2 className="card__title">card</h2>
      </div>
    </div>
  );
}
