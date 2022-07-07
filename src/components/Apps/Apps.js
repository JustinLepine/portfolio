import React from "react";
import ProjectLists from "./ProjectList";
import Github from '../../assets/svg/github.svg';
import "./Apps.scss";

function Apps() {
  const data = ProjectLists;

  return (
    <section id="apps" className="apps">
      <ul className="apps__list">
        {data.map((project, index) => {
          return (
            <li className="apps__projects" key={index}>
              <div className="apps__left">
                <div className="apps__top">
                  <h3>{project.id} : {project.title}</h3>
                  <p className="apps__desc">{project.desc}</p>
                </div>
                <div className="apps__bottom">
                <p className="apps__tech">Tech : {project.tech}</p>
                <a target='_blank' rel="noreferrer" className="apps__anchor" href={project.github}>
                  <img className="apps__github" alt="github" src={ Github }/>
                </a>
                </div>
              </div>
              <div className="apps__right">
                <img src={project.image} className="apps__img" alt='project preview' />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Apps;
