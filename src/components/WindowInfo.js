import React from "react";
import Background from "../assets/Background.jpeg";

const WindowInfo = () => {
  return (
    <>
      <h1 className="windowInfo__title">información</h1>
      <div className="windowInfo__containermain">
        <img src={Background} alt="" />
        <div className="windowInfo__boxinfo">
          <h3>Portafolio Santiago Ortiz Llanos</h3>
          <small>version 1.0</small>
          <b>Este sitio fue hecho con :</b>
          <ul>
            <li>
              React : <span className="iconify" data-icon="logos:react"></span>
            </li>
            <li>
              Redux : <span className="iconify" data-icon="logos:redux"></span>
            </li>
            <li>
              FireBase :
              <span className="iconify" data-icon="logos:firebase"></span>
            </li>
          </ul>
        </div>
      </div>
      <small className="copyrigth">@Copyrigth 2024</small>
    </>
  );
};

export default WindowInfo;
