/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-20 20:47:22
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-21 13:01:45
 * @FilePath: /vite-react/src/components/Canvas/index.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { useRef, useEffect } from 'react';

const CanvasComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    // 初始绘图
    draw(context);

    // 监听窗口大小变化，并重新绘制
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw(context);
    };

    window.addEventListener('resize', handleResize);

    // 清除事件监听器
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const draw = (context) => {
    // 在这里进行绘图操作
    context.fillStyle = 'blue';
    context.fillRect(10, 10, 100, 100);
  };
  return <canvas ref={canvasRef} width={500} height={500} />;
};

export default CanvasComponent;