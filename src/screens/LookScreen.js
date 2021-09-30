import React from "react";

export const LookScreen = () => {
  return (
    <main className="lock animate__animated animate__backInDown">
      <div className="lock__container">
        <i className="fas fa-user-circle lock__image-profile"></i>
        <span className="lock__name">Santiago</span>
        <form className="lock__form">
          <input
            type="text"
            name="nameUser"
            className="lock__input glass-background"
            placeholder="Ingresa tu nombre: "
          />
          <button type="submit" className="lock__btn glass-background">
            <i className="fas fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </main>
  );
};
