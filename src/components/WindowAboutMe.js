import React from "react";

const WindowAboutMe = () => {
  return (
    <>
      <img
        src={
          "https://firebasestorage.googleapis.com/v0/b/portafolio-f1e48.appspot.com/o/assets%2FMY.jpg?alt=media&token=57a327f8-3fab-4340-97d2-b27b447970e0"
        }
        alt=""
        className="windowAboutMe__image"
      />
      <h2>!Hola a todos!</h2>
      <h1>Soy Santiago</h1>
      <p>
        Un Front-end Developer que le fascina ser perspicaz con los detalles de
        un proyecto
      </p>
      <nav className="windowAboutMe__nav">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Santiago010"
          className="windowAboutMe__links"
        >
          <span className="iconify" data-icon="akar-icons:github-fill"></span>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/santiago-ortiz-llanos-308739201/"
          className="windowAboutMe__links"
        >
          <span className="iconify" data-icon="bx:bxl-linkedin"></span>
        </a>
        <a
          href="https://firebasestorage.googleapis.com/v0/b/portafolio-f1e48.appspot.com/o/assets%2FCV.pdf?alt=media&token=14f572d6-07e4-4784-94da-591492957fc9"
          target="_blank"
          rel="noreferrer"
          className="windowAboutMe__links"
        >
          <span className="iconify" data-icon="bi:file-earmark-pdf"></span>
        </a>
      </nav>
    </>
  );
};

export default WindowAboutMe;
