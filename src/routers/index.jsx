/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-22 16:35:34
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-06-16 21:52:56
 * @FilePath: /vite-react/src/routers/index.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import lazyLoad from "./utils/utlis";
import all from "./modules"


export const rootRouter = [
  {
    path: "/",

    element: lazyLoad(lazy(() => import("@/views/layout"))),
    children: [...all],
  },
  {
    path: "/login",
    element: lazyLoad(lazy(() => import("@/views/login"))),

    meta: {
      requiresAuth: false,
      title: "登录页",
      key: "login",
    },
  },
  {
    path: "/dataScreen",
    element: lazyLoad(lazy(() => import("@/views/dataScreen"))),
  },
  {
    path: "/three/three3D",
    element: lazyLoad(
     lazy(() => import("@/views/three/space"))
    ),
  },
  {
    path:"/artLab",
    element: lazyLoad(
      lazy(() => import("@/views/three/artLab"))
     ),
  },
  {
    path: "/three/spiral",
    element: lazyLoad(
      lazy(() => import("@/views/three/spiral"))
    ),
  },
  {
    path: "*",
    element: lazyLoad(lazy(() => import("@/pages/NoMatch"))),
  },
];

const Router = () => {
  const routes = useRoutes(rootRouter);
  return routes;
};

export default Router;
