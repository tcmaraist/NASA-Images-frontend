import React from "react";

import NotFound from "./NotFound";

import Main from "./Main";
import Cards from "./Cards";
import Details from "./Details";
import image from "../images/card-default.jpeg";
import { Route, Routes } from "react-router-dom";
import api from "../utils/api";

function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [query, setQuery] = React.useState("redux");
  const [album, setAlbum] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then(({ collection: { items: cardData } }) => {
        setCards(cardData);
      })
      .catch((err) => console.error(err));
  });

  React.useEffect(() => {
    api
      .getAlbum()
      .then(console.log(`album_name`))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Main query={query} setQuery={setQuery} />}>
          <Route path="/:nasa_id" element={<Details img={image} />} />
          <Route path="/" element={<Cards cards={cards} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
