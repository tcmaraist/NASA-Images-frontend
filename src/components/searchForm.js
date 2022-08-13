import search from "../images/search.svg";

export default function SearchForm({ query, handleChange }) {
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
