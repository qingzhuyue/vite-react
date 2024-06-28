/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-06-16 21:42:14
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-06-28 22:54:18
 * @FilePath: /vite-react/src/views/three/spiral/index.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { useEffect ,useRef} from "react";
import * as THREE from 'three'

export default function Spiral() {
  const sceneRef = useRef(null);
  let frameId;
  useEffect(() => {
    init();
    return ()=>{
      cancelAnimationFrame(frameId);
    }
  })
  const init = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    sceneRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const rectangle = new THREE.Mesh(geometry, material);
    scene.add(rectangle);

    camera.position.z = 5;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      rectangle.rotation.x += 0.01;
      rectangle.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }

  return <div id="threeContainer"  ref={sceneRef}/>
}