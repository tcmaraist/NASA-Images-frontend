import React, { useState, useEffect } from "react";

import NotFound from "./NotFound";

import Main from "./Main";
import Cards from "./Cards";
import Details from "./Details";
import image from "../images/card-default.jpeg";
import { Route, Routes, useSearchParams, useNavigate } from "react-router-dom";
import api from "../utils/api";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState("");
  const [searchParam] = useState(["jupiter"]);

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

  function search(cards) {
    return cards.filter((card) => {
      return searchParam.some((newCard) => {
        return (
          newCard.toString().toLowerCase().indexOf(query.toLowerCase()) > -1
        );
      });
    });
  }

  function handleSearchChange(e) {
    console.log(e);
    setQuery(e.target.value);
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
            <Main query={query} handleSearchChange={handleSearchChange} />
          }
        >
          <Route path="/:nasa_id" element={<Details img={image} />} />
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
