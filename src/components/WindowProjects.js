import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const WindowProjects = () => {
  const { projects } = useSelector((state) => state.dataProjectReducer);
  if (!projects) {
    return <Loader />;
  }
  return (
    <>
      <h1>Mis Proyectos</h1>
      {projects.map(({ name, description, url, github, image }, index) => (
        <div
          className="windowProjects__container"
          key={`${index + 1}${name.trim()}`}
        >
          <img className="windowProjects__image" src={image} alt="" />
          <h1>{name}</h1>
          <p>{description}</p>
          <nav className="windowProjects__nav">
            <a
              target="_blank"
              className="windowProjects__links"
              href={url}
              rel="noreferrer"
            >
              ver projecto
            </a>
            <a
              target="_blank"
              className="windowProjects__links"
              href={github}
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
              ver codigo
            </a>
          </nav>
        </div>
      ))}
    </>
  );
};

export default WindowProjects;