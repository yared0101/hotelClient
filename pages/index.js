import Link from "next/Link";
import styles from "../styles/coverpage.module.css";
import { Row, Col, Button } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
const CoverPage = () => {
    return (
        <div className={styles.coverPage}>
            <Row>
                <Col
                    className={styles.colStyle}
                    sm={{ offset: 2, span: 22 }}
                    md={{ offset: 4, span: 18 }}
                    lg={{ offset: 6, span: 14 }}
                >
                    <h1 className={styles.title}>Book Your Holidays</h1>
                    <h2 className={styles.subText}>
                        Lorem Ipsum is just a dummy text of the printing and
                        typesetting industry.
                    </h2>
                    <Col
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                        }}
                        className="mr-4"
                    >
                        <Button type="default" className={styles.circleButton}>
                            <Link href="/home">
                                <CaretRightOutlined />
                            </Link>
                        </Button>
                    </Col>
                </Col>
            </Row>
        </div>
    );
};
export default CoverPage;
