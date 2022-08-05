import React, { useState } from 'react';
import ProjectLists from '../Projects/ProjectList';
import Github from '../../assets/svg/github.svg';
import './Slider.scss' ;
import ArrowBack from '../../assets/svg/arrow-back.svg';
import ArrowForward from '../../assets/svg/arrow-forward.svg';

const Slider = () => {
const [current, setCurrent] = useState(0);
const length = ProjectLists.length;
console.log(current)

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
}

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
}

if (!Array.isArray(ProjectLists) || ProjectLists.length <= 0) {
    return null;
}

return (
    <section className='slider'>
        <img src={ArrowBack} alt='arrow-back' onClick={prevSlide} className='slider__arrow' />
        {ProjectLists.map((project, index) => {
            return (
                <div key={index} className='slider__card'>
                    <div className='slider__info'>
                        <h1 className='slider__title'>{project.id} : {project.title}</h1>
                        <p>{project.desc}</p>
                        <div>
                            <p className='slider__tech'>{project.tech}</p>
                            <img className='slider__github' src={Github} alt='github'/>
                        </div>
                    </div>
                    <img src={project.image} alt='preview' className='slider__img' />
                </div>
            )
        })}
        <img src={ArrowForward} alt='arrow' onClick={nextSlide} className='slider__arrow' />
    </section>
  )
}

export default Slider;