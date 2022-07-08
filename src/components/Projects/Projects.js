import React from "react";
import ProjectLists from "./ProjectList";
import Github from '../../assets/svg/github.svg';
import "./Projects.scss";

function Projects() {
  const data = ProjectLists;

  return (
    <section id="projects" className="projects">
      <ul className="projects__list">
        {data.map((project, index) => {
          return (
            <li className="projects__projects" key={index}>
              <div className="projects__left">
                <div className="projects__top">
                  <h3>{project.id} : {project.title}</h3>
                  <p className="projects__desc">{project.desc}</p>
                </div>
                <div className="projects__bottom">
                <p className="projects__tech">Tech : {project.tech}</p>
                <a target='_blank' rel="noreferrer" className="projects__anchor" href={project.github}>
                  <img className="projects__github" alt="github" src={ Github }/>
                </a>
                </div>
              </div>
              <div className="projects__right">
                <img src={project.image} className="projects__img" alt='project preview' />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Projects;
