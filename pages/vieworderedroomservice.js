import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
    Table,
    Tag,
    Button,
    Row,
    Form,
    Popconfirm,
    Input,
    Switch,
    Space,
} from "antd";
import RoomModal from "../components/RoomModal";
const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === "switch" ? <Switch /> : <Input />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    valuePropName={inputType === "switch" ? "checked" : "value"}
                    style={{
                        margin: 0,
                    }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};
const ViewOrderedRoomService = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [recordKey, setRecordKey] = useState();
    const [form] = Form.useForm();
    const [count, setCount] = useState(2);
    const [editingKey, setEditingKey] = useState("");
    const showModal = (localRecordKey) => {
        if (localRecordKey == 0 || localRecordKey) {
            setRecordKey(localRecordKey);
            setIsModalVisible(true);
        } else {
            setRecordKey(undefined);
            setIsModalVisible(true);
        }
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const isEditing = (record) => record.key === editingKey;
    const edit = (record) => {
        console.log(record);
        form.setFieldsValue({
            orderId: "",
            name: "",
            status: false,
            ...record,
        });
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey("");
    };
    const handleAdd = () => {
        const newData = {
            key: count,
            name: "",
            active: "",
            description: "",
        };
        setEditingKey(count);
        setData([...data, newData]);
        setCount(count + 1);
    };
    const save = async (key) => {
        try {
            console.log(form.getFieldsValue());
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });
                setData(newData);
                setEditingKey("");
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey("");
            }
        } catch (errInfo) {
            console.log("Validate Failed:", errInfo);
        }
    };

    const roomData = [
        {
            orderId: "1",
            name: "Tooth brush",
            status: true,
        },
        {
            orderId: "2",
            name: "Tooth paste",
            status: false,
        },
    ];
    const [data, setData] = useState(roomData);
    const dataSource = data.map((element, index) => {
        return { ...element, key: index };
    });
    const columns = [
        {
            title: "Order Id",
            dataIndex: "orderId",
            key: "orderId",
            editable: true,
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            editable: true,
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) =>
                status ? (
                    <Tag color="green">Active</Tag>
                ) : (
                    <Tag color="red">Cancelled</Tag>
                ),
            editable: true,
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <Button
                            type="default"
                            onClick={() => save(record.key)}
                            style={{
                                marginRight: 8,
                            }}
                            size="small"
                        >
                            Save
                        </Button>
                        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                            <Button size="small" type="default">
                                cancel
                            </Button>
                        </Popconfirm>
                    </span>
                ) : (
                    <Space>
                        <Button
                            type="default"
                            disabled={editingKey !== ""}
                            onClick={() => edit(record)}
                        >
                            Edit
                        </Button>
                        <Button
                            type="default"
                            disabled={editingKey !== ""}
                            onClick={() => edit(record)}
                        >
                            Delete
                        </Button>
                    </Space>
                );
            },
        },
    ];
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: col.dataIndex === "status" ? "switch" : "text",
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    const handleTableChange = async (pagination, filters, sorter) => {
        console.log(pagination, filters, sorter);
    };
    return (
        <div>
            <div style={{ height: 100 }}></div>
            <Form form={form} component={false}>
                <Button
                    onClick={handleAdd}
                    type="default"
                    style={{
                        marginBottom: 16,
                    }}
                >
                    Add New <PlusOutlined />
                </Button>
                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    columns={mergedColumns}
                    dataSource={dataSource}
                    rowClassName="editable-row"
                    onChange={handleTableChange}
                />
            </Form>
            <RoomModal
                title="Add Room"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                pagination={false}
                //"0913172625"
                defaultValues={
                    recordKey == 0 || recordKey ? roomData[recordKey] : {}
                }
            />
        </div>
    );
};
export default ViewOrderedRoomService;
