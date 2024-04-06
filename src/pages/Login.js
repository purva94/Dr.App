import React from "react";
import { Form, Input } from "antd";
import "../styles/RegisterStyle.css";
import { Link } from "react-router-dom";

const Login = () => {
  //form handler
  const onfinishHandler = (values) => {
    console.log(values);
  };
  return (
    <div className="form-container ">
      <Form
        layout="vertical"
        onFinish={onfinishHandler}
        className="register-form"
      >
        <h3 className="text-center">Login From</h3>

        <Form.Item label="Email" name="email">
          <Input type="email" required />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" required />
        </Form.Item>
        <Link to="/register" className="m-2">
          not a user login here
        </Link>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </Form>
    </div>
  );
};

export default Login;
