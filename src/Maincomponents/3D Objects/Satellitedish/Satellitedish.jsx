import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {useLoader, Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import './Satellitedish.css'

const Satellitedish = () => {
    const Satellitedish = useLoader(GLTFLoader, "./3D Objects/Satellitedish.glb")
  return (
    <div>
         <Canvas className="Satellitedish" camera={{ position: [10, 10, 10] }}>
          <primitive
            object={Satellitedish.scene}
            position={[0, 0, 0]}
            />
            <ambientLight intensity={0.5} />
            <directionalLight color="white" position={[5, 0, 5]} /> 
          <OrbitControls target={[0, 10, 0]} autoRotate/>
          </Canvas>
    </div>
  )
}

export default Satellitedish