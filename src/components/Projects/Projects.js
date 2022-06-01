import React from "react";
import ProjectLists from './ProjectLists';
import Images from '../../assets/images/index';
import Github from '../../assets/svg/github.svg'
import "./Projects.scss";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="projects__main-title">Projects :</h2>
      <ul className="projects__projects">
        {ProjectLists.map((project, index) => {
          return (
          <li className="projects__project" key={index}>
              <div className="projects__card">
                <div className="projects__circle">
                  <div className="projects__content">
                    <h2 className="projects__title">{project.id} : {project.title}</h2>
                    <p className="projects__desc">{project.desc}</p>
                    <a target='_blank' rel="noreferrer" className="projects__anchor" href={project.github}>
                      <img className="projects__github" alt="github" src={ Github }/>
                    </a>
                  </div>
                  <img alt="phone" src={Images.phone}/>
                </div>
              </div>

          </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Projects;
