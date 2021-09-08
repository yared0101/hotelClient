/* eslint-disable react/display-name */
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Row, Col, Typography, Button, Avatar, Divider } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBed,
    faHotel,
    faUtensils,
    faSwimmer,
} from "@fortawesome/free-solid-svg-icons";

const Area = dynamic(
    () => import("@ant-design/charts").then((mod) => mod.Area),
    { ssr: false }
);
const Bar = dynamic(() => import("@ant-design/charts").then((mod) => mod.Bar), {
    ssr: false,
});
const Column = dynamic(
    () => import("@ant-design/charts").then((mod) => mod.Column),
    {
        ssr: false,
    }
);
const Pie = dynamic(() => import("@ant-design/charts").then((mod) => mod.Pie), {
    ssr: false,
});
const measureTextWidth = dynamic(
    () => import("@ant-design/charts").then((mod) => mod.measureTextWidth),
    {
        ssr: false,
    }
);

import { SideBar } from "../../components/SideBar";

const { Title, Text } = Typography;

export const Dashboard = ({}) => {
    const [areaChartData, setAreaChartData] = useState([]);
    const [pieChartData, setPieChartData] = useState([
        {
            type: "分类一",
            value: 27,
        },
        {
            type: "分类二",
            value: 25,
        },
        {
            type: "分类三",
            value: 18,
        },
        {
            type: "分类四",
            value: 15,
        },
        {
            type: "分类五",
            value: 10,
        },
        {
            type: "其他",
            value: 5,
        },
    ]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch(
            "https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json"
        )
            .then((response) => response.json())
            .then((json) => setAreaChartData(json))
            .catch((error) => {
                console.log("fetch data failed", error);
            });
    };

    const pieChartConfig = {
        appendPadding: 10,
        data: pieChartData,
        angleField: "value",
        colorField: "type",
        radius: 1,
        innerRadius: 0.6,
        height: 400,
        meta: {
            value: {
                formatter: function formatter(v) {
                    return "".concat(v, " \xA5");
                },
            },
        },
        label: {
            type: "inner",
            offset: "-50%",
            style: { textAlign: "center" },
            autoRotate: false,
            content: "{value}",
        },
        interactions: [
            { type: "element-selected" },
            { type: "element-active" },
        ],
        statistic: {
            title: false,
            content: {
                style: {
                    whiteSpace: "pre-wrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                },
                content: "",
            },
        },
        legend: {
            position: "bottom",
        },
    };

    const areaChartConfig = {
        data: areaChartData,
        xField: "year",
        yField: "value",
        seriesField: "category",
        height: 300,
        color: [
            "#6897a7",
            "#8bc0d6",
            "#60d7a7",
            "#dedede",
            "#fedca9",
            "#fab36f",
            "#d96d6f",
        ],
        xAxis: {
            type: "time",
            mask: "YYYY",
        },
        yAxis: {
            label: {
                formatter: function formatter(v) {
                    return ""
                        .concat(v)
                        .replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
                            return "".concat(s, ",");
                        });
                },
            },
        },
        legend: false,
    };

    return (
        <div className={`d-flex justify-content-center flex-fill`}>
            <div className={`mt-4`} style={{ paddingTop: "100px" }}>
                <SideBar iAm={"dashboard"} />
            </div>
            <div className={`bg-light d-flex flex-column flex-fill`}>
                <div
                    className={`d-flex flex-column flex-fill m-2`}
                    style={{ paddingTop: "100px" }}
                >
                    <Row justify="center">
                        <Col xs={24} sm={24} md={24} lg={14} xl={16} xxl={16}>
                            <Row
                                className={`m-2 rounded bg-background px-3 pt-4`}
                                align="stretch"
                            >
                                <Col xs={0} sm={0} md={8} lg={8} xl={0} xxl={6}>
                                    <div className={`mb-3`}>
                                        <Title
                                            level={5}
                                            className={`fw-normal`}
                                        >
                                            Dashboard
                                        </Title>
                                        <Text type="secondary">
                                            Overview of Last Month
                                        </Text>
                                    </div>
                                    <div className={`mb-3`}>
                                        <Title level={3} className={`fw-bold`}>
                                            $1,452,945
                                        </Title>
                                        <Text type="secondary">
                                            Current mounth earning
                                        </Text>
                                    </div>
                                    <div className={`mb-3`}>
                                        <Title level={3} className={`fw-bold`}>
                                            $1,452,945
                                        </Title>
                                        <Text type="secondary">
                                            Current mounth customer
                                        </Text>
                                    </div>
                                    <div className={`mb-3`}>
                                        <Button
                                            className={`button border border-primary p-3  rounded`}
                                        >
                                            Last Month Summery
                                        </Button>
                                    </div>
                                </Col>
                                <Col
                                    xs={24}
                                    sm={24}
                                    md={16}
                                    lg={16}
                                    xl={24}
                                    xxl={18}
                                >
                                    <Title level={3} className={`mb-4`}>
                                        Income - Area
                                    </Title>
                                    <Area className={``} {...areaChartConfig} />
                                </Col>
                                <Divider className={`m-0 p-0 mt-4 mb-3`} />
                                <Col span={24} className={`mb-4`}>
                                    <Row justify="space-around">
                                        <Col
                                            xs={24}
                                            sm={12}
                                            md={8}
                                            lg={8}
                                            xl={8}
                                            xxl={6}
                                        >
                                            <Row align="middle">
                                                <Col className={`mr-3`}>
                                                    <Avatar
                                                        className={`bg-pink`}
                                                        size={50}
                                                        icon={
                                                            <FontAwesomeIcon
                                                                icon={faBed}
                                                            />
                                                        }
                                                    />
                                                </Col>
                                                <Col>
                                                    <Text type="secondary">
                                                        Room Income
                                                    </Text>
                                                    <Text
                                                        className={`d-block fw-bold fs-1`}
                                                        level={5}
                                                    >
                                                        $
                                                        {`${Math.floor(
                                                            Math.random() *
                                                                (999 - 101) +
                                                                101
                                                        ).toString()},${Math.floor(
                                                            Math.random() *
                                                                (999 - 101) +
                                                                101
                                                        ).toString()}`}
                                                    </Text>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col
                                            xs={0}
                                            sm={12}
                                            md={8}
                                            lg={8}
                                            xl={8}
                                            xxl={6}
                                        >
                                            <Row align="middle">
                                                <Col className={`mr-3`}>
                                                    <Avatar
                                                        className={`bg-purple`}
                                                        size={50}
                                                        icon={
                                                            <FontAwesomeIcon
                                                                icon={
                                                                    faUtensils
                                                                }
                                                            />
                                                        }
                                                    />
                                                </Col>
                                                <Col>
                                                    <Text type="secondary">
                                                        Room Income
                                                    </Text>
                                                    <Text
                                                        className={`d-block fw-bold fs-1`}
                                                        level={5}
                                                    >
                                                        $
                                                        {`${Math.floor(
                                                            Math.random() *
                                                                (999 - 101) +
                                                                101
                                                        ).toString()},${Math.floor(
                                                            Math.random() *
                                                                (999 - 101) +
                                                                101
                                                        ).toString()}`}
                                                    </Text>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col
                                            xs={0}
                                            sm={0}
                                            md={8}
                                            lg={8}
                                            xl={8}
                                            xxl={6}
                                        >
                                            <Row align="middle">
                                                <Col className={`mr-3`}>
                                                    <Avatar
                                                        className={`bg-blue`}
                                                        size={50}
                                                        icon={
                                                            <FontAwesomeIcon
                                                                icon={faHotel}
                                                            />
                                                        }
                                                    />
                                                </Col>
                                                <Col>
                                                    <Text type="secondary">
                                                        Room Income
                                                    </Text>
                                                    <Text
                                                        className={`d-block fw-bold fs-1`}
                                                        level={5}
                                                    >
                                                        $
                                                        {`${Math.floor(
                                                            Math.random() *
                                                                (999 - 101) +
                                                                101
                                                        ).toString()},${Math.floor(
                                                            Math.random() *
                                                                (999 - 101) +
                                                                101
                                                        ).toString()}`}
                                                    </Text>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col
                                            xs={0}
                                            sm={0}
                                            md={0}
                                            lg={0}
                                            xl={0}
                                            xxl={6}
                                        >
                                            <Row align="middle">
                                                <Col className={`mr-3`}>
                                                    <Avatar
                                                        className={`bg-yellow`}
                                                        size={50}
                                                        icon={
                                                            <FontAwesomeIcon
                                                                icon={faSwimmer}
                                                            />
                                                        }
                                                    />
                                                </Col>
                                                <Col>
                                                    <Text type="secondary">
                                                        Room Income
                                                    </Text>
                                                    <Text
                                                        className={`d-block fw-bold fs-1`}
                                                        level={5}
                                                    >
                                                        $
                                                        {`${Math.floor(
                                                            Math.random() *
                                                                (999 - 101) +
                                                                101
                                                        ).toString()},${Math.floor(
                                                            Math.random() *
                                                                (999 - 101) +
                                                                101
                                                        ).toString()}`}
                                                    </Text>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={10} xl={8} xxl={8}>
                            <div className={`m-2 rounded bg-background p-4`}>
                                <Title level={3} className={`mb-4`}>
                                    Income - Area
                                </Title>
                                <Pie className={``} {...pieChartConfig} />
                            </div>
                        </Col>
                    </Row>
                    <Row className={`mx-2 my-4`} justify="center">
                        <Col xs={24} sm={21} md={12} lg={8} xl={8} xxl={6}>
                            <div
                                style={{ height: "200px" }}
                                className={`mx-2 d-flex flex-column justify-content-between rounded-3 p-3 text-background bg-purple`}
                            >
                                <Text className={`text-background fs-1`}>
                                    The title part
                                </Text>
                                <div
                                    className={`d-flex justify-content-between mb-2`}
                                >
                                    <div>
                                        <FontAwesomeIcon
                                            size="5x"
                                            icon={faUtensils}
                                        />
                                    </div>
                                    <div
                                        className={`d-flex flex-column align-items-end`}
                                    >
                                        <div className={`fw-bold fs-3`}>
                                            $2,453,567
                                        </div>
                                        <div>12 - Dec - 2021</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={0} sm={0} md={12} lg={8} xl={8} xxl={6}>
                            <div
                                style={{ height: "200px" }}
                                className={`mx-2 d-flex flex-column justify-content-between rounded-3 p-3 text-background bg-red`}
                            >
                                <Text className={`text-background fs-1`}>
                                    The title part
                                </Text>
                                <div
                                    className={`d-flex justify-content-between mb-2`}
                                >
                                    <div>
                                        <FontAwesomeIcon
                                            size="5x"
                                            icon={faUtensils}
                                        />
                                    </div>
                                    <div
                                        className={`d-flex flex-column align-items-end`}
                                    >
                                        <div className={`fw-bold fs-3`}>
                                            $2,453,567
                                        </div>
                                        <div>12 - Dec - 2021</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={0} sm={0} md={0} lg={8} xl={8} xxl={6}>
                            <div
                                style={{ height: "200px" }}
                                className={`mx-2 d-flex flex-column justify-content-between rounded-3 p-3 text-background bg-gray-dark`}
                            >
                                <Text className={`text-background fs-1`}>
                                    The title part
                                </Text>
                                <div
                                    className={`d-flex justify-content-between mb-2`}
                                >
                                    <div>
                                        <FontAwesomeIcon
                                            size="5x"
                                            icon={faUtensils}
                                        />
                                    </div>
                                    <div
                                        className={`d-flex flex-column align-items-end`}
                                    >
                                        <div className={`fw-bold fs-3`}>
                                            $2,453,567
                                        </div>
                                        <div>12 - Dec - 2021</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={0} sm={0} md={0} lg={0} xl={0} xxl={6}>
                            <div
                                style={{ height: "200px" }}
                                className={`mx-2 d-flex flex-column justify-content-between rounded-3 p-3 text-background bg-green`}
                            >
                                <Text className={`text-background fs-1`}>
                                    The title part
                                </Text>
                                <div
                                    className={`d-flex justify-content-between mb-2`}
                                >
                                    <div>
                                        <FontAwesomeIcon
                                            size="5x"
                                            icon={faUtensils}
                                        />
                                    </div>
                                    <div
                                        className={`d-flex flex-column align-items-end`}
                                    >
                                        <div className={`fw-bold fs-3`}>
                                            $2,453,567
                                        </div>
                                        <div>12 - Dec - 2021</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col xs={24} sm={24} md={24} lg={10} xl={8} xxl={8}>
                            <div className={`m-2 rounded bg-background p-4`}>
                                <Title level={3} className={`mb-4`}>
                                    Right Side
                                </Title>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={14} xl={16} xxl={16}>
                            <div className={`m-2 rounded bg-background p-4`}>
                                <Title level={3} className={`mb-4`}>
                                    Left Side
                                </Title>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
