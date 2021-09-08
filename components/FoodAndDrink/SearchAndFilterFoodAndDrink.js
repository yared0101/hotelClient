import { useState } from "react";

import {
  Row,
  Col,
  Rate,
  Typography,
  Menu,
  Slider,
  Radio,
  Divider,
  Dropdown,
  Input,
  Button,
} from "antd";

import { SearchOutlined, FilterOutlined } from "@ant-design/icons";

import { FoodFilterForm } from "./FoodFilterForm";

const { Title } = Typography;

export const SearchAndFilterFoodAndDrink = ({}) => {
  const [minimunStar, setMinimunStar] = useState(3);

  const filterComponent = (
    <Menu className={`m-3 rounded-2`} style={{ maxWidth: "350px" }}>
      <FoodFilterForm data={{}} />
      <Row className={`rounded-2 p-3 d-none`} gutter={[0, 30]}>
        <Col span={24}>
          <Title className={`mb-0`} level={3}>
            Refine Results
          </Title>
          <Divider></Divider>
        </Col>
        <Col span={24}>
          <Row>
            <Col span={24}>
              <Title level={5}>Search String</Title>
            </Col>
            <Col span={24}>
              <Input
                placeholder="Write food-drink"
                className={`py-2 rounded`}
              />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row>
            <Col span={24}>
              <Title level={5}>Price Range</Title>
            </Col>
            <Col className={`w-100 pr-3 mb-3`}>
              <Slider
                className={`text-primary border-primary`}
                range
                marks={{
                  0: "50",
                  20: "200",
                  40: "400",
                  60: "600",
                  80: "800",
                  100: "1000",
                }}
                // step={5}
                defaultValue={[20, 40]}
              />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row>
            <Col span={24}>
              <Title className={``} level={5}>
                Minimum Rating
              </Title>
            </Col>
            <Col>
              <Radio.Group
                onChange={(e) => {
                  console.log(`Before: ${minimunStar}`);
                  setMinimunStar(e.target.value);
                  console.log(`After: ${minimunStar}`);
                }}
                value={minimunStar}
              >
                <Row>
                  <Radio value={1}>
                    <Rate
                      defaultValue={5}
                      disabled
                      className={`ml-3 fs-2 text-primary`}
                    />
                  </Radio>
                </Row>
                <Row>
                  <Radio value={2}>
                    <Rate
                      defaultValue={4}
                      disabled
                      className={`ml-3 fs-2 text-primary`}
                    />
                  </Radio>
                </Row>
                <Row>
                  <Radio value={3}>
                    <Rate
                      defaultValue={3}
                      disabled
                      className={`ml-3 fs-2 text-primary`}
                    />
                  </Radio>
                </Row>
                <Row>
                  <Radio value={4}>
                    <Rate
                      defaultValue={2}
                      disabled
                      className={`ml-3 fs-2 text-primary`}
                    />
                  </Radio>
                </Row>
                <Row>
                  <Radio value={5}>
                    <Rate
                      defaultValue={1}
                      disabled
                      className={`ml-3 fs-2 text-primary`}
                    />
                  </Radio>
                </Row>
              </Radio.Group>
            </Col>
            <Col span={24}></Col>
          </Row>
        </Col>
        <Col span={24} className={`border-top border-light`}>
          <Row className={`mt-2`} justify="center">
            <Col span={12}>
              <Row justify="center">
                <Button
                  // onClick={alert("Canceled")}
                  className={`border-danger w-100 h-100 py-2 mr-3 rounded button-danger`}
                  ghost
                >
                  Cancel
                </Button>
              </Row>
            </Col>
            <Col span={12}>
              <Row justify="center">
                <Button
                  // onClick={alert("Filtered")}
                  className={`border-success w-100 h-100 py-2 ml-3 rounded button-success`}
                >
                  Filter
                </Button>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Menu>
  );

  const onSearch = (value) => console.log(value);

  return (
    <Row className={`ml-3 shadow-lg rounded`}>
      <Col>
        <Input
          placeholder="Write food-drink"
          className={`shadow-none bg-transparent border-0 rounded pl-3 pr-1`}
          suffix={
            <Row align="middle">
              <Dropdown
                overlay={filterComponent}
                trigger={["click"]}
                className={`py-1 px-3`}
              >
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <FilterOutlined className={`fs-2`} />
                </a>
              </Dropdown>
              <Button className={`fs-2 border-0 border-left py-1 px-3`}>
                <SearchOutlined />
              </Button>
            </Row>
          }
        />
      </Col>
    </Row>
  );
};

export default SearchAndFilterFoodAndDrink;
