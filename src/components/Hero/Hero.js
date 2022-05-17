import React, { useEffect } from "react";
import "./Hero.scss";
import Typewriter from "./Typewriter";
import Github from "../../assets/svg/github.svg"
import LinkedIn from "../../assets/svg/linkedIn.svg"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Hero() {
  
  const { ref, inView } = useInView({
    threshold: 0.4,
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

  useEffect(() => {
    const typewriter = new Typewriter(
      document.body.querySelector(".hero__type")
    );

    typewriter
      .pauseFor(1500)
      .typeString("Hey!")
      .pauseFor(800)
      .deleteChars(4)
      .typeString("Hello!")
      .pauseFor(1000)
      .typeString(" I'm Justin Lepine a Web Developer from Montreal, Canada!")
      .pauseFor(500)
      .deleteChars(1)
      .pauseFor(500)
      .typeString("🍁")
      .pauseFor(2000)
      .typeString(" : )")
      .start();
  }, []);

  return (
    <div ref={ref}>
      <motion.section animate={animation} id="hero" className="hero">
        <div id="type" className="hero__type"></div>
        <a href="https://github.com/JustinLepine">
          <img className="hero__logo" src={ Github } alt='github-logo'/>
        </a>
        <a href="www.linkedin.com/in/justin-lepine">
          <img className="hero__logo-2" src={ LinkedIn } alt='github-logo'/>
        </a>
      </motion.section>
    </div>
  );
}

export default Hero;
