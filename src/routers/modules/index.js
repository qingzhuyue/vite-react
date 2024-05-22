/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-22 17:48:33
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-22 17:53:51
 * @FilePath: /react/src/routers/modules/index.js
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import errorRouter from "./error";
import homeRouter from "./home";
import threeRouter from "./three";
import echartRouter from "./echarts";

export default [
  ...errorRouter,
  ...homeRouter,
  ...threeRouter,
  ...echartRouter
]