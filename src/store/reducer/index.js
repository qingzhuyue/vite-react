/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-22 16:26:10
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-22 16:28:50
 * @FilePath: /react/src/store/reducer/index.js
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { combineReducers } from "redux";
import menuReducer from "../redux/menu/menu";
import globalReducer from "../redux/global/reducer";
const reducers = combineReducers({
    menus: menuReducer,
    global:globalReducer,
});

export default reducers         