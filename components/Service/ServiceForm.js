import { Row, Col, Button, Form, Input, InputNumber } from "antd";

export const ServiceForm = ({ action = "Create", data = {} }) => {
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
    drink: action === "Create" ? null : { ...data },
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
        name={["drink", "name"]}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="Service Name" className={`rounded`} />
      </Form.Item>
      <Form.Item name={["drink", "miniDescription"]} label="Description">
        <Input.TextArea
          rows={3}
          placeholder="Mini Description. .  ."
          className={`rounded`}
        />
      </Form.Item>
      <Form.Item
        name={["drink", "description"]}
        label="Description"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.TextArea
          rows={8}
          placeholder="Description. .  ."
          className={`rounded`}
        />
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
        {action === "create" ? (
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
