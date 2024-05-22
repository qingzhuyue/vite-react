/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-22 16:40:30
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-22 16:40:43
 * @FilePath: /react/src/hooks/index.js
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import moment from "moment";
import { useEffect, useState, useRef } from "react";
export const useTime = () => {
  const timer = useRef(null);
  const [time, setTime] = useState(moment().format("YYYY年MM月DD日 HH:mm:ss"));
  useEffect(() => {
    timer.current = setInterval(() => {
      setTime(moment().format("YYYY年MM月DD日 HH:mm:ss"));
    }, 1000);

    return () => {
      clearInterval(timer.current);
    };
  }, [time]);

  return { time };
};
