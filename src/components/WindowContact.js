import React from "react";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { startMsgError, sendEmail } from "../actions/uiActions";
import useForm from "../hooks/useForm";
import ParagraphError from "./ParagraphError";
import ParagraphSuccess from "./ParagraphSuccess";
import Loader from "./Loader";

const WindowContact = () => {
  const dispatch = useDispatch();
  const { msgError, loading, msgSuccess } = useSelector(
    (state) => state.uiReducer
  );
  const [values, handleInputChange, resetValues] = useForm({
    email: "",
    message: "",
  });
  const { email, message } = values;

  const handleSendMessage = (ev) => {
    ev.preventDefault();
    if (!isValid()) {
      return false;
    } else {
      dispatch(sendEmail(email, message));
      resetValues();
    }
  };

  const isValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(startMsgError("¡el email ingresado no es valido!"));
      return false;
    } else if (message.trim().length < 10) {
      dispatch(startMsgError("¡El mensaje debe ser mayor a 10 caracteres!"));
      return false;
    }
    return true;
  };
  return (
    <>
      <h1 className="">¡Contactame!</h1>
      <form className="windowContact__form" onSubmit={handleSendMessage}>
        <input
          className="windowContact__input"
          type="text"
          name="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Correo"
          autoComplete="off"
        />

        <textarea
          className="windowContact__input windowContact__textarea"
          name="message"
          value={message}
          onChange={handleInputChange}
          placeholder="Mensaje"
          rows="10"
        ></textarea>
        <input
          className="windowContact__input windowContact__submit"
          type="submit"
          value="Contactar"
        />
      </form>
      {msgError && <ParagraphError msgError={msgError} />}
      {loading && <Loader />}
      {msgSuccess && <ParagraphSuccess success={msgSuccess} />}
    </>
  );
};

export default WindowContact;
