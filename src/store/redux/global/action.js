/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-22 16:20:44
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-22 16:22:19
 * @FilePath: /react/src/store/redux/global/action.js
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import * as types from "@/store/types";
import { cloneDeep } from "lodash";

export const setToken = (token) => ({
  type: types.SET_TOKEN,
  payload: token,
});

export const setThemeConfig = (themeConfig) => ({
  type: types.SET_THEME_CONFIG,
  payload: { ...themeConfig },
});

export const setDark = (isDark) => ({
  type: types.SET_DARK,
  payload: isDark,
});

export const setWeakOrGray = (checked, theme) => {
  if (checked) return { type: types.SET_WEAKORGRAY, payload: theme };
  return { type: types.SET_WEAKORGRAY, payload: "" };
};

export const setFooter = (footer) => ({
  type: types.SET_VISIBLE_FOOTER,
  payload: footer,
});

export const setUserInfo = (userInfo) => ({
  type: types.SET_USERINFO,
  payload: userInfo,
});

export const setWaterMark = (waterMark) => {
  return {
    type: types.SET_WATERMARK,
    payload: cloneDeep(waterMark),
  };
};
