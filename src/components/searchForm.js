import React from "react";
import searchImg from "../images/search.svg";

export default function SearchForm({ search, handleChange, onSubmit }) {
  return (
    <div className="searchform">
      <input
        className="searchform__input"
        type="input"
        id="search"
        value={search}
        onChange={handleChange}
        placeholder="What are you looking for?"
      ></input>
      <button
        className="searchform__button"
        disabled={search === ""}
        type="submit"
        id="submit-search-btn"
        onClick={onSubmit}
      >
        <img src={searchImg} alt={"search button"}></img>
      </button>
    </div>
  );
}
