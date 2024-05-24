/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-22 16:37:44
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-24 14:48:43
 * @FilePath: /react/src/routers/modules/echarts.js
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { lazy } from "react";
import lazyLoad from "../utils/utlis";

const echartRouter= [
  {
    path: "/echarts/waterChart",
    element: lazyLoad(lazy(() => import("@/views/echarts/WaterChart"))),
  },
  {
    path: "/echarts/barChart",
    element: lazyLoad(lazy(() => import("@/views/echarts/BarChart"))),
  },
  {
    path: "/echarts/curveChart",
    element: lazyLoad(lazy(() => import("@/views/echarts/CurveCharts"))),
  },
  {
    path: "/echarts/SmoothChart",
    element: lazyLoad(lazy(() => import("@/views/echarts/SmoothChart"))),
  },
];

export default echartRouter;
