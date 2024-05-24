/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-24 14:53:56
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-24 14:54:45
 * @FilePath: /react/src/components/Error/Error500.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const NotAuth = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/home");
  };
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={
        <Button type="primary" onClick={goHome}>
          Back Home
        </Button>
      }
    />
  );
};

export default NotAuth;
