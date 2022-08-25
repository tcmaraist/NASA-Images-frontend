import React from "react";

export default function SearchForm({ search, handleChange, onSubmit }) {
  return (
    <form className="searchform" onSubmit={onSubmit}>
      <input
        className="searchform__input"
        type="search"
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
      >
        Search
      </button>
    </form>
  );
}
