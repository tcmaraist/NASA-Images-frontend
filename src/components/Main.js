import React from "react";
import Header from "./Header";
import SearchForm from "./SearchForm";
import Preloader from "./Preloader";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Main({
  search,
  handleSearchChange,
  handleSearchSubmit,
  isLoaded,
}) {
  return (
    <div className="page">
      <Header></Header>
      <SearchForm
        search={search}
        handleChange={handleSearchChange}
        onSubmit={handleSearchSubmit}
      ></SearchForm>
      {isLoaded ? <Outlet /> : <Preloader />}

      <Footer></Footer>
    </div>
  );
}
