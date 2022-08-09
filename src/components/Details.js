import React from "react";
import image from "../images/card-default.jpeg";
import { Link } from "react-router-dom";
export default function Details(props) {
  return (
    <article className="details">
      <img className="details__image" src={props} alt="" />
      <h2 className="details__title">Lorem ipsum</h2>
      <p className="details__info">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, ut
        aliquam, vel nihil dolorem dignissimos dicta atque deleniti maxime,
        consectetur illum. Ad, iste debitis sit asperiores blanditiis nesciunt
        vitae nihil! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Ducimus, ut aliquam, vel nihil dolorem dignissimos dicta atque deleniti
        maxime, consectetur illum. Ad, iste debitis sit asperiores blanditiis
        nesciunt vitae nihil! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Ducimus, ut aliquam, vel nihil dolorem dignissimos
        dicta atque deleniti maxime, consectetur illum. Ad, iste debitis sit
        asperiores blanditiis nesciunt vitae nihil! Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Ducimus, ut aliquam, vel nihil dolorem
        dignissimos dicta atque deleniti maxime, consectetur illum. Ad, iste
        debitis sit asperiores blanditiis nesciunt vitae nihil! Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Ducimus, ut aliquam, vel
        nihil dolorem dignissimos dicta atque deleniti maxime, consectetur
        illum. Ad, iste debitis sit asperiores blanditiis nesciunt vitae nihil!
      </p>
      <nav>
        <Link to="/" className="details__info link">
          Home
        </Link>
      </nav>
    </article>
  );
}
