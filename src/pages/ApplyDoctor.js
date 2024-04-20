import React from "react";
import Layout from "./../components/Layout";
import { Form, Row, Col, TimePicker } from "antd"; // Import Col component from Ant Design
import "./../styles/ApplyDoctor.css";

const ApplyDoctor = () => {
  //handle form
  const handleFinish = (values) => {
    console.log(values);
  };
  return (
    <Layout>
      {/* <h1 className="text-center">Apply Doctor</h1>
      <Form layout="vertical" onFinish={handleFinish} className="m-3">
        <h4>Personal Details:</h4> changes -->*/}
      <h1 className="apply-doctor-heading">Apply Doctor</h1>
      <Form layout="vertical" onFinish={handleFinish} className="m-3">
        <h4 className="personal-details-heading">Personal Details:</h4>

        <Row gutter={16}>
          <Col xs={24} sm={12} md={8}>
            <Form.Item
              label="First Name"
              name="firstName"
              required
              rules={[{ required: true }]}
            >
              <input type="text" placeholder="Your First Name" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item
              label="Last Name"
              name="lastName"
              required
              rules={[{ required: true }]}
            >
              <input type="text" placeholder="Your Last Name" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item
              label="Phone"
              name="phone"
              required
              rules={[{ required: true }]}
            >
              <input type="text" placeholder="Your Phone Number" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item
              label="Email"
              name="email"
              required
              rules={[{ required: true }]}
            >
              <input type="text" placeholder="Your Email Address" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item
              label="Website"
              name="website"
              required
              rules={[{ required: true }]}
            >
              <input type="text" placeholder="Your Website" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item
              label="Address"
              name="address"
              required
              rules={[{ required: true }]}
            >
              <input type="text" placeholder="Your Address" />
            </Form.Item>
          </Col>
        </Row>
        <h4>Professional Details:</h4>
        <Row gutter={16}>
          <Col xs={24} sm={12} md={8}>
            <Form.Item
              label="Specialization"
              name="specialization"
              required
              rules={[{ required: true }]}
            >
              <input type="text" placeholder="Your Specialization" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item
              label="Experience"
              name="experience"
              required
              rules={[{ required: true }]}
            >
              <input type="text" placeholder="Your Experience" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item
              label="Fees Per Consultation"
              name="feesPerConsultation"
              required
              rules={[{ required: true }]}
            >
              <input type="text" placeholder="Your Fees Per Consultation" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item label="Timing" name="timings" required>
              {/* rules={[{ required: true }]} */}
              <TimePicker.RangePicker format="HH:mm" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}></Col>
          {/* <Col xs={24} sm={12} md={8}> */}
          {/* <button className="btn btn-primary form-btn" type="submit">
              Submit */}
          <Col xs={24} sm={12} md={8}>
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </Col>
        </Row>
      </Form>
    </Layout>
  );
};

export default ApplyDoctor;
