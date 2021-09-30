import React from "react";
import Window from "../components/Window";
import Contact from "../icons/Contact.svg";
import CV from "../icons/CV.svg";
import Profile from "../icons/Profile.svg";
import Projects from "../icons/Projects.svg";

const HomeScreen = () => {
  return (
    <div className="home">
      <header className="home__header animate__animated animate__slideInDown"></header>
      <main className="home__main">
        <Window />
      </main>
      <footer className="home__footer animate__animated animate__slideInDown">
        <img className="home__icons" src={CV} alt="" />
        <img className="home__icons" src={Contact} alt="" />
        <img className="home__icons" src={Profile} alt="" />
        <img className="home__icons" src={Projects} alt="" />
      </footer>
    </div>
  );
};

export default HomeScreen;
