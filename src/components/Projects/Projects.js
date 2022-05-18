import React from "react";
import ProjectLists from './ProjectLists';
import Images from '../../assets/images/index';
import Github from '../../assets/svg/github.svg'
import "./Projects.scss";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="projects__main-title">Projects :</h2>
      <ul className="projects__project">
        {ProjectLists.map((project, index) => {
          return (
          <li key={index}>
              <div className="projects__card">
                <div className="projects__circle">
                  <div className="projects__content">
                    <h2>{project.id} : {project.title}</h2>
                    <p>{project.desc}</p>
                    <a href="https://github.com/JustinLepine/bstn-mini-hackathon">
                      <img className="projects__github" alt="github" src={ Github }/>
                    </a>
                  </div>
                  <img className="projects__phone" alt="phone" src={Images.phone}/>
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
