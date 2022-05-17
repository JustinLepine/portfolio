import React, { useEffect, Suspense } from "react";
import "./Hero.scss";
import Typewriter from "./Typewriter";
import HeroCube from "./HeroCube";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

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
      .typeString("\n I'm Justin Lepine a Web Developer from Montreal, Canada!")
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
      <Canvas className="hero__canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <directionalLight position={[-2, -2, -1]} intensity={0.2} />
        <Suspense fallback={null}>
          <HeroCube />
        </Suspense>
      </Canvas>
      <div id="type" className="hero__type"></div>
    </section>
  );
}

export default Hero;
