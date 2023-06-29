import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {useLoader, Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

import './Rover.css'

const Rover = () => {

    const Rover = useLoader(GLTFLoader, './3D Objects/Rover.glb', loader => {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
        dracoLoader.setDecoderConfig({type: 'js'})
        loader.setDRACOLoader(dracoLoader);
       });
  return (
    <div>
      {/* Canvas is the main tag for rendering the Satellite object */}
         <Canvas className="Rover" camera={{position: [-75,100,-100] }}>
          <primitive
            object={Rover.scene}
            position={[0, 0, 0]}
            />
            {/* Adding lights and brightness */}
            <ambientLight intensity={2} />
            <directionalLight color="white" position={[10, 10, 15]} /> 
            {/* Adding OrbitControls which is basically like an orbit in which the object will rotate */}
            {/* once the user wants to rotate it. */}
          <OrbitControls target={[0, 15, 0]} autoRotate/>
          </Canvas>
    
    </div>
  )
}

export default Rover