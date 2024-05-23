/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-23 15:32:31
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-23 15:32:33
 * @FilePath: /react/src/views/three/portfolio/models/Sky.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { useGLTF } from '@react-three/drei'
import {useRef} from 'react'
import { useFrame } from '@react-three/fiber'

import skyScene from '@/assets/three/3d/sky.glb'

const Sky = ({isRotating}) => {
    const sky = useGLTF(skyScene);
    const skyRef = useRef();

    useFrame((_,delta) => {
      if(isRotating){
        skyRef.current.rotation.y += 0.15 * delta
      }
    })

  return (
    <mesh ref= {skyRef}>
        <primitive object = {sky.scene}/>
    </mesh>
  )
}

export default Sky