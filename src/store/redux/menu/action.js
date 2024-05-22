/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-22 16:22:40
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-22 16:22:41
 * @FilePath: /react/src/store/redux/menu/action.js
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import * as types from "@/store/types";

export const changeCollapse = (isCollapse) =>({
  type: types.MENU_COLLAPSES,
  payload: isCollapse,
});