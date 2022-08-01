import React from "react";
import Card from "./Card";
import image from "../images/card-default.jpeg";
export default function Cards({ cards }) {
  return (
    <section>
      <ul className="cards">
        {cards.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </ul>
    </section>
  );
}
