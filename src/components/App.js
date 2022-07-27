import React from "react";
import Preloader from "./Preloader";
import NotFound from "./NotFound";
import Header from "./Header";

import Main from "./Main";
import Details from "./Details";
import Footer from "./Footer";
import image from "../images/card-default.jpeg";

import SearchForm from "./SearchForm";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
