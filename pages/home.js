import styles from "../styles/home.module.css";
import { Carousel, Row, Col, Space, Avatar, Button } from "antd";
import {
    WifiOutlined,
    KeyOutlined,
    CarOutlined,
    CustomerServiceOutlined,
} from "@ant-design/icons";
import HorizontalCard from "../components/HorizontalCard";
import Footer from "../components/Footer";
import Location from "../components/Location";
const Home = () => {
    const onChange = (a, b, c) => {
        // console.log(a, b, c);
    };
    const styler = (number) => {
        const localStyles = ["location", "rooms", "cozy", "pets"];
        let myStyles = styles.contentStyle + " ";
        myStyles += styles[localStyles[number]];
        return myStyles;
    };
    const carouselDivs = [
        { text: "Location easy to find", title: "Location" },
        { text: "Rooms are as awesome as they come", title: "Rooms" },
        { text: "The most comfortable rooms", title: "Cozy" },
        { text: "Pets are allowed", title: "Pets" },
    ].map((element, index) => (
        <Row key={index} className={styler(index)}>
            <Col xs={18} sm={12} md={9} lg={6} className={styles.textDiv}>
                <h1>{element.title}</h1>
                <h3>{element.text}</h3>
            </Col>
        </Row>
    ));
    const circleRowCols = [
        {
            icon: <WifiOutlined />,
            text: "Free Wifi",
        },
        {
            icon: <KeyOutlined />,
            text: "Room Service",
        },
        {
            icon: <CarOutlined />,
            text: "Free Parking",
        },
        {
            icon: <CustomerServiceOutlined />,
            text: "Customer Support",
        },
    ].map((element, index) => (
        <Col key={index} span={6} className="gutter-row">
            <div className={styles.iconViewer}>
                <Space
                    direction="vertical"
                    size="large"
                    className={styles.textAlignCenter}
                >
                    <Col xs={0} sm={0} md={24}>
                        <Avatar
                            icon={element.icon}
                            className={
                                "yaredPrimaryTextColor " + styles.iconView
                            }
                        />
                        <h2 className="mt-4">{element.text}</h2>
                    </Col>
                    <Col xs={24} sm={24} md={0}>
                        <Avatar
                            icon={element.icon}
                            className={
                                "yaredPrimaryTextColor " +
                                styles.iconView +
                                " mb-4 " +
                                styles.iconViewSmall
                            }
                        />
                    </Col>
                </Space>
            </div>
        </Col>
    ));
    const imageList = ["hotel1", "hotel2", "hotel3", "hotel4"].map(
        (element, index) => (
            <Col
                key={index}
                xs={index ? 0 : 24}
                sm={{ span: 18, offset: 3 }}
                md={{ span: 12, offset: 0 }}
                lg={{ span: 6, offset: 0 }}
                style={{ height: 350 }}
                className="gutter-row mt-2 mb-2"
            >
                <div
                    style={{ height: "inherit" }}
                    className={styles[element] + "  " + styles.bgImagePpt}
                ></div>
            </Col>
        )
    );
    const servicesList = [
        {
            title: "Gym",
            description: "Get Puffed up in our awesome Gym ppl",
            bgImageClass: "services1",
            href: "services",
        },
        {
            title: "Spa",
            description:
                "Our spa is perfect for skin care, and skin care matters",
            bgImageClass: "services2",
            href: "services",
        },
        {
            title: "Hall",
            description: "Our Halls are as big as the world is!",
            bgImageClass: "services3",
            href: "services",
        },
        {
            title: "Pool",
            description: "We promise the sharks in our pools are so friendly",
            bgImageClass: "services4",
            href: "services",
        },
    ].map((element, index) => (
        <Col
            xs={{ offset: 2, span: 20 }}
            sm={{ offset: 5, span: 14 }}
            md={{ offset: 0, span: 12 }}
            lg={12}
            key={index}
            className="gutter-row"
        >
            <HorizontalCard
                title={element.title}
                inverted={index % 4 < 2 ? false : true}
                description={element.description}
                bgImageClass={element.bgImageClass}
                href={element.href}
            />
        </Col>
    ));
    return (
        <div className={styles.home}>
            <div
                className={styles.absoluteBackground + " " + styles.bgImagePpt}
            ></div>
            <Carousel afterChange={onChange} autoplay>
                {carouselDivs}
            </Carousel>
            <Row className={styles.bgColorWhite}>
                <Col span={20} offset={2} className="mt-5">
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        {circleRowCols}
                    </Row>
                </Col>
            </Row>
            <Row
                className={
                    styles.bgColorWhite + " pb-5 " + styles.borderRadiusBottom
                }
            >
                <Col
                    span={20}
                    offset={2}
                    style={{ marginTop: 15, marginBottom: 15 }}
                >
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        {imageList}
                    </Row>
                </Col>
            </Row>
            <Row className={styles.imageBgDiv}>
                <Col
                    xs={24}
                    sm={20}
                    md={18}
                    lg={16}
                    className={styles.imageBgCol}
                >
                    <Row style={{ height: "100%" }}>
                        <Col
                            xs={0}
                            sm={0}
                            md={0}
                            lg={18}
                            offset={2}
                            className={`pt-3`}
                        >
                            <span className={styles.imageBgPcText}>
                                Your Vacation Awaits
                            </span>
                            <p style={{ fontSize: 18 }}>
                                Lorem Ipsum is just a dummy text of the printing
                                and typesetting industry.
                            </p>
                            <Button type="default" size="large">
                                Choose a package
                            </Button>
                        </Col>
                        <Col
                            xs={0}
                            sm={0}
                            md={18}
                            lg={0}
                            offset={2}
                            className={`pt-3`}
                        >
                            <span className={styles.imageBgPcText}>
                                Your Vacation Awaits
                            </span>
                            <p style={{ fontSize: 15 }}>
                                Lorem Ipsum is just a dummy text of the printing
                                and typesetting industry.
                            </p>
                            <Button type="default" size="large">
                                Choose a package
                            </Button>
                        </Col>
                        <Col xs={18} sm={18} md={0} offset={2}>
                            <Row
                                align="middle"
                                style={{
                                    height: "100%",
                                }}
                                className={styles.imageBgPhoneText}
                            >
                                <Col span={24}>Your Vacation Awaits</Col>
                                <Button type="default" size="large">
                                    Choose a package
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row
                className={
                    styles.bgColorWhite +
                    " pt-5 pl-1 pr-1 " +
                    styles.borderRadiusTop
                }
            >
                <Col xs={{ span: 24, offset: 0 }} sm={{ offset: 1, span: 22 }}>
                    <Row gutter={{ xs: 0, sm: 16, md: 24, lg: 32 }}>
                        {servicesList}
                    </Row>
                </Col>
            </Row>
            <div className={styles.bgColorWhite}>
                <div>
                    <br />
                </div>
                <Location />
                <Footer />
                <br />
            </div>
        </div>
    );
};
export default Home;
