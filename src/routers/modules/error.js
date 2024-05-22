/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-22 16:38:32
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-22 17:32:05
 * @FilePath: /react/src/routers/modules/error.js
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import React from "react";
import lazyLoad from "../utils/utlis";

// 错误页面模块
const errorRouter = [
  // {
  //   path: "/403",
  //   element: lazyLoad(
  //     React.lazy(() => import("@/components/Error/403"))
  //   ),
  //   meta: {
  //     requiresAuth: false,
  //     title: "403页面",
  //     key: "403",
  //   },
  // },
  // {
  //   path: "/404",
  //   element: lazyLoad(
  //     React.lazy(() => import("@/components/Error/404"))
  //   ),
  //   meta: {
  //     requiresAuth: false,
  //     title: "404页面",
  //     key: "404",
  //   },
  // },
  // {
  //   path: "/500",
  //   element: lazyLoad(
  //     React.lazy(() => import("@/components/Error/500"))
  //   ),
  //   meta: {
  //     requiresAuth: false,
  //     title: "500页面",
  //     key: "500",
  //   },
  // },
  {
    path: "*",
    element: lazyLoad(React.lazy(() => import("@/pages/NoMatch"))),
  }
];

export default errorRouter;
