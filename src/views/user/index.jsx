/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-10-01 22:15:51
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-10-01 22:28:07
 * @FilePath: /free/src/views/user/index.jsx
 * @Description: 用户管理
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { useState, useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import logo from "@/assets/vite.svg";
import loginLeft from "@/assets/login_left.png";
import {
  UserOutlined,
  LockOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function UserList() {

  useEffect(() => {
    console.log("加载完成的")
    fetch(`/api/usersList?pageNum=${1}&pageSize=${10}`, {
      method: "get",
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch((error) => console.error('Error:', error));
  }, [])
  return <div>
    用户列表
  </div>
}

export default UserList