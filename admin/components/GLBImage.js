import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function GLBImage({ url }) {
    const gltfRef = useRef();
  
    useFrame(() => {
      // Rotate the model or perform other animations/updates
      if (gltfRef.current) {
        gltfRef.current.rotation.y += 0.01;
      }
    });
  
    return (
      <group>
        <mesh ref={gltfRef}>
          <primitive object={gltfRef.current} dispose={null} />
        </mesh>
      </group>
    );
  }
  
