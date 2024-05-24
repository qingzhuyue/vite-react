/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-24 14:49:30
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-24 14:49:31
 * @FilePath: /react/src/views/echarts/CurveCharts.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { useEcharts } from "@/hooks/useEcharts";
import { createArray } from "@/utils";

function CurveCharts() {
  const option = {
    tooltip: {
      show: true,
    },
    xAxis: {
      type: "category",
      data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: createArray(20, 1903, 7),
        type: "line",
        smooth: true,
      },
      {
        data: createArray(20, 1903, 7),
        type: "line",
        smooth: true,
      },
    ],
  };
  const [echartsRef] = useEcharts(option, createArray(20, 1903, 7));
  return (
    <div
      ref={echartsRef}
      className="card content-box"
      style={{ width: "98%", height: "90%" }}
    />
  );
}

export default CurveCharts;
