import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {useLoader, Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import './Satellite.css'
const Satellite = () => {   
  //      UseLoader is required for using the GLTF Loader, also the GLTF Loader is required
  //                          for GLB or GLTF file formats.
    const Satellite = useLoader(GLTFLoader, "./3D Objects/Satellite.glb")
  return (
    <div>
      {/* Canvas is the main tag for rendering the Satellite object */}
         <Canvas className="Satellite" camera={{position: [-20,0,-10] }}>
          <primitive
            object={Satellite.scene}
            position={[0, 0, 0]}
            />
            {/* Adding lights and brightness */}
            <ambientLight intensity={1} />
            <directionalLight color="white" position={[5, 0, 5]} /> 
            {/* Adding OrbitControls which is basically like an orbit in which the object will rotate */}
            {/* once the user wants to rotate it. */}
          <OrbitControls target={[0, 15, 0]} autoRotate/>
          </Canvas>
     
    </div>
  )
}

export default Satellite