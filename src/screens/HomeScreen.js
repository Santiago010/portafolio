import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGettingProjects } from "../actions/dataProjectReducer";
import { startWindow } from "../actions/windowsActions";

import Window from "../components/Window";
import Contact from "../icons/Contact.svg";
import CV from "../icons/CV.svg";
import Profile from "../icons/Profile.svg";
import Projects from "../icons/Projects.svg";
import { typesWindow } from "../types/typesWindow";

const HomeScreen = () => {
  const { windows } = useSelector((state) => state.windowsReducer);
  const [clock, setClock] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startGettingProjects());
  }, [dispatch]);

  const handleOpenWindow = (ev, typeWindow) => {
    dispatch(startWindow(typeWindow));
  };

  useEffect(() => {
    return () => {
      updateTime();
    };
  }, []);

  const updateTime = () => {
    const now = moment();
    const humanReadable = now.format("hh:mm:ssA");
    setClock(humanReadable);
  };

  useEffect(() => {
    setInterval(() => updateTime(), 1000);
  }, [clock]);
  return (
    <div className="home">
      <header className="home__header animate__animated animate__slideInDown">
        <i className="fas fa-coffee"></i>
        <div>{clock}</div>
      </header>
      <main className="home__main">
        {windows[0].open && <Window windowToShow={typesWindow.profile} />}
        {windows[1].open && <Window windowToShow={typesWindow.projects} />}
        {windows[2].open && <Window windowToShow={typesWindow.contact} />}
      </main>
      <footer className="home__footer animate__animated animate__slideInDown">
        <img
          className="home__icons"
          src={Profile}
          alt=""
          onClick={(ev) => handleOpenWindow(ev, typesWindow.profile)}
        />
        <img
          className="home__icons"
          src={Projects}
          alt=""
          onClick={(ev) => handleOpenWindow(ev, typesWindow.projects)}
        />
        <img
          className="home__icons"
          src={Contact}
          alt=""
          onClick={(ev) => handleOpenWindow(ev, typesWindow.contact)}
        />
        <img
          className="home__icons"
          src={CV}
          alt=""
          onClick={(ev) => handleOpenWindow(ev, typesWindow.CV)}
        />
      </footer>
    </div>
  );
};

export default HomeScreen;
