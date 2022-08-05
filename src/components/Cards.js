import React from "react";
import Card from "./Card";
import image from "../images/card-default.jpeg";
export default function Cards({ cards }) {
  return (
    <section>
      <ul className="cards">
        {cards.map((card, i) => (
          <Card key={card.data[0].nasa_id} card={card} />
        ))}
      </ul>
    </section>
  );
}
