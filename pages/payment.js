import { useState } from "react";
import { Input, Card, Row, Col, Button, Space } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import AuthLayout from "../components/AuthLayout";
const Payment = () => {
    const router = useRouter();
    const { query } = router;
    const [accountNumber, setAccountNumber] = useState();
    const [amount, setAmount] = useState("0");
    const [password, setPassword] = useState();
    const submit = () => {
        console.log(accountNumber, amount, password);
    };

    const cardTag = (
        <Card
            hoverable
            loading={!router.isReady}
            style={{ borderRadius: "1rem", borderColor: "rgb(253,126,20)" }}
            title={<h2 className="yaredPrimary">Payment</h2>}
        >
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
                <Space direction="vertical" style={{ width: "100%" }}>
                    Account Number
                    <Input
                        placeholder="Account Number"
                        onChange={({ target }) =>
                            setAccountNumber(target.value)
                        }
                    ></Input>
                </Space>
                <Space direction="vertical" style={{ width: "100%" }}>
                    Amount
                    <Input
                        placeholder="Amount"
                        type="number"
                        defaultValue={Number(query.amount)}
                        onChange={({ target }) => setAmount(target.value)}
                    ></Input>
                </Space>
                <Space direction="vertical" style={{ width: "100%" }}>
                    Password
                    <Input
                        placeholder="Password"
                        type="password"
                        onChange={({ target }) => setPassword(target.value)}
                    ></Input>
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
                                <Link
                                    href={
                                        query.isReady
                                            ? `/${query.link}`
                                            : "home"
                                    }
                                >
                                    Pay Money
                                </Link>
                            </Button>
                        </Col>
                    </Row>
                </Space>
            </Space>
        </Card>
    );
    return <AuthLayout cardTag={cardTag} />;
};
export default Payment;
