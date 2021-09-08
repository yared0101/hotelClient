import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Table, Tag, Button, Row, Space } from "antd";
import RoomModal from "../components/RoomModal";
const AdminRoom = () => {
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
            reservation: [
                { from: "01/02/2020", to: "04/02/2020", user: "user102" },
                { from: "01/02/2020", to: "04/02/2020", user: "user103" },
                { from: "01/02/2020", to: "04/02/2020", user: "user104" },
            ],
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
            responsive: ["sm"],
            key: "room_type",
        },
        {
            title: "Floor",
            dataIndex: "floor",
            responsive: ["sm"],
            key: "floor",
        },
        {
            title: "Room Id",
            dataIndex: "room_id",
            key: "room_id",
        },
        {
            title: "Reservation",
            dataIndex: "reservation",
            key: "reservation",
            sorter: true,
            responsive: ["sm"],
            filters: [
                { text: "Reserved", value: "reserved" },
                { text: "Not Reserved", value: "notReserved" },
            ],
            render: (reservation) => {
                const reserveDisplay = reservation ? (
                    <Tag color="green">Reserved</Tag>
                ) : (
                    <Tag color="red">Not Reserved Yet</Tag>
                );
                return <div>{reserveDisplay}</div>;
            },
        },
        {
            title: "Inside",
            dataIndex: "inside",
            key: "inside",
            responsive: ["md"],
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
            responsive: ["md"],
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
                <Space>
                    <Button
                        onClick={() => {
                            showModal(record.key);
                        }}
                        type="default"
                    >
                        Edit
                    </Button>
                    <Button
                        onClick={() => {
                            console.log(record.room_id);
                        }}
                        type="default"
                        className="border-danger button-danger"
                    >
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];
    const handleTableChange = async (pagination, filters, sorter) => {
        console.log(pagination, filters, sorter);
    };
    const expandedRowRender = (row) => {
        const columns = [
            { title: "Reservers", dataIndex: "user", key: "user" },
            {
                title: "From",
                dataIndex: "from",
                key: "from",
                responsive: ["sm"],
            },
            { title: "To", dataIndex: "to", key: "to", responsive: ["sm"] },
            {
                title: "Action",
                dataIndex: "action",
                key: "action",
                render: (_text, record) => (
                    <Button
                        onClick={() => {
                            console.log(record.room_id);
                        }}
                        type="default"
                    >
                        Edit
                    </Button>
                ),
            },
        ];

        const { reservation } = row;
        const data = reservation
            ? reservation.map((element, index) => ({ ...element, key: index }))
            : [];
        return <Table columns={columns} dataSource={data} pagination={false} />;
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
                expandable={{ expandedRowRender }}
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
export default AdminRoom;
