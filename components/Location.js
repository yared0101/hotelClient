import { Row, Col, Typography } from "antd";

const { Title } = Typography;
export const Location = ({}) => {
  return (
    <Row justify="center" className={`mb-4`}>
      <Col>
        <Title className={`text-primary fw-900`}>Location</Title>
      </Col>
      <Col
        span={24}
        className={`as-image`}
        style={{ height: "500px", backgroundImage: "url('/map.jpg')" }}
      ></Col>
    </Row>
  );
};

export default Location;
