/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-22 16:51:50
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-22 16:51:51
 * @FilePath: /react/src/views/layout/Header.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { Layout, Space } from "antd";
import { connect } from "react-redux";
import CollapsesIcon from "./CollapsesIcon";
import Theme from "./Theme";
import FullScreen from "./Fullscreen";
import AvatarIcon from "./AvatarIcon";
import "./header.modules.scss";

function AdHeader(props) {
  const {userName} = props;
  return (
    <Layout.Header>
      <div className="header-lf">
        {/* <CollapsesIcon /> */}
      </div>
      <div className="header-ri">
        <Space>
          <FullScreen />
          <Theme />
          <span className="username">{userName}</span>
          <AvatarIcon />
        </Space>
      </div>
    </Layout.Header>
  );
}
const mapStateToProps = (state) => {
  return state.global.userInfo;
};
export default connect(mapStateToProps)(AdHeader);
