import { useState } from "react";
import { Modal, Input, Select, Space, Checkbox, Form, Button } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
const { Option } = Select;

const RoomModal = ({ title, visible, onCancel, onOk, defaultValues }) => {
    const [form] = Form.useForm();
    defaultValues = defaultValues || {};
    const [floor, setFloor] = useState(0);
    const onFinish = (values) => {
        console.log("Received values of form:", values);
    };
    function handleChange(value) {
        console.log(`selected ${value}`);
    }
    const roomTypeOptions = [
        "Single",
        "Double",
        "Triple",
        "King Sized",
        "Deluxe",
    ].map((element, index) => (
        <Option key={index} value={element}>
            {element}
        </Option>
    ));
    form.resetFields();
    defaultValues.room_id
        ? form.setFieldsValue({
              room_id: defaultValues.room_id,
              room_type: defaultValues.room_type,
              active: defaultValues.active,
              inside: defaultValues.inside,
              floor: defaultValues.floor,
          })
        : {};
    return (
        <Modal
            title={title}
            visible={visible}
            onOk={onOk}
            onCancel={() => {
                form.resetFields();
                onCancel();
            }}
            footer={null}
        >
            <Form
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 18,
                }}
                form={form}
                name="dynamic_form_nest_item"
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    name="room_type"
                    label="Room Type"
                    rules={[
                        {
                            required: true,
                            message: "Room type needed",
                        },
                    ]}
                >
                    <Select style={{ width: "100%" }} onChange={handleChange}>
                        {roomTypeOptions}
                    </Select>
                </Form.Item>
                <Form.Item
                    name="floor"
                    label="Floor"
                    rules={[
                        {
                            required: true,
                            message: "Missing Floor data",
                        },
                    ]}
                >
                    <Input
                        type="number"
                        onChange={({ target }) => {
                            setFloor(target.value);
                        }}
                    ></Input>
                </Form.Item>
                {!defaultValues.room_id ? (
                    <Form.List
                        name="rooms"
                        rules={[
                            {
                                validator: async (_, rooms) => {
                                    if (!rooms || rooms.length < 1) {
                                        console.log("error");
                                        return Promise.reject(
                                            new Error("At least 1 Room")
                                        );
                                    }
                                },
                            },
                        ]}
                    >
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(
                                    ({ key, name, fieldKey, ...restField }) => (
                                        <Space
                                            key={key}
                                            style={{
                                                display: "flex",
                                                marginBottom: 8,
                                            }}
                                            align="baseline"
                                        >
                                            <Form.Item
                                                {...restField}
                                                name={[name, "id"]}
                                                initialValue={`${floor}${
                                                    fields.length - 1
                                                }`}
                                                label={"id"}
                                                fieldKey={[fieldKey, "id"]}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message:
                                                            "id is necessary",
                                                    },
                                                ]}
                                            >
                                                <Input placeholder="id" />
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                valuePropName="checked"
                                                name={[name, "inside"]}
                                                fieldKey={[fieldKey, "inside"]}
                                                initialValue={true}
                                            >
                                                <Checkbox>Inside</Checkbox>
                                            </Form.Item>
                                            <Form.Item
                                                {...restField}
                                                valuePropName="checked"
                                                name={[name, "active"]}
                                                fieldKey={[fieldKey, "active"]}
                                                initialValue={true}
                                            >
                                                <Checkbox>Active</Checkbox>
                                            </Form.Item>
                                            <MinusCircleOutlined
                                                onClick={() => remove(name)}
                                            />
                                        </Space>
                                    )
                                )}
                                <Form.Item align="center">
                                    <Button
                                        type="default"
                                        onClick={() => add()}
                                        block
                                        icon={<PlusOutlined />}
                                    >
                                        Add Room
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>
                ) : (
                    <Space
                        style={{
                            display: "flex",
                            marginBottom: 8,
                        }}
                        align="baseline"
                    >
                        <Form.Item
                            name={"room_id"}
                            label={"id"}
                            rules={[
                                {
                                    required: true,
                                    message: "id is necessary",
                                },
                            ]}
                        >
                            <Input placeholder="id" />
                        </Form.Item>
                        <Form.Item
                            valuePropName="checked"
                            name={"inside"}
                            fieldKey={"inside"}
                        >
                            <Checkbox>Inside</Checkbox>
                        </Form.Item>
                        <Form.Item valuePropName="checked" name={"active"}>
                            <Checkbox>Active</Checkbox>
                        </Form.Item>
                    </Space>
                )}
                <Form.Item justify="end">
                    <Button
                        type="default"
                        style={{ float: "right", marginRight: 10 }}
                        htmlType="submit"
                    >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};
export default RoomModal;
