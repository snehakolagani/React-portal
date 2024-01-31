import React, { useState } from "react";

import { Button, Checkbox, Flex, Form, Input, message } from "antd";

import Home from "./home";
import { useNavigate } from "react-router-dom";
import Logo from "./logo";

const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
   
    try {
      const response = await fetch("/api/portal/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password })
        
      });
      console.log( "data",JSON.stringify({ username, password }),)
      if (response.ok) {
       
        localStorage.setItem('user', JSON.stringify(username));
        console.log("userobj",localStorage.setItem('user', JSON.stringify(username)));
       
       
        const result = await response.json();
        console.log("result",result["serviceResult"])
        localStorage.setItem("user",JSON.stringify(result["serviceResult"]));
        console.log("local",JSON.parse(localStorage.getItem("user")))
       // const loginError = result.serviceError;
        navigate("/home");
        //message.error(loginError);
      }
      else {
        alert("Invalid Credentials")
       
      }
      
      
    } catch (error) {
      console.error("Error during login:", error);
      alert("please enter valid credentials");
    }
  };

  /* const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
}; */
  return (
    <div>
       <Logo /> 
      <Flex>
        <Form
          name="basic"
          className="loginform"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          /*  onFinish={onFinish}
    onFinishFailed={onFinishFailed} */
          autoComplete="on"
        >
          <h3>* Login *</h3>
          <Form.Item
            label="Username"
            name="username"
            value={username}
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
            onChange={(e) => setUsername(e.target.value)}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            value={password}
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            onChange={(e) => setPassword(e.target.value)}
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
            <Button type="primary" htmlType="submit" onClick={handleLogin}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </div>
  );
};

export default LoginForm;
