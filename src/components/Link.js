import React from "react";

const Link = ({ children, url }) => {
  return (
    <div className="link__container">
      <a
        target="_blank"
        className="windowProjects__links"
        href={url}
        rel="noreferrer"
      >
        {children}
      </a>
    </div>
  );
};

export default Link;
