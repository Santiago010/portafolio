import React from "react";
import My from "../assets/My.jpg";

const WindowAboutMe = () => {
  return (
    <>
      <img src={My} alt="" className="windowAboutMe__image" />
      <h2>!Hola a todos!</h2>
      <h1>Soy Santiago</h1>
      <p>
        Un Front-end Developer que le fascina ser perspicaz con los detalles de
        una UI O UX
      </p>
      <nav className="windowAboutMe__nav">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Santiago010"
          className="windowAboutMe__links"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/santiago-ortiz-llanos-308739201/"
          className="windowAboutMe__links"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </nav>
    </>
  );
};

export default WindowAboutMe;
