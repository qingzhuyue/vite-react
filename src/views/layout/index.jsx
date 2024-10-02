/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-22 16:47:47
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-10-02 19:23:16
 * @FilePath: /free/src/views/layout/index.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import AdHeader from "./Header";
import Logo from "./Logo";
import "./index.scss";
import { connect } from "react-redux";

const { Content, Footer, Sider } = Layout;

function Container(props) {
  const { footer, isCollapse, token } = props;
  const navigate = useNavigate();
  const onChangeRouter = (router) => {
    navigate(router);
  };

  const items = props.menus.map(
    (item, index) => {
      if (item.children) {
        return {
          key: item.key,
          label: item.title,
          children: item.children.map((items, key) => {
            return {
              key: items.router,
              label: items.title,
              kaypath: items.router,
            };
          }),
        };
      }
      return {
        key: item.router,
        label: item.title,
        kaypath: item.router,
      };
    }
  );
  useEffect(() => {
    // 未登录。跳转到登录页面
    if (!token) {
      navigate("/login");
    }
  }, []);
  return (
    <Layout className="layout">
      <Layout>
        <Sider className="sider" collapsed={isCollapse} theme="dark">
          <Logo />
          <Menu
            mode="inline"
            defaultSelectedKeys={["0"]}
            defaultOpenKeys={["0"]}
            style={{ height: "calc(100% - 60px)", borderRight: 0 }}
            items={items}
            onClick={({ key }) => onChangeRouter(key)}
          />
        </Sider>
        <Content className="content">
          <AdHeader />
          <div
            style={{
              margin: "10px",
              height: `calc(100% - ${footer ? "10" : "30"}px)`,
              overflowY: "auto",
            }}
          >
            <Outlet />
          </div>
          {footer && (
            <Footer
              style={{
                textAlign: "center",
                background: "#fff",
                marginTop: "10px",
                padding: "0",
                height: "30px",
                lineHeight: "30px",
              }}
            >
              后台管理 {new Date().getFullYear()}
            </Footer>
          )}
        </Content>
      </Layout>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  const { menuState, isCollapse } = state.menus;
  const { footer, token } = state.global;
  return { menus: menuState, isCollapse, footer, token };
};

export default connect(mapStateToProps)(Container);
