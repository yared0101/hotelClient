import Image from "next/image";
import { Row, Col, Typography } from "antd";

const { Title, Text } = Typography;

export const FoodAndDrinkList = ({ items }) => {
  const border = { border: "1px black solid" };
  const itemElements = items.map((item) => {
    return (
      <Col key={item.id} xs={24} sm={24} md={12} lg={12} xl={8} xxl={6}>
        <Row wrap={false} align="bottom">
          <Col
            style={{
              marginRight: "-100px",
              marginBottom: "-60px",
              zIndex: "1000",
            }}
          >
            <Image
              src="/victuals/poke.png"
              alt="alt"
              width="600"
              height="600"
            ></Image>
          </Col>
          <Col
            span={19}
            className={`bg-background`}
            style={{ borderBottomRightRadius: "2rem" }}
          >
            <Row justify="end" className={`p-3`}>
              <Col span={24}>
                <Title className={`text-primary`} level={2}>
                  {item.name}
                </Title>
              </Col>
              <Col span={17}>
                <Row justify="end">
                  <Col>
                    <Text type="secondary">{item.description}</Text>
                  </Col>
                  <Col>
                    <Text className={`fs-3 fw-bold text-primary`}>
                      {item.price}
                    </Text>
                    <Text className={`fs-1 fw-bold ml-1`} type="secondary">
                      Birr
                    </Text>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    );
  });
  return (
    <Row justify="center" className={`pb-5 mb-5 mt-5 bg-trans-primary`}>
      <Col>
        <Title className={`text-primary fw-800 mt-4 pb-4 mb-5`}>Top menu</Title>
      </Col>
      <Col span={24}>
        <Row justify="center" gutter={[10, "5rem"]} className={`mr-4 ml-4`}>
          {itemElements}
        </Row>
      </Col>
    </Row>
  );
};

export default FoodAndDrinkList;
