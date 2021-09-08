import { Row, Col, Button, Form, Input, InputNumber } from "antd";

export const OrderFoodAndDrinkForm = ({ action = "Create", data = {} }) => {
  const layout = {
    labelCol: {
      span: 6,
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
  const onFill = () => {
    form.setFieldsValue({
      order: {
        ...data,
      },
    });
  };

  const [form] = Form.useForm();
  form.setFieldsValue({
    order: {
      ...data,
    },
  });
  return (
    <Form
      form={form}
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      size="large"
    >
      <Form.Item
        name={["order", "name"]}
        label="Ordered Name"
        rules={[{ required: true }]}
      >
        <Input placeholder="Food/Drink Name" className={`rounded`} />
      </Form.Item>
      <Form.Item
        name={["order", "orderedBy"]}
        label="Ordered By"
        rules={[{ required: true }]}
      >
        <Input placeholder="Ordered By" className={`rounded`} />
      </Form.Item>
      <Form.Item
        name={["order", "destination"]}
        label="Destination"
        rules={[{ required: true }]}
      >
        <Input placeholder="Roon-ID" className={`rounded`} />
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
            {action}
          </Button>
        </Col>
        {action === "Create" ? (
          <Col span={8}>
            <Button
              className={`rounded w-100 border-success button-success`}
              type="link"
              htmlType="button"
              onClick={onSubmitandAdd}
            >
              {action} and add
            </Button>
          </Col>
        ) : null}
      </Row>
    </Form>
  );
};
