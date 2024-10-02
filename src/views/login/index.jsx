import { useState, useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import logo from "@/assets/vite.svg";
import loginLeft from "@/assets/login_left.png";
import {
  UserOutlined,
  LockOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import "./index.scss";
import { setToken, setUserInfo } from "@/store/redux/global/action";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [messageApi, contextHolder] = message.useMessage();
  const { setToken, setUserInfo } = props;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (form) => {
    try {
      setLoading(true);

      fetch("/api/login", {
        method: "post",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: form.username, phone: "18286430374", password: form.password }),
      })
        .then(response => response.json())
        .then(data => {
          if (data?.code === 401) {
            return messageApi.open({
              type: "error",
              content: data.msg,
            });
          }

          if(data?.code === 200){
            setToken(data?.data?.token);
            setUserInfo(data)
            return messageApi.open({
              type: "success",
              content: data.msg,
              duration: 2,
            }).then(() => navigate("/home"));;
          }

          return messageApi.open({
            content: data?.msg,
          });
        })
        .catch((error) => console.error('Error:', error));
    } finally {
      setLoading(false);
    }
  };
  const onFinishFailed = (error) => {
    console.log("onFinishFailed:", error);
  };
  return (
    <div className="login-container">
      <div className="login-box">
        {contextHolder}
        <div className="login-left">
          <img src={loginLeft} alt="login" />
        </div>
        <div className="login-form">
          <div className="login-logo">
            <img className="login-icon" src={logo} alt="logo" />
            <span className="logo-text">后台管理</span>
          </div>
          <Form
            form={form}
            labelCol={{ span: 5 }}
            initialValues={{
              remember: true,
              username: "admin12",
              password: "123456",
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            size="large"
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: "请输入用户名" }]}
            >
              <Input placeholder="用户名：admin" prefix={<UserOutlined />} />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "请输入密码" }]}
            >
              <Input.Password
                autoComplete="new-password"
                placeholder="密码：123456"
                prefix={<LockOutlined />}
              />
            </Form.Item>
            <Form.Item className="login-btn">
              <Button
                onClick={() => {
                  form.resetFields();
                }}
                icon={<CloseCircleOutlined />}
              >
                重置
              </Button>
              <Button
                type="primary"
                loading={loading}
                htmlType="submit"
                icon={<UserOutlined />}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = { setToken, setUserInfo };
export default connect(null, mapDispatchToProps)(Login);
