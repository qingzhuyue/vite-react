/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-22 16:48:12
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-22 16:48:13
 * @FilePath: /react/src/views/layout/AvatarIcon.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { Avatar, Modal, Dropdown, message } from "antd";
import { useNavigate } from "react-router-dom";

const AvatarIcon = () => {
  const navigate = useNavigate();
  const logout = () => {
    Modal.confirm({
      title: "温馨提示！",
      content: "是否确认退出登录？",
      okText: "确定",
      cancelText: "取消",
      onOk: () => {
        navigate("/login");
        localStorage.clear();
      },
    });
  };
  const changeAuth = ()=>{
    navigate("/changeAuth");
  }
  const items = [
    {
      key: "1",
      label: <span className="dropdown-item">首页</span>,
      onClick: () => navigate("/"),
    },
    {
      key: "2",
      label: <span className="dropdown-item">权限配置</span>,
      onClick: changeAuth,
    },
    {
      key: "3",
      label: <span className="dropdown-item">退出登录</span>,
      onClick: logout,
    },
  ];

  return (
    <>
      <Dropdown menu={{ items }}>
        <Avatar
          size={"large"}
        />
      </Dropdown>
    </>
  );
};

export default AvatarIcon;
