import React, { useState } from "react";
import search from "../images/search.svg";

export default function SearchForm({ details, query }) {
  const [searchField, setSearchField] = useState("");
  /*
  const filterdCards = details.filter((card) => {
    return card.name.toLowerCase().includes(searchField.toLowerCase());
  });
*/
  const handleChange = (e) => {
    setSearchField(e.target.value);
  };
  return (
    <div className="searchform">
      <input
        className="searchform__input"
        type="search"
        id="search"
        value={query}
        onChange={handleChange}
        placeholder="What are you looking for?"
      ></input>
      <button
        className="searchform__button"
        type="submit"
        id="submit-search-btn"
      >
        <img src={search}></img>
      </button>
    </div>
  );
}
