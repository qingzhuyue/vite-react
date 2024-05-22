/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-22 15:58:08
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-22 16:44:13
 * @FilePath: /react/src/App.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import useTheme from "./hooks/useTheme";
import Router from "@/routers/index";
// import { useOnlineStatus } from "@/hooks/useOnlineStatus"
function App(props) {
  const { weakOrGray } = props;
  // const isOnline = useOnlineStatus();
  useTheme(weakOrGray);
  return (
    <BrowserRouter>
        <Router />
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return state.global;
};
export default connect(mapStateToProps)(App);
