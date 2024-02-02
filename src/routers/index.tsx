/*
 * @Author: duxinyues yongyuan253015@gmail.com
 * @Date: 2023-03-05 23:27:49
 * @LastEditors: weiyy26445 weiyy26445@yunrong.cn
 * @LastEditTime: 2023-11-30 09:58:02
 * @FilePath: /vite-react/src/routers/index.tsx
 * @Description:
 * Copyright (c) 2023 by ${duxinyues} email: ${yongyuan253015@gmail.com}, All Rights Reserved.
 */
import { lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import lazyLoad from "./utils/utlis";

// * 导入所有router
const metaRouters: any = import.meta.globEager("./modules/*.ts");

// * 处理路由
export const routerArray: any = [];
Object.keys(metaRouters).forEach((item: any) => {
  Object.keys(metaRouters[item]).forEach((key: any) => {
    routerArray.push(...metaRouters[item][key]);
  });
});
export const rootRouter = [
  {
    path: "/",
    // element: lazyLoad(lazy(() => import("@/views/layout"))),
    element: lazyLoad(lazy(() => import("@/views/layout"))),
    children: [...routerArray],
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
    path: "*",
    element: lazyLoad(lazy(() => import("@/components/NoMatch"))),
  },
];

const Router = () => {
  const routes = useRoutes(rootRouter);
  return routes;
};

export default Router;
