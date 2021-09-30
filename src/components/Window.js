import React from "react";
import PropTypes from "prop-types";
import { typesWindow } from "../types/typesWindow";

import BaseWindow from "./BaseWindow";

import WindowContact from "./WindowContact";
import WindowAboutMe from "./WindowAboutMe";
import WindowProjects from "./WindowProjects";

const Window = ({ windowToShow }) => {
  if (windowToShow === typesWindow.windowAboutMe) {
    return (
      <BaseWindow>
        <div className="window__content">
          <WindowAboutMe />
        </div>
      </BaseWindow>
    );
  }

  if (windowToShow === typesWindow.windowContact) {
    return (
      <BaseWindow>
        <div className="window__content">
          <WindowContact />
        </div>
      </BaseWindow>
    );
  }

  if (windowToShow === typesWindow.windowProjects) {
    return (
      <BaseWindow>
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
