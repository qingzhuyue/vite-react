/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-22 16:57:12
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-22 16:57:13
 * @FilePath: /react/src/pages/NoMatch.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { Result, Button } from 'antd';
import { Link } from "react-router-dom"
function NoMatch() {
  return (
    <Result
      status="warning"
      title="Nothing to see here!"
      extra={
        <Button type="primary" key="console">
          <Link to="/">返回</Link>
        </Button>
      }
    />);
}

export default NoMatch