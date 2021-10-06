import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { startLoggedInUser } from "../actions/authActions";
import { startMsgError } from "../actions/uiActions";
import ParagraphError from "../components/ParagraphError";
import useForm from "../hooks/useForm";

export const LookScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.uiReducer);

  const [values, handleInputChange, resetValues] = useForm({
    nameUser: "",
  });

  const { nameUser } = values;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nameUser.trim().length < 3) {
      dispatch(startMsgError("¡Debes ingresar un nombre valido!"));
      return;
    }
    dispatch(startLoggedInUser(nameUser));
    resetValues();
  };

  return (
    <main className="lock animate__animated animate__backInDown">
      <div className="lock__container">
        <h1 className="lock__title">¡Hola! Bienvenido a mi portafolio</h1>
        <p className="lock__paragraph">Ingresa tu nombre para continuar</p>
        <span
          className="iconify lock__image-profile"
          data-icon="et:profile-male"
        ></span>
        {nameUser && <p className="lock__name">{nameUser}</p>}

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
            <span
              className="iconify"
              data-icon="ant-design:arrow-right-outlined"
            ></span>
          </button>
        </form>
        {msgError && <ParagraphError msgError={msgError} />}
      </div>
    </main>
  );
};
