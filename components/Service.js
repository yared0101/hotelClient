import Link from "next/link";
import { Row, Col, Typography } from "antd";

const { Title, Text } = Typography;

import React from "react";

export const Service = ({
  id = "0",
  title = "This is the title of the servive",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias commodi nisi suscipit voluptatum, hic minima ipsam! Dignissimos consectetur quisquam laboriosam porro. Voluptas laudantium perferendis rerum temporibus aspernatur corrupti rem atque?",
  image = "/servicesImage/hall.jpg",
  imageToRightSide = true,
}) => {
  return (
    <Row justify="center" align="middle" gutter={0} className={`mb-5`}>
      <Col
        xs={22}
        sm={20}
        md={20}
        lg={10}
        xl={9}
        xxl={8}
        order={imageToRightSide ? 0 : 1}
        className={`mr-3 ml-3`}
      >
        <Row>
          <Col span={24}>
            <Title level={2} className={`text-primary `}>
              {title}
            </Title>
          </Col>
          <Col xs={24} sm={0}>
            <div
              className={`as-image`}
              style={{
                backgroundImage: `url("${image}")`,
                height: "250px",
              }}
            ></div>
          </Col>
          <Col xs={0} sm={24} md={0}>
            <div
              className={`as-image`}
              style={{
                backgroundImage: `url('${image}')`,
                height: "350px",
              }}
            ></div>
          </Col>
          <Col xs={0} sm={0} md={24} lg={0}>
            <div
              className={`as-image`}
              style={{
                backgroundImage: `url('${image}')`,
                height: "500px",
              }}
            ></div>
          </Col>
          <Col span={24}>
            <Text className={`fs-1 d-block mb-4 mt-4`} type="secondary">
              {description}
            </Text>
          </Col>
        </Row>
      </Col>
      <Col xs={0} sm={0} md={0} lg={13} xl={12} xxl={12}>
        <div
          className={`as-image`}
          style={{
            backgroundImage: `url('${image}')`,
            height: "700px",
          }}
        ></div>
      </Col>
    </Row>
  );
};

export default Service;
