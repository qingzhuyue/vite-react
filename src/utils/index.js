/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-23 14:31:38
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-23 14:48:28
 * @FilePath: /react/src/utils/index.js
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
export function createArray(start, end, length) {
  let arr = [];
  for (let index = 0; index < length; index++) {
    arr.push(Math.floor(Math.random() * (end - start) + start));
  }
  return arr;
}
export function randomNum(min, max) {
  let num = Math.floor(Math.random() * (min - max) + max);
  return num;
}
