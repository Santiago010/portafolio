import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { typesWindow } from "../types/typesWindow";

import BaseWindow from "./BaseWindow";

import WindowContact from "./WindowContact";
import WindowAboutMe from "./WindowAboutMe";
import WindowProjects from "./WindowProjects";
import { useDispatch } from "react-redux";
import { toggleWindowActive } from "../actions/windowsActions";

const Window = ({ windowToShow }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(toggleWindowActive(null));
    };
  }, [dispatch, windowToShow]);
  if (windowToShow === typesWindow.profile) {
    return (
      <BaseWindow windowToShow={windowToShow}>
        <div className="window__content">
          <WindowAboutMe />
        </div>
      </BaseWindow>
    );
  }

  if (windowToShow === typesWindow.contact) {
    return (
      <BaseWindow windowToShow={windowToShow}>
        <div className="window__content">
          <WindowContact />
        </div>
      </BaseWindow>
    );
  }

  if (windowToShow === typesWindow.projects) {
    return (
      <BaseWindow windowToShow={windowToShow}>
        <div className="window__content">
          <WindowProjects />
        </div>
      </BaseWindow>
    );
  }
};

Window.propTypes = {
  windowToShow: PropTypes.string.isRequired,
};

export default Window;
