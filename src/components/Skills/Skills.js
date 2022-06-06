import React, { Suspense, useState } from "react";
import SkillsCube from "./SkillsCube";
import { motion } from "framer-motion";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./Skills.scss";

function Skills() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1 });

  const handleSkillsFilter = (item) => {

  }

  return (
    <section id="skills">
      <h2 className="skills__title">Skills :</h2>
      <div className="skills">
        <div className="skills__left">
          <Canvas className="skills__canvas">
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.3} />
            <directionalLight position={[-2, 5, 2]} intensity={0.9} />
            <directionalLight position={[-2, -2, -1]} intensity={0.2} />
            <Suspense fallback={null}>
              <SkillsCube />
            </Suspense>
          </Canvas>
          <p className="skills__instructions">CLICK AND DRAG</p>
        </div>
        <div className="skills__right">
          {['Front End', 'Back End', 'All'].map((item, index) => (
            <div
              key={index}
              onClick={() => handleSkillsFilter(item)}
              className={`skills__filter ${activeFilter === item ? 'item-active' : ''}`}
            >
              {item}
            </div>

          ))}
        </div>
            <motion.div
            animate={animateCard}
            transition={{duration: 0.5, delayChildrem: 0.5}}
            className='skills__portfolio'
            >

            </motion.div>
      </div>
    </section>
  );
}

export default Skills;
