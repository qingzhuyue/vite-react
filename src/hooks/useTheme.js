/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-22 16:45:09
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-22 16:45:10
 * @FilePath: /react/src/hooks/useTheme.js
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
const useTheme = (weakOrGray) => {
  // const { weakOrGray } = themeConfig;
  const initTheme = () => {
    // 灰色、弱色切换
    const body = document.documentElement;
    if (!weakOrGray) {
      body.setAttribute("style", "");
    }
    if (weakOrGray === "weak") {
      body.setAttribute("style", "filter:invert(80%)");
    }
    if (weakOrGray === "gray") {
      body.setAttribute("style", "filter:grayscale(1)");
    }
  };
  initTheme();
  return {
    initTheme,
  };
};

export default useTheme;