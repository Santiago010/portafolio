import React from "react";

const BaseWindow = ({ children }) => {
  return (
    <div className="basewindow">
      <header className="basewindow__header">
        <div className="basewindow__actions actions-close"></div>
        <div className="basewindow__actions actions-resize"></div>
      </header>
      {children}
    </div>
  );
};

export default BaseWindow;