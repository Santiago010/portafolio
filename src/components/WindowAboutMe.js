import React from "react";

const WindowAboutMe = () => {
  return (
    <>
      <img
        src={
          "https://firebasestorage.googleapis.com/v0/b/portafolio-f1e48.appspot.com/o/assets%2FMy.jpg?alt=media&token=1279d843-3b43-42f4-9c2c-60990b35ce1b"
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
          href="https://firebasestorage.googleapis.com/v0/b/portafolio-f1e48.appspot.com/o/assets%2FCV.pdf?alt=media&token=ca045858-9a2c-4d07-8ba1-437c51a58ab8"
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
