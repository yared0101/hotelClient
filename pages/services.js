import { Row, Col, Divider } from "antd";

import Service from "../components/Service";

export const Services = ({}) => {
  return (
    <Row justify="center" gutter={[0, 0]} style={{ paddingTop: "100px" }}>
      <Col span={24}>
        <Service
          id="room"
          title="Quality rooms with different standard"
          miniDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias commodi nisi suscipit voluptatum, hic minima ipsam! Dignissimos consectetur quisquam laboriosam porro. Voluptas laudantium perferendis rerum temporibus aspernatur corrupti rem atque?"
          image="/servicesImage/room.jpg"
        />
      </Col>
      <Divider className={`mb-5`}></Divider>
      <Col span={24}>
        <Service
          id="hall"
          title="Events hosting hall"
          miniDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias commodi nisi suscipit voluptatum, hic minima ipsam! Dignissimos consectetur quisquam laboriosam porro. Voluptas laudantium perferendis rerum temporibus aspernatur corrupti rem atque?"
          image="/servicesImage/hall.jpg"
          imageToRightSide={false}
        />
      </Col>
      <Divider className={`mb-5`}></Divider>
      <Col span={24}>
        <Service
          id="gym"
          title="GYM"
          miniDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias commodi nisi suscipit voluptatum, hic minima ipsam! Dignissimos consectetur quisquam laboriosam porro. Voluptas laudantium perferendis rerum temporibus aspernatur corrupti rem atque?"
          image="/servicesImage/gym.jpg"
        />
      </Col>
      <Divider className={`mb-5`}></Divider>
      <Col span={24}>
        <Service
          id="pool"
          title="Warm swimming pool"
          miniDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias commodi nisi suscipit voluptatum, hic minima ipsam! Dignissimos consectetur quisquam laboriosam porro. Voluptas laudantium perferendis rerum temporibus aspernatur corrupti rem atque?"
          image="/servicesImage/pool.jpg"
          imageToRightSide={false}
        />
      </Col>
    </Row>
  );
};

export default Services;
