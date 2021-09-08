import {
  Row,
  Form,
  Input,
  Typography,
  Radio,
  Rate,
  Slider,
  Col,
  Button,
} from "antd";

const { Title } = Typography;

export const FoodFilterForm = () => {
  const layout = {
    labelCol: {
      span: 24,
    },
    wrapperCol: {
      span: 24,
    },
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };
  const onSubmitandAdd = () => {
    onFinish(form.getFieldsValue());
    form.resetFields();
  };
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      size="large"
      className={`p-3`}
    >
      <Title className={`mb-0`} level={3}>
        Refine Results
      </Title>
      <Form.Item name={["filter", "title"]} label="Search String">
        <Input placeholder="Search String" className={`rounded`} />
      </Form.Item>
      <Form.Item name={["filter", "fasting"]} label="Fasting Status">
        <Radio.Group defaultValue="a" size="large">
          <Radio.Button value="all">All</Radio.Button>
          <Radio.Button value="fasting">Fasting</Radio.Button>
          <Radio.Button value="nonFasting">Non-Fasting</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item name={["filter", "priceRange"]} label="Price Range">
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
          defaultValue={[20, 40]}
        />
      </Form.Item>
      <Form.Item name={["filter", "averageTime"]} label="Avg Time">
        <Radio.Group>
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
      </Form.Item>
      <Row gutter={10} justify="end">
        <Col span={8}>
          <Button
            className={`rounded w-100 border-dark button-dark`}
            htmlType="button"
            onClick={onReset}
          >
            Reset
          </Button>
        </Col>
        <Col span={8}>
          <Button
            className={`rounded w-100 border-primary button`}
            htmlType="submit"
          >
            Filter
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
