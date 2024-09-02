/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-09-02 16:42:32
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-09-02 16:59:00
 * @FilePath: /vite-react/src/views/three/particle/index.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { useEffect, useRef } from "react";
import * as THREE from 'three';
export default function Particle() {
  const sceneRef = useRef(null);
  let frameId;
  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(frameId);
    }
  })
  const init = () => {
    const scene = new THREE.Scene();  
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);  
    const renderer = new THREE.WebGLRenderer(); 
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    const particlesCount = 100;
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesPositions = new Float32Array(particlesCount * 3);

    camera.position.z = 5;

    // 初始化粒子位置，这里简单地将它们随机分布在一定空间内  
    for (let i = 0; i < particlesCount; i++) {
      particlesPositions[i * 3] = Math.random() * 2 - 1; // x坐标，范围-1到1  
      particlesPositions[i * 3 + 1] = Math.random() * 2 - 1; // y坐标，范围-1到1  
      particlesPositions[i * 3 + 2] = Math.random() * 2 - 1; // z坐标，范围-1到1  
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlesPositions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x00ff00,
      size: 0.1,
      sizeAttenuation: true, // 粒子大小是否随距离衰减  
      blending: THREE.AdditiveBlending, // 叠加混合，使粒子看起来更亮  
      transparent: true
    });

    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      for (let i = 0; i < particlesCount; i++) {
        particlesPositions[i * 3] += (Math.random() - 0.5) * 0.01;
        particlesPositions[i * 3 + 1] += (Math.random() - 0.5) * 0.01;
        particlesPositions[i * 3 + 2] += (Math.random() - 0.5) * 0.01;

        // 注意：这里需要更新BufferAttribute的数据  
        particlesGeometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();
  }

  return <div id="threeContainer" ref={sceneRef} />
}