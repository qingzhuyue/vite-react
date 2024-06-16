/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-06-16 21:42:14
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-06-16 21:54:03
 * @FilePath: /vite-react/src/views/three/spiral/index.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { useEffect } from "react";
import * as THREE from 'three'

export default function Spiral() {
  useEffect(() => {
    init();
  })
  const init = () => {
    // 初始化场景、相机和渲染器  
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth/2, window.innerHeight/2);
    document.body.appendChild(renderer.domElement);

    // 创建颗粒的几何形状和材质  
    const geometry = new THREE.SphereGeometry(0.1, 32, 32); // 半径为0.1的球体  
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // 绿色材质  

    // 创建并添加多个颗粒到场景  
    for (let i = 0; i < 100; i++) {
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10); // 随机位置  
      scene.add(sphere);
    }

    // 渲染循环  
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  }

  return <div id="threeContainer" />
}