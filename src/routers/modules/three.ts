/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-14 21:53:15
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-14 21:53:16
 * @FilePath: /vite-react/src/routers/modules/three.ts
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import React from "react";
import { RouteObject } from "@/routers/interface";
import lazyLoad from "../utils/utlis";

// 错误页面模块
const errorRouter: Array<RouteObject> = [
  {
    path: "/changeAuth",
    element: lazyLoad(
      React.lazy(() => import("@/views/auth"))
    ),
    meta: {
      requiresAuth: true,
      title: "权限配置",
      key: "/changeAuth",
    },
  },
];

export default errorRouter;