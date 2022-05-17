import React, { useEffect } from "react";
import "./Hero.scss";
import Typewriter from "./Typewriter";

function Hero() {
  useEffect(() => {
    const typewriter = new Typewriter(document.body.querySelector(".hero__type"));

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
    console.log("typewriter");
  }, []);

  return (
    <section id="hero" className="hero">
      <div id="type" className="hero__type"></div>
    </section>
  );
}

export default Hero;
