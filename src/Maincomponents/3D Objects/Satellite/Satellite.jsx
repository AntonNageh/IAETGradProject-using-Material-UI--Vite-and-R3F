import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {useLoader, Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import './Satellite.css'
const Satellite = () => {   
    const Satellite = useLoader(GLTFLoader, "./3D Objects/Satellite.glb")
  return (
    <div>
         <Canvas className="Satellite" camera={{position: [-20,0,-10] }}>
          <primitive
            object={Satellite.scene}
            position={[0, 0, 0]}
            />
            <ambientLight intensity={1} />
            <directionalLight color="white" position={[5, 0, 5]} /> 
          <OrbitControls target={[0, 15, 0]} autoRotate/>
          </Canvas>
     
    </div>
  )
}

export default Satellite