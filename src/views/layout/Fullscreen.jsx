/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-22 16:49:32
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-22 17:03:09
 * @FilePath: /react/src/views/layout/Fullscreen.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { useState, useEffect } from "react";
import screenfull from "screenfull";
import { message } from "antd";
import { FullscreenOutlined, FullscreenExitOutlined } from "@ant-design/icons";

const Fullscreen = () => {
  const [fullScreen, setFullScreen] = useState(
    screenfull.isFullscreen
  );
  useEffect(() => {
    screenfull.on("change", () => {
      if (screenfull.isFullscreen) {
        setFullScreen(true);
      } else {
        setFullScreen(false);
      }

      return () => screenfull.off("change", () => {});
    });
  }, []);

  const handlerFullScreen = () => {
    if (!screenfull.isEnabled) message.warning("您的浏览器不支持全屏");
    screenfull.toggle();
  };
  return fullScreen ? (
    <FullscreenExitOutlined
      className="icon-style"
      onClick={handlerFullScreen}
    />
  ) : (
    <FullscreenOutlined onClick={handlerFullScreen} className="icon-style" />
  );
};

export default Fullscreen;
