import React, { useState, useEffect } from "react";

import Main from "../main/Main";
import Navigation from "../navigation/Navigation";
import Cards from "../cards/Cards";
import Details from "../details/Details";
import image from "../../images/card-default.jpeg";
import { Route, Routes, useNavigate } from "react-router-dom";
import api from "../../utils/api";
import Preloader from "../preloader/Preloader";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("MostPopular");
  const [limit, setLimit] = useState(6);
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");
  const [noResults, setNoResults] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    api
      .getMostPopular()
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
        setLimit(6);
        if (searchData.length === 0) {
          setNoResults(true);
          setIsLoaded(true);
        } else {
          setNoResults(false);
          setCards(searchData);
          setIsLoaded(true);
        }
      })
      .catch((err) => console.error(err));
    navigate("/");
  }

  function handleMostRecent(e) {
    e.preventDefault();
    setIsLoaded(false);
    api
      .getMostRecent()
      .then(({ collection: { items: cardData } }) => {
        setActiveTab("MostRecent");
        setCards(cardData);
        setIsLoaded(true);
      })
      .catch((err) => console.error(err));
  }

  function handleMostPopular(e) {
    e.preventDefault();
    setIsLoaded(false);
    api
      .getMostPopular()
      .then(({ collection: { items: cardData } }) => {
        setActiveTab("MostPopular");
        setCards(cardData);
        setIsLoaded(true);
      })
      .catch((err) => console.error(err));
  }

  function handleImageClick(card) {
    navigate(`/${card.data[0].nasa_id}`);
    setIsLoaded(false);
  }

  function handleShowMoreClick() {
    setLimit(limit + 3);
  }

  return (
    <div className="page">
      <Routes>
        <Route
          exact
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
              <>
                {" "}
                <Navigation
                  activeTab={activeTab}
                  handleMostPopular={handleMostPopular}
                  handleMostRecent={handleMostRecent}
                ></Navigation>{" "}
                {isLoaded ? (
                  <Cards
                    limit={limit}
                    cards={cards}
                    search={search}
                    noResults={noResults}
                    handleImageClick={handleImageClick}
                    handleShowMoreClick={handleShowMoreClick}
                  />
                ) : (
                  <Preloader />
                )}
              </>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
