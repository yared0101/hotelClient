import { Row, Col, Button, Form, Input, InputNumber } from "antd";

export const FoodForm = ({ action = "Create", data = {} }) => {
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
  const [form] = Form.useForm();
  form.setFieldsValue({
    food: action === "Create" ? null : { ...data },
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
      <Form.Item name={["food", "title"]} label="Title">
        <Input placeholder="Try our new item" className={`rounded`} />
      </Form.Item>
      <Form.Item
        name={["food", "name"]}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="" className={`rounded`} />
      </Form.Item>
      <Form.Item
        name={["food", "price"]}
        label="Price"
        rules={[
          {
            type: "number",
            min: 0,
            max: 1000,
          },
          {
            required: true,
          },
        ]}
      >
        <InputNumber placeholder="birr" className={`rounded`} />
      </Form.Item>
      <Form.Item
        name={["food", "averageTime"]}
        label="Avg Time"
        rules={[
          {
            type: "number",
            min: 0,
            max: 200,
          },
        ]}
      >
        <InputNumber placeholder="min" className={`rounded`} />
      </Form.Item>
      <Form.Item name={["food", "description"]} label="Description">
        <Input.TextArea placeholder="Description. .  ." className={`rounded`} />
      </Form.Item>
      <Row gutter={10}>
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
      </Row>
    </Form>
  );
};
