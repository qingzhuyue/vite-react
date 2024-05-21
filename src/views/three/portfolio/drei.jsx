/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-21 18:47:05
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-21 18:47:06
 * @FilePath: /vite-react/src/views/three/portfolio/drei.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Box, useCursor } from '@react-three/drei';

function BoxRotation() {
  const ref = React.useRef();
  const [rotation, setRotation] = React.useState(0);

  useCursor(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
    setRotation(ref.current.rotation.x);
  });
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Box ref={ref} args={[1, 1, 1]} position={[0, 0, 0]} rotation={[0, 5, 2]}>
        <meshStandardMaterial attach="material" color="pink" />
      </Box>
    </Canvas>
  );
}

export default BoxRotation;