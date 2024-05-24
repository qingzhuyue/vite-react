/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-22 16:23:32
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-24 15:11:49
 * @FilePath: /react/src/store/redux/menu/menu.js
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import * as types from "@/store/types";
const menuState = [
  {
    title: "首页",
    key: "home",
    router: "/",
  },
  {
    title: "可视化",
    key: "dataScreen",
    router: "/dataScreen",
  },
  {
    title: "Three",
    key: "threejs",
    router: null,
    children: [
      {
        title: "3D空间",
        key: "3D",
        router: "/three/three3D",
      },
      {
        title: "模型组合",
        key: "portfolio",
        router: "/three/portfolio",
      },
      {
        title: "ArtLab",
        key: "artLab",
        router: "/artLab",
      },
    ],
  },
  {
    title: "Echarts",
    key: "Echarts",
    router: null,
    children: [
      {
        title: "柱形图",
        key: "barChart",
        router: "/echarts/barChart",
      },
      {
        title: "曲线图",
        key: "curveChart",
        router: "/echarts/curveChart",
      },
      {
        title: "曲线面积图",
        key: "smoothChart",
        router: "/echarts/smoothChart",
      },
    ],
  },
  {
    title: "错误页面",
    key: "error",
    router: null,
    children: [
      {
        title: "403",
        key: "403",
        router: "/error/403",
      },
      {
        title: "404",
        key: "404",
        router: "/error/404",
      },
      {
        title: "500",
        key: "500",
        router: "/error/500",
      },
    ],
  },
];
export default function menuReducer(
  state = {
    menuState,
    isCollapse: false,
  },
  action
) {
  switch (action.type) {
    case types.MENU_COLLAPSES:
      return {
        ...state,
        isCollapse: action.payload,
      };
    default:
      return { ...state };
  }
}