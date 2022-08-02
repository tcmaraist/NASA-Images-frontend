import React from "react";

import NotFound from "./NotFound";

import Main from "./Main";
import Cards from "./Cards";
import Details from "./Details";
import image from "../images/card-default.jpeg";
import { Route, Routes } from "react-router-dom";
import api from "../utils/api";

function App() {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((res) => console.log(res))
      .then(({ collection: { items: cardData } }) => {
        setCards(cardData);
      })
      .catch((err) => console.error(err));
  });
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
