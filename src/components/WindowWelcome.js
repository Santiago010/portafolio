import React from "react";
import { useSelector } from "react-redux";

const WindowWelcome = () => {
  const { nameUser } = useSelector((state) => state.authReducer);
  return (
    <>
      <div className="wrapper">
        <div className="typing-demo">¡Bienvenid@! {nameUser}</div>
      </div>

      <div className="windowWelcome__i">
        Mi portafolio tiene una interfaz de usuario inspirada en un sistema
        operativo, así que siéntete libre de navegar por mi portafolio como lo
        harías en tu propio ordenador.
      </div>
    </>
  );
};

export default WindowWelcome;
