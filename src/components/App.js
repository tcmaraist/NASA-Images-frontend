import React from "react";

import Header from "./Header";

import Main from "./Main";
import Search from "./Search";
import Footer from "./Footer";

import SearchForm from "./SearchForm";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="page">
      {/*<Preloader></Preloader> */}

      <Header></Header>
      {/* <Navigation></Navigation> */}

      <SearchForm></SearchForm>
      <Routes>
        <Route path="/Search" element={<Search />} />
        <Route path="/" element={<Main />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
