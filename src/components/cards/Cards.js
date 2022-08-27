import React from "react";
import Card from "../card/Card";

export default function Cards({ cards, handleImageClick }) {
  return (
    <section>
      <ul className="cards">
        {cards.map((card) => (
          <Card
            key={card.data[0].nasa_id}
            card={card}
            handleImageClick={handleImageClick}
          />
        ))}
      </ul>
    </section>
  );
}
