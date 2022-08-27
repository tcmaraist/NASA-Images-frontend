import React from "react";
import Header from "../header/Header";
import SearchForm from "../searchform/SearchForm";
import Preloader from "../preloader/Preloader";
import { Outlet } from "react-router-dom";

import Footer from "../footer/Footer.js";

export default function Main({
  search,
  handleSearchChange,
  handleSearchSubmit,
  isLoaded,
}) {
  return (
    <div>
      {isLoaded ? (
        <>
          <Header></Header>
          <SearchForm
            search={search}
            handleChange={handleSearchChange}
            onSubmit={handleSearchSubmit}
          ></SearchForm>
          <Outlet />
          <Footer></Footer>
        </>
      ) : (
        <Preloader />
      )}
    </div>
  );
}
