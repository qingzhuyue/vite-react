/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-22 16:38:56
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-10-01 22:19:44
 * @FilePath: /free/src/routers/modules/home.js
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { lazy } from "react";
import lazyLoad from "../utils/utlis";
const homeRouter = [
  {
    path: "/",
    element: lazyLoad(lazy(() => import("../../views/home"))),
  },
  {
    path: "/home",
    element: lazyLoad(lazy(() => import("@/views/home"))),
  },
  {
    path: "/users/list",
    element: lazyLoad(lazy(() => import("@/views/user"))),
  },
];

export default homeRouter;
