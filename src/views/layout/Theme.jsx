/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-22 16:50:32
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-22 17:01:08
 * @FilePath: /react/src/views/layout/Theme.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { useState, Fragment, useMemo, useEffect } from "react";
import {
  Drawer,
  Divider,
  Switch,
  Popover,
} from "antd";
import { connect } from "react-redux";
import {
  setDark,
  setWeakOrGray,
  setFooter,
} from "@/store/redux/global/action";
import { changeCollapse } from "@/store/redux/menu/action";
import AdIcon from "@/components/AdIcon";
import { SketchPicker } from "react-color";


const ColorPicker = ({ value, onChange }) => {
  const switchStyle = {
    padding: 4,
    background: "#fff",
    borderRadius: 2,
    border: "1px solid #dedede",
    display: "inline-block",
    cursor: "pointer",
  };

  const colorStyle = {
    width: 36,
    height: 14,
    borderRadius: 2,
    background: value || "",
  };

  return (
    <Popover
      trigger="click"
      placement="bottomLeft"
      overlayInnerStyle={{ padding: 0 }}
      content={
        <SketchPicker
          color={value}
          onChange={(color) => {
            console.log("color", color);
            return onChange?.(color.hex);
          }}
        />
      }
    >
      <div style={switchStyle}>
        <div style={colorStyle} />
      </div>
    </Popover>
  );
};
const Theme = (props) => {
  const {
    isDark,
    setDark,
    isCollapse,
    changeCollapse,
    weakOrGray,
    setWeakOrGray,
    footer,
    setFooter,
  } = props;
  
  const [visible, setVisible] = useState(false);
 
  return (
    <Fragment>
      <AdIcon
        type="icon-pifu"
        className="icon-style"
        onClick={() => setVisible(true)}
      />
      <Drawer
        title="设置"
        closable={false}
        onClose={() => setVisible(false)}
        open={visible}
        width={320}
      >
        {/* 全局主题 */}
        <Divider className="divider">全局主题</Divider>
        <div className="theme-item">
          <span>灰色模式</span>
          <Switch
            checked={weakOrGray === "gray"}
            onChange={(e) => setWeakOrGray(e, "gray")}
          />
        </div>
        <div className="theme-item">
          <span>色弱模式</span>
          <Switch
            checked={weakOrGray === "weak"}
            onChange={(e) => setWeakOrGray(e, "weak")}
          />
        </div>
        <Divider className="divider">界面设置</Divider>
        <div className="theme-item">
          <span>折叠菜单</span>
          <Switch checked={isCollapse} onChange={(e) => changeCollapse(e)} />
        </div>
        <div className="theme-item">
          <span>页脚</span>
          <Switch checked={footer} onChange={(e) => setFooter(e)} />
        </div>
      </Drawer>
    </Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    ...state.global,
    isCollapse: state.menus.isCollapse,
  };
};
const mapDispatchToProps = {
  setDark,
  changeCollapse,
  setWeakOrGray,
  setFooter,
};
export default connect(mapStateToProps, mapDispatchToProps)(Theme);
