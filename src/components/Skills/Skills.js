import React, { Suspense, useState } from "react";
import SkillsCube from "./SkillsCube";
import { motion } from "framer-motion";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import SkillsList from "./SkillsList";
import "./Skills.scss";

function Skills() {
  const [filterSkill, setFilterSkill] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1 });

  const handleSkillsFilter = (item) => {
    setActiveFilter(item);
    setanimateCard([{ y: 0, opacity: 0 }]);

    setTimeout(() => {
      setanimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterSkill(SkillsList);
      } else {
        setFilterSkill(SkillsList.filter((skill) => skill.type.includes(item)));
      }
    }, 500);
  };

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
          <div className="skills__subtitles">
            {["Front End", "All", "Back End"].map((item, index) => (
              <div
                key={index}
                onClick={() => handleSkillsFilter(item)}
                className={`skills__filter ${
                  activeFilter === item ? "item-active" : ""
                }`}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="skills__icon">        
            {filterSkill.map((skill, index) => (
              <motion.div
                key={index}
                animate={animateCard}
                transition={{ duration: 0.5, delayChildrem: 0.5 }}
                className="skills__portfolio"
              >
                <img className="skills__img" src={skill.image} alt={skill.title} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
