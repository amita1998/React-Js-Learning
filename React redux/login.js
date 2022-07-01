import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const onFinish = async (logindata) => {
    try {
      setError("please wait...");
      const { data } = await axios({
        method: "POST",
        url: "http://localhost:8080/api/user/signin",
        data: logindata,
      });

      if (data.success) {
        const { token } = data.data;
        localStorage.setItem("userToken", token);
        navigate("/products");
      }
    } catch (error) {
      const { message } = error.response.data;
      setError(message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="login-wrapper container w-50">
        <div>
          <h4 className="text-center mb-4">Login</h4>
          {error && (
            <p className="text-danger fw-bold text-center text-capitalize">
              {error}
            </p>
          )}
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Email address is required.",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Password is required.",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
