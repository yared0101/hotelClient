import Image from "next/image";
import { Row, Col, Rate, Typography, Button } from "antd";

const { Title, Text } = Typography;

export const FoodAndDrinkDetail = ({
  id = "0",
  imageLocation = "/victuals/poke.png",
  imageAlt = "VictualImage",
  title = "VictuaTitle",
  name = "VictuaName",
  description = "VictuaDescription",
  price = "VictuaPrice",
  currency = "Birr",
  rate = 0,
}) => {
  return (
    <Row justify="center" align="middle" gutter={0} className={`mb-5`}>
      <Col xs={22} sm={19} md={11} lg={10} xl={9} xxl={8}>
        <Row>
          <Col span={24}>
            <Title className={`text-fg`}>{title}</Title>
          </Col>
          <Col span={24}>
            <Title className={`fw-900 text-primary fs-4`}>{name}</Title>
          </Col>
          <Col xs={22} sm={19} md={0}>
            <Image
              src={imageLocation}
              alt={imageAlt}
              width="600"
              height="640"
            />
          </Col>
          <Col span={24}>
            <Text className={`fs-1`} type="secondary">
              {description}
            </Text>
          </Col>
          <Col span={24}>
            <Rate
              className={`fs-3 text-primary`}
              allowHalf
              defaultValue={rate}
            />
          </Col>
          <Col span={24}>
            <Row className={`m-1 mt-5`} justify="space-between" align="bottom">
              <Col>
                <Text className={`fs-3 fw-bold text-primary`}>{price}</Text>
                <Text className={`fs-1 fw-bold ml-1`} type="secondary">
                  {currency}
                </Text>
              </Col>
              <Col>
                <Button
                  className={`pl-3 pr-3 pt-2 pb-2 fs-1 rounded-1 border-primary button`}
                >
                  Order Now
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col xs={0} sm={0} md={11} lg={10} xl={9} xxl={8}>
        <Image src={imageLocation} alt={imageAlt} width="600" height="640" />
      </Col>
    </Row>
  );
};

export default FoodAndDrinkDetail;
