import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { typesWindow } from "../types/typesWindow";

import BaseWindow from "./BaseWindow";

import WindowContact from "./WindowContact";
import WindowAboutMe from "./WindowAboutMe";
import WindowProjects from "./WindowProjects";
import { useDispatch } from "react-redux";
import { toggleWindowActive } from "../actions/windowsActions";
import WindowWelcome from "./WindowWelcome";
import WindowInfo from "./WindowInfo";

const Window = ({ windowToShow, dimesionesMain }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(toggleWindowActive(null));
    };
  }, [dispatch, windowToShow]);
  if (windowToShow === typesWindow.profile) {
    return (
      <BaseWindow dimesionesMain={dimesionesMain} windowToShow={windowToShow}>
        <div className="window__content">
          <WindowAboutMe />
        </div>
      </BaseWindow>
    );
  }

  if (windowToShow === typesWindow.contact) {
    return (
      <BaseWindow dimesionesMain={dimesionesMain} windowToShow={windowToShow}>
        <div className="window__content">
          <WindowContact />
        </div>
      </BaseWindow>
    );
  }

  if (windowToShow === typesWindow.projects) {
    return (
      <BaseWindow dimesionesMain={dimesionesMain} windowToShow={windowToShow}>
        <div className="window__content">
          <WindowProjects />
        </div>
      </BaseWindow>
    );
  }

  if (windowToShow === typesWindow.welcome) {
    return (
      <BaseWindow dimesionesMain={dimesionesMain} windowToShow={windowToShow}>
        <div className="window__content">
          <WindowWelcome />
        </div>
      </BaseWindow>
    );
  }

  if (windowToShow === typesWindow.about) {
    return (
      <BaseWindow dimesionesMain={dimesionesMain} windowToShow={windowToShow}>
        <div className="window__content">
          <WindowInfo />
        </div>
      </BaseWindow>
    );
  }
};

Window.propTypes = {
  windowToShow: PropTypes.string.isRequired,
};

export default Window;
