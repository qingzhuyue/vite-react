/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-14 21:47:10
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-14 21:57:17
 * @FilePath: /vite-react/src/views/three/index.tsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu, MenuProps } from "antd";
import { connect } from "react-redux";
import Logo from "../layout/components/Logo";

const { Content, Footer, Sider } = Layout;

function ThreeContainer(props: any) {
  const { footer, isCollapse, token } = props;
  const navigate = useNavigate();
  const router = useLocation();
  const onChangeRouter = (router: string) => {
    navigate(router);
  };

  const items: MenuProps["items"] = props.menus.map(
    (item: any, index: number) => {
      if (item.children) {
        return {
          key: item.key,
          label: item.title,
          children: item.children.map((items: any, key: number) => {
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
    if (!token) {
      navigate("/login");
    }
  }, []);
  return (
    <Layout className="layout">
      <Layout>
        dsfvndf
      </Layout>
    </Layout>
  );
}

const mapStateToProps = (state: any) => {
  const { menuState, isCollapse } = state.menus;
  const { footer, token } = state.global;
  return { menus: menuState, isCollapse, footer, token };
};

export default connect(mapStateToProps)(ThreeContainer);
