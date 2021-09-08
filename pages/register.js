import { useState } from "react";
import { Input, Card, Row, Col, Button, Space } from "antd";
import Link from "next/link";
import AuthLayout from "../components/AuthLayout";
import {
    errorPhone,
    errorPass,
    errorEmail,
} from "../public/validation/validation";
export default function Register() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submit = () => {
        console.log("asdf");
    };
    const cardTag = (
        <Card
            hoverable
            style={{ borderRadius: "1rem", borderColor: "rgb(253,126,20)" }}
            title={<h2 className="yaredPrimary">Register</h2>}
        >
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
                <Space direction="vertical" style={{ width: "100%" }}>
                    Phone Number *
                    <Input
                        placeholder="Phone Number"
                        onChange={({ target }) => setPhoneNumber(target.value)}
                    ></Input>
                    {errorPhone(phoneNumber)}
                </Space>
                <Space direction="vertical" style={{ width: "100%" }}>
                    Email
                    <Input
                        placeholder="Email"
                        type="email"
                        onChange={({ target }) => setEmail(target.value)}
                    ></Input>
                    {errorEmail(email)}
                </Space>
                <Space direction="vertical" style={{ width: "100%" }}>
                    Password *
                    <Input
                        placeholder="Password"
                        type="password"
                        onChange={({ target }) => setPassword(target.value)}
                    ></Input>
                    {errorPass(password)}
                </Space>
                <Space direction="vertical" style={{ width: "100%" }}>
                    <Row>
                        <Col
                            offset={14}
                            style={{
                                alignContent: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Button type="default" onClick={() => submit()}>
                                Register
                            </Button>
                        </Col>
                    </Row>
                </Space>
                <Space direction="vertical" style={{ width: "100%" }}>
                    <div style={{ textAlign: "center", width: "100%" }}>
                        <Link style={{ width: "100%" }} href="/login">
                            Already have an account? Login
                        </Link>
                    </div>
                </Space>
            </Space>
        </Card>
    );
    return <AuthLayout cardTag={cardTag} />;
}
