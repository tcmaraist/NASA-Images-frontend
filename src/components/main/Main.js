import React from "react";
import Header from "../header/Header";
import SearchForm from "../searchform/SearchForm";

import { Outlet } from "react-router-dom";

import Footer from "../footer/Footer.js";

export default function Main({
  search,
  handleSearchChange,
  handleSearchSubmit,
}) {
  return (
    <div>
      <Header></Header>
      <SearchForm
        search={search}
        handleChange={handleSearchChange}
        onSubmit={handleSearchSubmit}
      ></SearchForm>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}
