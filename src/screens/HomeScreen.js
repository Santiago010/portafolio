import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startWindow } from "../actions/windowsActions";
import {
  StartSetDimensionMain,
  startGettingProjects,
} from "../actions/uiActions";

import Window from "../components/Window";
import info from "../icons/Info.svg";
import Contact from "../icons/Contact.svg";
import Profile from "../icons/Profile.svg";
import Projects from "../icons/Projects.svg";
import { typesWindow } from "../types/typesWindow";
import { useClock } from "../hooks/useClock";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { windows } = useSelector((state) => state.windowsReducer);
  const refMain = useRef({
    clientWidth: 0,
    clientHeight: 0,
  });

  useEffect(() => {
    dispatch(
      StartSetDimensionMain({
        width: refMain.current.clientWidth,
        height: refMain.current.clientHeight,
      })
    );
  }, [refMain.current.clientWidth, refMain.current.clientHeight]);

  const { clock, updateTime } = useClock();
  useEffect(() => {
    dispatch(startGettingProjects());
  }, [dispatch]);

  const handleOpenWindow = (ev, typeWindow) => {
    dispatch(startWindow(typeWindow));
  };

  useEffect(() => {
    updateTime();
    setTimeout(() => {
      dispatch(startWindow(typesWindow.welcome));
    }, 1000);
  }, []);

  useEffect(() => {
    setInterval(() => updateTime(), 1000);
  }, [clock]);

  return (
    <div className="home">
      <header className="home__header animate__animated animate__slideInDown">
        <div
          onClick={(ev) => handleOpenWindow(ev, typesWindow.about)}
          className="spancoffe__info"
        >
          <span
            className="spancoffe__info iconify"
            data-icon="fa-solid:coffee"
          ></span>
        </div>

        <div>{clock}</div>
      </header>
      <main className="home__main" ref={refMain}>
        {windows[0].open && <Window windowToShow={typesWindow.profile} />}
        {windows[1].open && <Window windowToShow={typesWindow.projects} />}
        {windows[2].open && <Window windowToShow={typesWindow.contact} />}
        {windows[3].open && <Window windowToShow={typesWindow.about} />}
        {windows[4].open && <Window windowToShow={typesWindow.welcome} />}
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
          src={info}
          alt=""
          onClick={(ev) => handleOpenWindow(ev, typesWindow.welcome)}
        />
      </footer>
    </div>
  );
};

export default HomeScreen;
