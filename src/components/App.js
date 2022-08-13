import React, { useState, useEffect } from "react";

import NotFound from "./NotFound";

import Main from "./Main";
import Cards from "./Cards";
import Details from "./Details";
import image from "../images/card-default.jpeg";
import { Route, Routes, useSearchParams } from "react-router-dom";
import api from "../utils/api";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState("");
  const [searchParam] = useState(["jupiter"]);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then(({ collection: { items: cardData } }) => {
        setIsLoaded(true);
        setCards(cardData);
      })
      .catch((err) => console.error(err));
  });

  function search(cards) {
    return cards.filter((card) => {
      return searchParam.some((newCard) => {
        return (
          card[newCard].toString().toLowerCase().indexOf(query.toLowerCase()) >
          -1
        );
      });
    });
  }

  function handleSearchChange(e) {
    console.log(e);
    setQuery(e.target.value);
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
          <Route path="/" element={<Cards cards={cards} search={search} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

/*

the primary function of this app is the search bar

the search is the query and onSubmit should set the query

after a search is submitted the results should be filtered and displayed below in the cards section

when a user clicks on a card they should be brought to the details page

clicking on a card should trigger an api request

on the details page Image, Title, Subtitle, and Info should load dynamically based on the image the user clicked on

that's it!

request URL for details page "https://images-api.nasa.gov/metadata/PIA08653"

I need to write a function in Card.js that will send an api request to metadata/nasa_id

do I need useEffect to get card details to render in /details?


for reference: https://codepen.io/Spruce_khalifa/pen/wvgJWdO?editors=0010

check Cards.js and searchParam hook to see why no worky










*/
