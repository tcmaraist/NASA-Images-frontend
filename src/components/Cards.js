import React from "react";
import Card from "./Card";
import image from "../images/card-default.jpeg";
export default function Cards() {
  return (
    <section>
      <ul className="cards">
        <Card img={image}></Card>
        <Card img={image}></Card>
        <Card img={image}></Card>
        <Card img={image}></Card>
        <Card img={image}></Card>
        <Card img={image}></Card>
      </ul>
    </section>
  );
}
