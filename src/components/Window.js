import React from "react";
import BaseWindow from "./BaseWindow";
import My from "../assets/My.jpg";
import { Link } from "react-router-dom";

const Window = () => {
  return (
    <BaseWindow>
      <div className="window__content">
        <img src={My} alt="" className="image-presentation" />
        <h2>!Hola a todos!</h2>
        <h1>Soy Santiago</h1>
        <p>
          Un Front-end Developer que le fascina ser perspicaz con los detalles
          de una UI O UX
        </p>
        <nav className="nav-presentation">
          <Link to="/" className="links-presentation">
            <i class="fab fa-github"></i>
          </Link>
          <Link to="/" className="links-presentation">
            <i class="fab fa-linkedin-in"></i>
          </Link>
        </nav>
      </div>
    </BaseWindow>
  );
};

export default Window;
