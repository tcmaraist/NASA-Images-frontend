import React from "react";

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
      {/*<Preloader></Preloader> */}

      <Header></Header>
      <SearchForm></SearchForm>
      <Routes>
        <Route path="/Search" element={<Details img={image} />} />
        <Route path="/" element={<Main />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
