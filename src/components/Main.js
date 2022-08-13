import React from "react";
import Header from "./Header";
import SearchForm from "./SearchForm";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Main({ query, handleSearchChange }) {
  return (
    <div className="page">
      <Header></Header>
      <SearchForm query={query} handleChange={handleSearchChange}></SearchForm>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}
