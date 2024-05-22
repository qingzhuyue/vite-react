/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-04-26 20:06:33
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-04-26 22:15:45
 * @FilePath: /vite-react/src/views/home/Child.tsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import React from "react";

// class Child extends React.Component{

//   render(): React.ReactNode {
//     console.log("子组件发生render了")
//       return <>这是子组件</>
//   }
// }
function Child(){
  console.log("子组件发生render了")
  return <>这是子组件</>
};
function arePropsEqual(prevProps:any, nextProps:any) {
  // your code
  return false;
 }

export default React.memo(Child,arePropsEqual)