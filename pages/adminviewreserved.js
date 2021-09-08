import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Table, Tag, Button, Row } from "antd";
import RoomModal from "../components/RoomModal";
const AdminViewReserved = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [recordKey, setRecordKey] = useState();
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
        total: 100,
    });
    const [loading, setLoading] = useState(false);
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

    const roomData = [
        {
            room_type: "Single",
            floor: "1",
            inside: false,
            room_id: "single 100",
            active: true,
        },
        {
            room_type: "Double",
            floor: "2",
            inside: true,
            room_id: "101",
            active: false,
        },
    ];
    const [data, setData] = useState(roomData);
    const dataSource = data.map((element, index) => {
        return { ...element, key: index };
    });

    const columns = [
        {
            title: "Room Type",
            dataIndex: "room_type",
            key: "room_type",
        },
        {
            title: "Floor",
            dataIndex: "floor",
            key: "floor",
        },
        {
            title: "Room Id",
            dataIndex: "room_id",
            key: "room_id",
        },
        {
            title: "Inside",
            dataIndex: "inside",
            key: "inside",
            render: (inside) =>
                inside ? (
                    <Tag color="green">inside view</Tag>
                ) : (
                    <Tag color="red">outside view</Tag>
                ),
        },
        {
            title: "Active",
            dataIndex: "active",
            key: "active",
            render: (active) =>
                active ? (
                    <Tag color="green">active</Tag>
                ) : (
                    <Tag color="red">not active</Tag>
                ),
        },
        {
            title: "Action",
            key: "action",
            render: (_text, record) => (
                <Button
                    onClick={() => {
                        showModal(record.key);
                        console.log(recordKey);
                    }}
                    type="default"
                >
                    Edit
                </Button>
            ),
        },
    ];
    const handleTableChange = async (pagination, filters, sorter) => {
        console.log(pagination, filters, sorter);
    };
    return (
        <div>
            <div style={{ height: 100 }}></div>
            <Row justify="end">
                <Button
                    className="mr-5 mb-3"
                    type="default"
                    style={{
                        paddingLeft: 30,
                        paddingRight: 30,
                    }}
                    onClick={() => showModal(undefined)}
                >
                    <PlusOutlined /> Add New
                </Button>
            </Row>
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={pagination}
                loading={loading}
                onChange={handleTableChange}
            />
            <RoomModal
                title="Add Room"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                defaultValues={
                    recordKey == 0 || recordKey ? roomData[recordKey] : {}
                }
            />
        </div>
    );
};
export default AdminViewReserved;
