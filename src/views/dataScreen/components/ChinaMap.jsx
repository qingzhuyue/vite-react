/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-23 14:36:47
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-23 15:45:37
 * @FilePath: /react/src/views/dataScreen/components/ChinaMap.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { useEcharts } from "@/hooks/useEcharts";
import echarts from "@/utils/echarts";
import chinaJson from "./china.json";
import "./ChinaMap.scss";

const ChinaMap = () => {
  echarts.registerMap("china", chinaJson);
  let planePath =
    "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
  let data = [
    {
      fromName: "贵阳",
      toName: "上海",
      coords: [
        [106.42, 26.35],
        [121.4648, 31.2891],
      ],
    },
    {
      fromName: "上海",
      toName: "贵阳",
      coords: [
        [121.4648, 31.2891],
        [106.42, 26.35],
      ],
    },
    {
      fromName: "贵阳",
      toName: "广州",
      coords: [
        [106.42, 26.35],
        [113.5107, 23.2196],
      ],
    },
    {
      fromName: "广州",
      toName: "北京",
      coords: [
        [113.5107, 23.2196],
        [116.4551, 40.2539],
      ],
    },
    {
      fromName: "北京",
      toName: "成都",
      coords: [
        [116.4551, 40.2539],
        [103.9526, 30.7617],
      ],
    },
    {
      fromName: "成都",
      toName: "贵阳",
      coords: [
        [103.9526, 30.7617],
        [106.42, 26.35],
      ],
    },
    {
      fromName: "贵阳",
      toName: "哈尔滨",
      coords: [
        [106.42, 26.35],
        [126.24, 46.4],
      ],
    },
    {
      fromName: "成都",
      toName: "新疆维吾尔自治区",
      coords: [
        [103.9526, 30.7617],
        [85.294711, 41.371801],
      ],
    },
    {
      fromName: " 新疆维吾尔自治区",
      toName: "成都",
      coords: [
        [85.294711, 41.371801],
        [103.9526, 30.7617],
      ],
    },
  ];
  const option = {
    tooltip: {
      show: true,
      trigger: "axis",
      formatter: function (params) {
        return `${params.name}: ${params.value || "-"}`;
      },
    },
    grid: {
      left: "1",
      right: "20px",
      top: "10px",
      bottom: "10px",
    },
    geo: {
      map: "china",
      zoom: 1.5,
      center: [102.848234, 32.82333],
      scaleLimit: {
        min: 0.8,
      },
      label: {
        color: "#fff",
        show: true,
      },
      emphasis: {
        label: {
          color: "#fff",
          show: true,
        },
        itemStyle: {
          areaColor: {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#073684", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#2B91B7", // 100% 处的颜色
              },
            ],
          },
        },
      },
      roam: false,
      itemStyle: {
        areaColor: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#073684", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#061E3D", // 100% 处的颜色
            },
          ],
        },
        borderColor: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [
            {
              offset: 0,
              color: "#00F6FF",
            },
            {
              offset: 1,
              color: "#87ADCB",
            },
          ],
          false
        ),
        shadowColor: "rgba(10,76,139,1)",
        shadowOffsetY: 0,
        shadowBlur: 60,
        borderWidth: 1,
      },
      tooltip: {
        show: false,
      },
    },
    // 要显示的散点数据
    series: [
      {
        name: "",
        type: "lines",
        coordinateSystem: "geo",
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: "blue", //arrow箭头的颜色
          symbolSize: 3,
        },
        lineStyle: {
          color: "#fff",
          width: 0,
          curveness: 0.2,
        },
        data,
      },
      {
        name: "",
        type: "lines",
        coordinateSystem: "geo",
        zlevel: 2,
        symbol: ["none", "arrow"],
        symbolSize: 10,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15,
        },
        lineStyle: {
          color: "#fff",
          width: 1,
          opacity: 0.6,
          curveness: 0.2,
        },
        data,
      },
    ],
  };
  const [echartsRef] = useEcharts(option, data);
  return (
    <div className="content-box">
      <div className="map-ball"></div>
      <div ref={echartsRef} className="echarts" style={{ width: "100%", height: "600px" }}></div>
    </div>
  );
};

export default ChinaMap;
