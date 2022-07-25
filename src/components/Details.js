import React from "react";
import image from "../images/card-default.jpeg";

export default function Details(props) {
  return (
    <article className="details">
      <img className="details__image" src={image} alt="" />
      <h2 className="details__title">Lorem ipsum</h2>
      <p className="details__info">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, ut
        aliquam, vel nihil dolorem dignissimos dicta atque deleniti maxime,
        consectetur illum. Ad, iste debitis sit asperiores blanditiis nesciunt
        vitae nihil!
      </p>
    </article>
  );
}
