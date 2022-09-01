import React, { Suspense, useState, useEffect } from "react";
import SkillsCube from "./SkillsCube";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SkillsList from "./SkillsList";
import "./Skills.scss";

function Skills() {
  const [filterSkill, setFilterSkill] = useState(SkillsList);
  const [activeFilter, setActiveFilter] = useState(['All']);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

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

  const handleSkillsFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 0, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterSkill(SkillsList);
      } else {
        setFilterSkill(SkillsList.filter((skill) => skill.type.includes(item)));
      }
    }, 500);
  };

  return (
    <motion.section animate={animation} ref={ref} id="skills">
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
          <p className="skills__disc">Cube was made with Blender and ThreeJS</p>
        </div>
        <div className="skills__right">
          <div className="skills__subtitles">
            {["Front End", "All", "Back End", "Learning"].map((item, index) => (
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
    </motion.section>
  );
}

export default Skills;
