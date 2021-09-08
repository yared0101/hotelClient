import { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import Link from "next/Link";
import { Input, Card, Row, Col, Button, Space } from "antd";
import { errorEmail, errorPhone } from "../public/validation/validation";

const ForgotPassword = () => {
  const [tabKey, setTabKey] = useState("tab1");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const sendCode = () => {
    console.log("code has been sent to ur email");
  };
  const tabList = [
    {
      key: "tab1",
      tab: "Email",
    },
    {
      key: "tab2",
      tab: "Phone Number",
    },
  ];
  const contentList = {
    tab1: (
      <Space direction="vertical" style={{ width: "100%" }}>
        Email
        <Input
          name="email"
          value={email}
          placeholder="Email"
          type="email"
          onChange={({ target }) => setEmail(target.value)}
        ></Input>
        {errorEmail(email)}
      </Space>
    ),
    tab2: (
      <Space direction="vertical" style={{ width: "100%" }}>
        Phone Number
        <Input
          name="phoneNumber"
          value={phoneNumber}
          placeholder="Phone Number"
          onChange={({ target }) => setPhoneNumber(target.value)}
        ></Input>
        {errorPhone(phoneNumber)}
      </Space>
    ),
  };
  const cardTag = (
    <Card
      tabList={tabList}
      onTabChange={(key) => setTabKey(key)}
      hoverable
      style={{ borderRadius: "1rem", borderColor: "rgb(253,126,20)" }}
      title={<h2 className="yaredPrimary">Forgot My Password?</h2>}
    >
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {contentList[tabKey]}
        <Row>
          <Col
            offset={14}
            style={{ alignContent: "center", justifyContent: "center" }}
          >
            <Link href="/sendCode">
              <Button type="default" onClick={() => sendCode()}>
                Send Code
              </Button>
            </Link>
          </Col>
        </Row>
      </Space>
      <Space direction="vertical" style={{ width: "100%" }}>
        <div style={{ textAlign: "center", width: "100%" }}>
          <Link style={{ width: "100%" }} href="/login">
            back to Login
          </Link>
        </div>
      </Space>
    </Card>
  );
  return <AuthLayout cardTag={cardTag} />;
};
export default ForgotPassword;
