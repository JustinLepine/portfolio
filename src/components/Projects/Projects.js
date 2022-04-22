import React from 'react';
import ProjectLists from './ProjectLists';
import './Projects.scss';

function Projects() {
  return (
    <section className='projects'>
        <ul>
            {ProjectLists.map((project, index) => {
                return (
                    <li className='projects__list' key={index}>
                        <div className='projects__left'>
                            <h3 className='projects__id'>{project.id}</h3>
                            <h2 className='projects__title'>{project.title}</h2>
                            <h2 className='projects__tech'>{project.tech}</h2>
                            <p className='projects__desc'>{project.desc}</p>
                        </div>
                        <div className='projects__right'>
                        </div>
                    </li>
                )
            })}
        </ul>
    </section>
  )
}

export default Projects