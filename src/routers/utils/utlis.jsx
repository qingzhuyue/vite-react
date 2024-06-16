/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-22 16:36:26
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-06-16 21:38:54
 * @FilePath: /vite-react/src/routers/utils/utlis.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import React, { Suspense } from "react";

/**
 * @description 路由懒加载
 * @param {Element} Comp 需要访问的组件
 * @returns element
 */
const lazyLoad = (Comp) => {
  return (
    <Suspense
      fallback={
        <div className="react-container">
          {/* <div className="progress"></div> */}
          <div className="box">
            <div className="number">Loading...</div>
            <div className="contrast">
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              {/* <div className="bubble-home"></div> */}
              <div className="circle"></div>
            </div>
          </div>
        </div>
      }
    >
      <Comp />
    </Suspense>
  );
};

export default lazyLoad;
