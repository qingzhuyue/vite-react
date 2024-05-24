/*
 * @Author: qingzhuyue qingzhuyue@foxmail.com
 * @Date: 2024-05-24 14:53:50
 * @LastEditors: qingzhuyue qingzhuyue@foxmail.com
 * @LastEditTime: 2024-05-24 14:53:51
 * @FilePath: /react/src/components/Error/Error404.jsx
 * @Description: 
 * Copyright (c) 2024 by ${qingzhuyue} email: ${qingzhuyue@foxmail.com}, All Rights Reserved.
 */
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const NotAuth = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/home");
  };
  return (
    <Result
			status="404"
			title="404"
			subTitle="Sorry, the page you visited does not exist."
			extra={
				<Button type="primary" onClick={goHome}>
					Back Home
				</Button>
			}
		/>
  );
};

export default NotAuth;
