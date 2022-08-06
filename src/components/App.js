import React from "react";

import NotFound from "./NotFound";

import Main from "./Main";
import Cards from "./Cards";
import Details from "./Details";
import image from "../images/card-default.jpeg";
import { Route, Routes, useNavigate } from "react-router-dom";
import api from "../utils/api";

function App() {
  const [cards, setCards] = React.useState([]);
  const [count, setCount] = React.useState(0);
  const history = useNavigate();

  React.useEffect(() => {
    api
      .getInitialCards()
      .then(({ collection: { items: cardData } }) => {
        setCards(cardData);
      })
      .catch((err) => console.error(err));
  });

  function handleCardClick(card) {
    setGoToPage(card);
  }
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/details" element={<Details img={image} />} />
          <Route path="/" element={<Cards cards={cards} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
