/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-14 21:53:15
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-21 18:53:13
 * @FilePath: /vite-react/src/routers/modules/three.ts
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import React from "react";
import { RouteObject } from "@/routers/interface";
import lazyLoad from "../utils/utlis";


const threeRouter: Array<RouteObject> = [
  {
    path: "/portfolio",
    element: lazyLoad(
      React.lazy(() => import("@/views/three/portfolio"))
    ),
  },
];

export default threeRouter;