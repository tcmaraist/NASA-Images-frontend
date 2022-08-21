import React from "react";
import Header from "./Header";
import SearchForm from "./SearchForm";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Main({
  search,
  handleSearchChange,
  handleSearchBtnClick,
}) {
  return (
    <div className="page">
      <Header></Header>
      <SearchForm
        search={search}
        handleChange={handleSearchChange}
        onSubmit={handleSearchBtnClick}
      ></SearchForm>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}
