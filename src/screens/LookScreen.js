import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { startLoggedInUser } from "../actions/authActions";
import useForm from "../hooks/useForm";

export const LookScreen = () => {
  const dispatch = useDispatch();
  const [msgError, setMsgError] = useState(null);

  const [values, handleInputChange, resetValues] = useForm({
    nameUser: "",
  });

  const { nameUser } = values;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nameUser.trim().length < 3) {
      setMsgError("debes ingresar un nombre valido");
      return;
    }
    dispatch(startLoggedInUser(nameUser));
    resetValues();
  };

  useEffect(() => {
    setTimeout(() => {
      setMsgError(null);
    }, 6000);
  }, [msgError]);

  return (
    <main className="lock animate__animated animate__backInDown">
      <div className="lock__container">
        <h1 className="lock__title">¡Hola! Bienvenido a mi portafolio</h1>
        <p className="lock__paragraph">Ingresa tu nombre para continuar</p>
        <i className="fas fa-user-circle lock__image-profile"></i>
        {nameUser && <span className="lock__name">{nameUser}</span>}

        <form className="lock__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nameUser"
            value={nameUser}
            onChange={handleInputChange}
            className="lock__input glass-background"
            placeholder="Nombre: "
          />
          <button type="submit" className="lock__btn glass-background">
            <i className="fas fa-arrow-right"></i>
          </button>
        </form>
        {msgError && (
          <p className="lock__error  animate__animated animate__pulse">
            {msgError}
          </p>
        )}
      </div>
    </main>
  );
};
