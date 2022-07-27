import React from "react";
import Header from "./Header";
import SearchForm from "./SearchForm";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import image from "../images/card-default.jpeg";
import Details from "./Details";
import Cards from "./Cards";
import Footer from "./Footer";

export default function Main(props) {
  return (
    <div className="page">
      <Header></Header>
      <SearchForm></SearchForm>
      <Routes>
        <Route path="/details" element={<Details img={image} />} />
        <Route path="/" element={<Cards img={image} />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}
