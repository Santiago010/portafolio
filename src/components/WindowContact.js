import React from "react";

const WindowContact = () => {
  return (
    <>
      <h1 className="">¡Contactame!</h1>
      <form className="windowContact__form">
        <input
          className="windowContact__input"
          type="text"
          name="email"
          placeholder="Correo"
        />

        <textarea
          className="windowContact__input windowContact__textarea"
          name="message"
          placeholder="Mensaje"
          rows="10"
        ></textarea>
        <input
          className="windowContact__input windowContact__submit"
          type="submit"
          value="Contactar"
        />
      </form>
    </>
  );
};

export default WindowContact;
