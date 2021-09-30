import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGettingProjects } from "../actions/dataProjectReducer";
import {
  setWindowAboutMe,
  setWindowContact,
  setWindowCV,
  setWindowProjects,
} from "../actions/windowsActions";
import Window from "../components/Window";
import Contact from "../icons/Contact.svg";
import CV from "../icons/CV.svg";
import Profile from "../icons/Profile.svg";
import Projects from "../icons/Projects.svg";
import { typesWindow } from "../types/typesWindow";

const HomeScreen = () => {
  const { windowProjects, windowAboutMe, windowCV, windowContact } =
    useSelector((state) => state.windowsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startGettingProjects());
  }, [dispatch]);

  const handleWindowCv = () => {
    dispatch(setWindowCV());
  };
  const handleWindowContact = () => {
    dispatch(setWindowContact());
  };
  const handleWindowProfile = () => {
    dispatch(setWindowAboutMe());
  };
  const handleWindowProjects = () => {
    dispatch(setWindowProjects());
  };
  return (
    <div className="home">
      <header className="home__header animate__animated animate__slideInDown"></header>
      <main className="home__main">
        {windowProjects && <Window windowToShow={typesWindow.windowProjects} />}
        {windowAboutMe && <Window windowToShow={typesWindow.windowAboutMe} />}
        {windowContact && <Window windowToShow={typesWindow.windowContact} />}
        {/* {windowCV && <Window windowToShow={typesWindow.windowCV} />} */}
      </main>
      <footer className="home__footer animate__animated animate__slideInDown">
        <img className="home__icons" onClick={handleWindowCv} src={CV} alt="" />
        <img
          className="home__icons"
          onClick={handleWindowContact}
          src={Contact}
          alt=""
        />
        <img
          className="home__icons"
          onClick={handleWindowProfile}
          src={Profile}
          alt=""
        />
        <img
          className="home__icons"
          onClick={handleWindowProjects}
          src={Projects}
          alt=""
        />
      </footer>
    </div>
  );
};

export default HomeScreen;
