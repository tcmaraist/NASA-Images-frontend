import React from "react";
import search from "../images/search.svg";

export default function SearchForm({}) {
  return (
    <div className="searchform">
      {/* <label for="search">Search</label>*/}

      <input
        className="searchform__input"
        type="search"
        id="search"
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
