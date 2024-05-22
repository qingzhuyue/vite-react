/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-22 16:48:35
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-22 16:48:36
 * @FilePath: /react/src/views/layout/CollapsesIcon.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { changeCollapse } from "@/store/redux/menu/action";

const CollapsesIcon = (props) => {
  const { isCollapses, changeCollapse } = props;
  return (
    <div
      className="collapsed"
      onClick={() => {
        changeCollapse(!isCollapses)
      }}
    >
      {isCollapses ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { isCollapses: state.menus.isCollapse };
};
const mapDispatchToProps = { changeCollapse };
export default connect(mapStateToProps, mapDispatchToProps)(CollapsesIcon);
