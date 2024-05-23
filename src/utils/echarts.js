/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-23 14:45:37
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-23 14:47:29
 * @FilePath: /react/src/utils/echarts.js
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import * as echarts from "echarts/core";
import {
  BarChart,
  LineChart,
} from "echarts/charts";
import {
  LegendComponent,
  TitleComponent,
  ToolboxComponent,
  GridComponent,
  //   数据组件
  DatasetComponent,
  //   内置的数据转换器:filter,sort
  TransformComponent,
  TooltipComponent,
} from "echarts/components";
import { LabelLayout, UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  ToolboxComponent,
]);
export default echarts;
