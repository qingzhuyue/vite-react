/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-23 14:33:14
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-23 14:33:16
 * @FilePath: /react/src/views/dataScreen/components/AgeRatioChart.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { useEcharts } from "@/hooks/useEcharts";

function AgeRatioChart() {
  const data = [
    {
      value: 120,
      name: "首饰挂饰",
    },
    {
        value:200,
        name:'文具用品',
    },
    {
        value:500,
        name:'家具',
    }, {
        value:260,
        name:'办公用品',
    },
    {
        value:100,
        name:'书籍',
    }
  ];
  const colors = [
    "#F6C95C",
    "#EF7D33",
    "#1F9393",
    "#184EA1",
    "#81C8EF",
    "#9270CA",
  ];
  const option = {
    color: colors,
    tooltip: {
      show: true,
      trigger: "item",
      formatter: "{b} <br/>占比：{d}%",
    },
    legend: {
      orient: "vertical",
      right: "20px",
      top: "15px",
      itemGap: 15,
      itemWidth: 14,
      formatter: function (name) {
        let text = "";
        data.forEach((val) => {
          if (val.name === name) {
            text = " " + name + "　 " + val.value;
          }
        });
        return text;
      },
      textStyle: {
        color: "#fff",
      },
    },
    grid: {
        top: "bottom",
        left: 10,
        bottom: 10
    },
    series: [
        {
            zlevel: 1,
            name: "种类比例",
            type: "pie",
            selectedMode: "single",
            radius: [50, 90],
            center: ["35%", "50%"],
            startAngle: 60,
            label: {
                position: "inside",
                show: true,
                color: "#fff",
                formatter: function (params) {
                    return params.data.value;
                },
                rich: {
                    b: {
                        fontSize: 16,
                        lineHeight: 30,
                        color: "#fff"
                    }
                }
            },
            itemStyle: {
                shadowColor: "rgba(0, 0, 0, 0.2)",
                shadowBlur: 10
            },
            data: data.map((val, index) => {
                return {
                    value: val.value,
                    name: val.name,
                    itemStyle: {
                        borderWidth: 10,
                        shadowBlur: 20,
                        borderColor: colors[index],
                        borderRadius: 10
                    }
                };
            })
        },
        {
            name: "",
            type: "pie",
            selectedMode: "single",
            radius: [50, 90],
            center: ["35%", "50%"],
            startAngle: 60,
            data: [
                {
                    value: 1000,
                    name: "",
                    label: {
                        show: true,
                        formatter: "{a|种类总数}",
                        rich: {
                            a: {
                                align: "center",
                                color: "rgb(98,137,169)",
                                fontSize: 14
                            }
                        },
                        position: "center"
                    }
                }
            ]
        }
    ]
  };
  const [echartsRef] = useEcharts(option, data);
  return <div ref={echartsRef} style={{ width: "100%", height: "100%" }}></div>;
}

export default AgeRatioChart;