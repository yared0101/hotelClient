import styles from "../styles/footer.module.css";
import { Row, Col, Typography, Space } from "antd";
import { SendOutlined, createFromIconfontCN } from "@ant-design/icons";
const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});
const { Title, Text } = Typography;
import Image from "next/image";
export const Footer = ({}) => {
    const contactList = [
        {
            icon: (
                <SendOutlined
                    rotate={330}
                    style={{ marginRight: "-3px", paddingTop: "-3px" }}
                />
            ),
            title: "Telegram",
            href: "t.me/yared101",
        },
        {
            icon: <IconFont type="icon-facebook" />,
            title: "Facebook",
            href: "facebook.com/yaredterefe",
        },
    ].map(({ icon, title, href }, index) => (
        <div key={index}>
            <a href={href}>
                <Title level={4} className="pb-0 pt-0">
                    <Space size="middle">
                        {icon}
                        {title}
                    </Space>
                </Title>
            </a>
        </div>
    ));
    return (
        <Row className={styles.main}>
            <Col xs={{ offset: 1, span: 22 }} sm={{ offset: 2, span: 20 }}>
                <Row gutter={{ xs: 0, sm: 16, md: 24, lg: 32 }}>
                    <Col
                        className="gutter-row pt-2 pt-4"
                        xs={24}
                        sm={12}
                        md={6}
                    >
                        <Row className="mb-3">
                            <Col span={4} className={styles.logoStyle}>
                                <Image
                                    src="/logo/onlyLogo.png"
                                    alt="LOGO"
                                    width="42.6"
                                    height="37.3"
                                ></Image>
                            </Col>
                            <Col span={20}>
                                <div className={`${styles.borderBottom} pb-0`}>
                                    <Title italic className="mb-0" level={3}>
                                        Triangle Int
                                    </Title>
                                </div>
                                <div className={styles.bottomTitle}>
                                    <Title italic className="mb-0" level={3}>
                                        Hotel
                                    </Title>
                                </div>
                            </Col>
                        </Row>
                        <div>
                            Triangle Incorporated Hotel is a brand new hotel
                            having a unique and surprising service culture
                            located at the heart of Hawassa, Ethiopia with a
                            very close proximity to Hawassa International
                            stadium, Hawassa National Airport, and walking
                            distance from SNNP President Office and Hawassa
                            University.
                        </div>
                    </Col>
                    <Col className="gutter-row pt-2" xs={24} sm={12} md={6}>
                        <div className={styles.borderBottom}>
                            <Text strong>
                                <Title italic level={4} className="fw-900">
                                    Connect With Us
                                </Title>
                            </Text>
                        </div>
                        <br />
                        {contactList}
                    </Col>
                    <Col className="gutter-row pt-2" xs={24} sm={12} md={6}>
                        <div className={styles.borderBottom}>
                            <Text strong>
                                <Title italic level={4} className="fw-900">
                                    Sister Companies
                                </Title>
                            </Text>
                        </div>
                        <br />
                        {contactList}
                    </Col>
                    <Col className="gutter-row pt-2" xs={24} sm={12} md={6}>
                        <div className={styles.borderBottom}>
                            <Text strong>
                                <Title italic level={4} className="fw-900">
                                    What's New
                                </Title>
                            </Text>
                        </div>
                        <br />
                        {contactList}
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Footer;
