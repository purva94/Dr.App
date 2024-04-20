import React from "react";
import { Form, Input, message, Button } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/RegisterStyle.css"; // Import the Register styles

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/login", values);
      window.location.reload();
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successful");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something went wrong!");
    }
  };

  return (
    <div className="authentication slide-in">
      <div className="authentication-form card">
        {/* Apply animation class to h1 */}
        <h1 className="card-title fade-in">A Journey to Wellness</h1>
        <Form layout="vertical" onFinish={onfinishHandler}>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder="Password" type="password" />
          </Form.Item>
          <Button className="primary-button my-2" htmlType="submit">
            LOGIN
          </Button>
          <Link to="/register" className="anchor">
            NOT A USER? REGISTER HERE
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Login;
