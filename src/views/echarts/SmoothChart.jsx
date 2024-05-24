/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-24 14:49:55
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-24 15:05:43
 * @FilePath: /react/src/views/echarts/SmoothChart.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { useRef, useEffect } from "react";
import * as echarts from "echarts";
import { createArray } from "@/utils";
export default function SmoothChart() {
  const data = useRef(createArray(10, 500, 8));
  useEffect(() => {
    const myChart = echarts.init(
      document.getElementById("main")
    );
    const updateData = () => {
      data.current = createArray(10, 500, 8);
    };
    // 绘制图表
    const timer = setInterval(() => {
      updateData();
      myChart.setOption({
        tooltip: {
          show: true,
        },
        grid: {
          left: "0%",
          right: "0%",
          bottom: "0%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: [
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
          ],
        //   axisLine: { show: false },
        //   axisLabel: {
        //     formatter: () => "",
        //   },
        //   splitTitle: { show: false },
        //   axisTick: { show: false },
        },
        yAxis: {
        //   show: false,
          type: "value",
        //   axisLine: { show: false },
        //   axisLabel: {
        //     formatter: () => "",
        //   },
        //   splitTitle: { show: false },
        //   axisTick: { show: false },
        },
        series: {
          data: data.current,
          name: "产量",
          type: "line",
          itemStyle: {
            color: "red",
          },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "red" },
                { offset: 1, color: "green" },
              ],
            },
          },
          smooth: true,
          showSymbols: true,
          lineStyle: { width: 0 },
        },
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div
      id="main"
      className="card content-box"
      style={{ width: "98%", height: "90%" }}
    ></div>
  );
}
