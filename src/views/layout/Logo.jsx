/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-22 16:50:21
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-10-02 19:24:37
 * @FilePath: /free/src/views/layout/Logo.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import logo from "@/assets/vite.svg";
import { connect } from "react-redux";

const Logo = (props) => {
  const { isCollapse } = props;
  return (
    <div className="logo-box">
      <img src={logo} alt="logo" />
      {!isCollapse ? <h3>玩鸿蒙后台</h3> : null}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isCollapse: state.menus.isCollapse,
  };
};
export default connect(mapStateToProps)(Logo);
