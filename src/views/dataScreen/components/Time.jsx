/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-23 14:37:50
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-23 14:37:51
 * @FilePath: /react/src/views/dataScreen/components/Time.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { useTime } from "@/hooks";
const DataTime = ()=>{
    const {time} = useTime();
    return <span className="time">时间：{time}</span>
}

export default DataTime