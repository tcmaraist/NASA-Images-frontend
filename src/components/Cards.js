import React from "react";
import Card from "./Card";

export default function Cards({ cards, search, handleImageClick }) {
  return (
    <section>
      <ul className="cards">
        {search(cards).map((card) => (
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
