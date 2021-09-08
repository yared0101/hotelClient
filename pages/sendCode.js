import { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import { Input, Card, Row, Col, Button, Space } from "antd";
import ErrorSpan from "../components/ErrorSpan";
import Link from "next/link";

const SendCode = () => {
    const [code, setCode] = useState();
    const [errorCode, setErrorCode] = useState("");
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
                    Code
                    <Input
                        placeholder="Code"
                        type="number"
                        value={code}
                        onChange={({ target }) => setCode(target.value)}
                    ></Input>
                    <ErrorSpan text={errorCode} />
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
                            <Link href="/changepassword">
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
export default SendCode;
