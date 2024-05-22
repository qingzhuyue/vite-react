/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-22 16:41:41
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-22 16:41:43
 * @FilePath: /react/src/hooks/useEcharts.js
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import {  useEffect, useRef } from "react";
import * as echarts from "echarts";
export const useEcharts = (options, data) => {
  const charts = useRef();
  const echartsRef = useRef(null);

  const echartsResize = () => {
    echartsRef && charts?.current?.resize();
  };
  useEffect(() => {
    if (data?.length !== 0) {
      charts?.current?.setOption(options);
    }
  }, [data]);
  useEffect(() => {
    if (echartsRef?.current) {
      charts.current = echarts.init(echartsRef.current);
    }
    charts?.current?.setOption(options);
    window.addEventListener("resize", echartsResize, false);

    return () => {
      window.removeEventListener("resize", echartsResize);
      charts?.current?.dispose();
    };
  }, []);
  return [echartsRef];
};
