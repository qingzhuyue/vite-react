/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-24 15:11:18
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-24 17:31:24
 * @FilePath: /react/src/views/three/artLab/index.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { useEffect } from "react";
import { CelestialBody } from "../../../components/CelestialBody/CelestialBody";
import "./index.scss"
function ArtLab() {
  useEffect(() => {
    const canvas = document.getElementById('web3d-container')
    const cb = new CelestialBody(canvas)
    cb.animate()
  }, [])
  return <div>
     <header>标题</header>
    <canvas id="web3d-container"></canvas>
  </div>
}

export default ArtLab