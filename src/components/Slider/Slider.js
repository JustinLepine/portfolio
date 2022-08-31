import React, { useState, useEffect } from "react";
import Github from "../../assets/svg/github.svg";
import ArrowBack from "../../assets/svg/arrow-back.svg";
import ArrowForward from "../../assets/svg/arrow-forward.svg";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import "./Slider.scss";

const Slider = (props) => {
  const data = props.ProjectLists;
  const [current, setCurrent] = useState(0);
  const length = data.length;

  const { ref, inView } = useInView({
    threshold: 0.2,
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

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }

  return (
  <motion.section animate={animation} ref={ref} id='projects'>
    <h1 className="slider__title">Projects :</h1>
    <div className="slider">
      <img src={ArrowBack} alt="arrow-back" onClick={prevSlide} className="slider__arrow" />
      {data.map((project, index) => {
          return (
              <div key={index}>
            {index === current && (
              <motion.div  
              className="slider__card"   
              initial={{opacity: 0, translateX:'-100%'}}
              animate={{opacity: 1, translateX: '-0%'}}
              exit={{opacity: 0, translateX:'-100%' }}
              >
                <div className="slider__info">
                  <h2>{project.id} : {project.title}</h2>
                  <p className="slider__desc">{project.desc}</p>
                  <div>
                    <p>{project.tech}</p>
                    <a target='_blank' rel="noreferrer" href={project.github}>
                      <img className="slider__github" src={Github} alt="github" />
                    </a>
                  </div>
                </div>
                <img src={project.image} alt="preview" className="slider__img" />
              </motion.div>
            )}
          </div>
        );
    })}
      <img src={ArrowForward} alt="arrow" onClick={nextSlide} className="slider__arrow" />
    </div>
  </motion.section>
  );
};

export default Slider;
