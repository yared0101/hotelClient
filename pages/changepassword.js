import { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import { Input, Card, Row, Col, Button, Space } from "antd";
import Link from "next/Link";
import { errorPass, errorCoPass } from "../public/validation/validation";
const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [coPassword, setCoPassword] = useState("");
  const submit = () => {
    console.log("asdf");
  };
  const cardTag = (
    <Card
      hoverable
      style={{ borderRadius: "1rem", borderColor: "rgb(253,126,20)" }}
      title={<h2 className="yaredPrimary">Change Password</h2>}
    >
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Space direction="vertical" style={{ width: "100%" }}>
          Password
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={({ target }) => {
              setPassword(target.value);
            }}
          ></Input>
          {errorPass(password)}
        </Space>
        <Space direction="vertical" style={{ width: "100%" }}>
          Confirm - Password
          <Input
            placeholder="Password"
            type="password"
            value={coPassword}
            onChange={({ target }) => {
              setCoPassword(target.value);
            }}
          ></Input>
          {errorCoPass(password, coPassword)}
        </Space>
        <Space direction="vertical" style={{ width: "100%" }}>
          <Row>
            <Col
              offset={14}
              style={{ alignContent: "center", justifyContent: "center" }}
            >
              <Link href="/login">
                <Button type="default" onClick={() => submit()}>
                  submit
                </Button>
              </Link>
            </Col>
          </Row>
        </Space>
      </Space>
    </Card>
  );
  return <AuthLayout cardTag={cardTag} />;
};
export default ChangePassword;
