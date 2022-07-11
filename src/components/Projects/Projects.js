import React, { useEffect } from "react";
import ProjectLists from "./ProjectList";
import Github from '../../assets/svg/github.svg';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Projects.scss";

function Projects() {
  const data = ProjectLists;

  const { ref, inView } = useInView({
    threshold: 0.08,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        transition: { duration: 0.8 },
        x: 0,
        opacity: 1,
      });
    }
    if (!inView) {
      animation.start({
        transition: { duration: 1 },
        x: 0,
        opacity: 0,
      });
    }
  }, [inView, animation]);

  return (
    <motion.section animate={animation} ref= {ref} id="projects" className="projects">
      <ul className="projects__list">
        {data.map((project, index) => {
          return (
            <li className="projects__projects" key={index}>
              <div className="projects__left">
                <div className="projects__top">
                  <h3 className="projects__subtitle">{project.id} : {project.title}</h3>
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
    </motion.section>
  );
}

export default Projects;
