import React, { Suspense } from "react";
import "./Skills.scss";
import SkillsCube from "./SkillsCube";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Skills() {
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
        <div className="skills__right"></div>
      </div>
    </section>
  );
}

export default Skills;
