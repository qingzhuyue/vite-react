/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-22 16:18:50
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-22 16:31:08
 * @FilePath: /react/src/store/store.js
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { legacy_createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reduxPromise from "redux-promise"
import reducers from './reducer';
// redux持久化保存
const storageConfig = {
  key: "root",
  storage,
};
// 中间件
const middleware = [thunk];
const logger = createLogger()

// 开启redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configStore = persistReducer(storageConfig, reducers);
// 创建store
export let store = legacy_createStore(configStore, composeEnhancers(
  applyMiddleware(...middleware, reduxPromise, logger)
));
// 创建持久化的store
export let persistor = persistStore(store);