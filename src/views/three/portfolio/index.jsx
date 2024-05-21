/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-21 18:46:54
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-21 18:48:44
 * @FilePath: /vite-react/src/views/three/portfolio/index.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Island from './models/Island';
import Bird from './models/Bird';
import Sky from './models/Sky';
import Plane from './models/Plane';

export default function product(){
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  console.log("currentStage",currentStage)
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43];
    } else {
      screenScale = [1, 1, 1];
    }


    return [screenScale, screenPosition, rotation]
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;


    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4]
    }


    return [screenScale, screenPosition]
  }




  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [PlaneScale, PlanePosition] = adjustPlaneForScreenSize();


  return <Canvas
  camera={{ near: 0.1, far: 1000 }}
>
    <directionalLight position={[1, 1, 1]} intensity={2} />
    <ambientLight intensity={0.5} />
    <pointLight />
    <spotLight />
    <hemisphereLight skycolor="#b1e1ff" groundColor={"#000000"} intensity={1} />

    <Bird />
    <Sky 
    isRotating={isRotating}
    />

    <Island
      position={islandPosition}
      scale={islandScale}
      rotation={islandRotation}
      isRotating={isRotating}
      setIsRotating={setIsRotating}
      setCurrentStage={setCurrentStage}
      
    />

    <Plane
      isRotating={isRotating}
      scale={PlaneScale}
      position={PlanePosition}
      rotation={[0, 20, 0]}

    />
</Canvas>
}