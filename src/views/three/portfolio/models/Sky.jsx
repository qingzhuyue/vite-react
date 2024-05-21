/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-21 14:17:25
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-21 14:17:26
 * @FilePath: /vite-react/src/views/three/product/models/Sky.jsx
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