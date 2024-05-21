/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-21 18:40:25
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-21 18:40:26
 * @FilePath: /vite-react/src/views/three/portfolio/models/Plane.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { useRef, useEffect } from 'react'
import planeScene from '@/assets/three/3d/plane.glb';
import { useAnimations, useGLTF } from '@react-three/drei';



const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions['Take 001'].play();
    } else {
      actions['Take 001'].stop();
    }
  }, [actions, isRotating])

  return (
    <mesh {...props} ref={ref}>

      <primitive object={scene} />

    </mesh>
  )
}
export default Plane