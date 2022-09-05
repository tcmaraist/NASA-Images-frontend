import React from "react";

export default function Navigation({
  activeTab,
  handleMostPopular,
  handleMostRecent,
}) {
  function mostPopularClick(card) {
    handleMostPopular(card);
  }

  function mostRecentClick(card) {
    handleMostRecent(card);
  }
  return (
    <section className="navigation">
      <button
        className={
          activeTab === "MostPopular"
            ? "navigation__button navigation__button_active"
            : "navigation__button"
        }
        onClick={mostPopularClick}
      >
        Most Popular
      </button>
      <button
        className={
          activeTab === "MostRecent"
            ? "navigation__button  navigation__button_active"
            : "navigation__button"
        }
        onClick={mostRecentClick}
      >
        Most Recent
      </button>
    </section>
  );
}
