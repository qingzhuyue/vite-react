/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-24 14:52:44
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-24 14:52:46
 * @FilePath: /react/src/components/Error/403.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const NotAuth = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate(-1);
  };
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Button type="primary" onClick={goHome}>
          Back Home
        </Button>
      }
    />
  );
};

export default NotAuth;
