import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function AnimatedSphere() {
    return (
        <Sphere visible={ true } args={ [1, 100, 200] } scale={ 3 }>
            <MeshDistortMaterial 
                color='#8352FD'
                className='sphere-ani'
                attach="material" 
                distort={ 0.6 } 
                speed={ 1.3 } 
                roughness={ 0.9 }
            />
        </Sphere>
    )
}