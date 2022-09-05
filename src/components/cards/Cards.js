import React from "react";
import Card from "../card/Card";

export default function Cards({
  limit,
  cards,
  noResults,
  handleImageClick,
  handleShowMoreClick,
}) {
  function onShowMoreClick() {
    handleShowMoreClick(limit);
  }

  return (
    <section>
      {noResults ? (
        <>
          <h3 className="noResults">
            {" "}
            Sorry! Your search did not match any results. Try again.
          </h3>
        </>
      ) : (
        <>
          <ul className="cards">
            {cards.slice(0, limit ? limit : cards.length).map((card) => (
              <Card
                key={card.data[0].nasa_id}
                card={card}
                handleImageClick={handleImageClick}
              />
            ))}
          </ul>
          <button className="cards__button" onClick={onShowMoreClick}>
            Show more results
          </button>
        </>
      )}
    </section>
  );
}
