import React, { useState, useEffect } from "react";

import NotFound from "./NotFound";

import Main from "./Main";
import Cards from "./Cards";
import Details from "./Details";
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
    // console.log(`${card.data[0].title}`);
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

/* 
on search button submit 'cards' should be set to search results.

on card click user should be redirected to a page with information that is dynamically rendered with information form the card.

fix preloader constant loading

figure out how to get image data --> image data will come from metadata. look specifically at AVAIL



*/
