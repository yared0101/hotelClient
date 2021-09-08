import styles from "../styles/home.module.css";
import { Row, Col, Card, Space, Button } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
const { Meta } = Card;
const HorizontalCard = ({
    title,
    description,
    bgImageClass,
    inverted,
    href,
}) => {
    const router = useRouter();
    const underLineDiv = (title) => (
        <div style={{ borderBottom: "1px black dashed" }}>
            <h1>{title}</h1>
            <div
                style={{
                    height: 3,
                    width: "3rem",
                    marginBottom: "-2px",
                }}
                className="bg-primary"
            ></div>
        </div>
    );
    return (
        <Row>
            <Col span={24}>
                <Row>
                    <Col
                        xs={0}
                        sm={{ span: 12, push: inverted ? 12 : 0 }}
                        className={
                            styles[bgImageClass] + " " + styles.bgImagePpt
                        }
                    ></Col>
                    <Col
                        xs={0}
                        sm={{ span: 12, pull: inverted ? 12 : 0 }}
                        className={styles.lgSecondDiv}
                    >
                        <div>
                            <Space direction="vertical" size="large">
                                {underLineDiv(title)}
                                <div>{description}</div>
                                <Button type="default">
                                    <Link href={`/${href}`}>Read More</Link>
                                </Button>
                            </Space>
                        </div>
                    </Col>
                    <Col xs={{ offset: 1, span: 22 }} sm={0} lg={0} md={0}>
                        <Card
                            onClick={() => {
                                router.push(href);
                            }}
                            hoverable
                            cover={
                                <div
                                    className={`${styles[bgImageClass]} ${styles.bgImagePpt}`}
                                ></div>
                            }
                        >
                            <Meta
                                title={underLineDiv(title)}
                                description={description}
                            />
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};
export default HorizontalCard;
