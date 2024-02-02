/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-01-31 14:33:21
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-01-31 15:29:22
 * @FilePath: /vite-react/src/views/home/refs.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import React from "react";

class RefsComponent extends React.Component {

  showResult(){
    console .log(this)
  }
  
  render() {
    return (
      <div>
        <input type="text" ref="username" />
        < button onClick={()=>this.showResult()}>展示结果</ button>
      </div>
    );
  }
}

export default RefsComponent;