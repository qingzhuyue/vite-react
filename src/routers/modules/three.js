/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-22 16:39:35
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-26 11:33:33
 * @FilePath: /react/src/routers/modules/three.js
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import React from "react";
import lazyLoad from "../utils/utlis";


const threeRouter = [
  {
    path: "/three/portfolio",
    element: lazyLoad(
      React.lazy(() => import("@/views/three/portfolio"))
    ),
  },
];

export default threeRouter;