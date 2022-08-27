import React, { useState, useEffect } from "react";

import Main from "./main/Main";
import Cards from "./cards/Cards";
import Details from "./details/Details";
import image from "../images/card-default.jpeg";
import { Route, Routes, useNavigate } from "react-router-dom";
import api from "../utils/api";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    api
      .getInitialCards()
      .then(({ collection: { items: cardData } }) => {
        setIsLoaded(true);
        setCards(cardData);
      })
      .catch((err) => console.error(err));
  }, []);

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    api
      .search(search)
      .then(({ collection: { items: searchData } }) => {
        setIsLoaded(true);
        setCards(searchData);
      })
      .catch((err) => console.error(err));
    navigate("/");
  }

  function handleImageClick(card) {
    navigate(`/${card.data[0].nasa_id}`);
  }

  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <Main
              search={search}
              handleSearchChange={handleSearchChange}
              handleSearchSubmit={handleSearchSubmit}
              isLoaded={isLoaded}
            />
          }
        >
          <Route
            path="/:nasa_id"
            element={<Details img={image} isLoaded={isLoaded} />}
          />
          <Route
            path="/"
            element={
              <Cards
                cards={cards}
                search={search}
                handleImageClick={handleImageClick}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
