/* eslint-disable react/display-name */
import { useState } from "react";

import { Row, Col, Table, Modal, Typography, Button, Tag } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  CloseOutlined,
  CheckOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

import { OrderFoodAndDrinkForm } from "./OrderFoodAndDrinkForm";

const { Title } = Typography;

export const OrderedFoodAndDrinkManager = ({}) => {
  const [isOrderFoodAndDrinkModalVisible, setIsOrderFoodAndDrinkModalVisible] =
    useState(false);
  const [currentData, setCurrentData] = useState({});
  const [currentAction, setCurrentAction] = useState({});
  const orderedColumns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
      defaultSortOrder: "ascend",
      responsive: ["sm"],
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Ordered By",
      dataIndex: "orderedBy",
      key: "orderedBy",
      responsive: ["xxl"],
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      responsive: ["md"],
      render: (status) => {
        if (status === "served") {
          return <Tag color="green">{status}</Tag>;
        } else if (status === "pendding") {
          return <Tag color="blue">{status}</Tag>;
        } else if (status === "canceled") {
          return <Tag color="red">{status}</Tag>;
        }
      },
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      responsive: ["xl"],
    },
    {
      title: "Destination",
      dataIndex: "destination",
      key: "destination",
      responsive: ["lg"],
    },
    {
      align: "right",
      title: "Modification",
      key: "action",
      render: (row) => {
        return (
          <Row gutter={0} justify="end" className={`d-flex`}>
            <Col className={`p-0`}>
              <Button
                className={`button-success rounded py-2 px-2 border-0`}
                onClick={() => {
                  setCurrentData({ ...row });
                  setCurrentAction("Update");
                  setIsOrderFoodAndDrinkModalVisible(true);
                }}
              >
                <EditOutlined />
              </Button>
            </Col>
            <Col className={`p-0`}>
              <Button
                className={`button-danger rounded py-2 px-2 mx-1 border-0`}
                onClick={() => {
                  console.log(`delete(key: '${row.key}')`);
                }}
              >
                <DeleteOutlined />
              </Button>
            </Col>
            <Col className={`p-0`}>
              <Button
                className={`button-dark rounded py-2 px-2 border-0`}
                onClick={() => {
                  console.log(`disable(key: '${row.key}', )`);
                  row.available = !row.available;
                }}
              >
                {row.status === "served" ? (
                  <CheckOutlined />
                ) : row.status === "pendding" ? (
                  <LoadingOutlined />
                ) : (
                  <CloseOutlined />
                )}
              </Button>
            </Col>
          </Row>
        );
      },
    },
  ];
  const orderedData = [
    {
      key: "1",
      id: 1,
      name: "Food name 1",
      orderedBy: "The Hoe who ordered this",
      status: "pendding",
      time: "02:32",
      destination: "R-1203",
    },
    {
      key: "1",
      id: 1,
      name: "Food name 1",
      orderedBy: "The Hoe who ordered this",
      status: "canceled",
      time: "11:00",
      destination: "R-G201",
    },
    {
      key: "1",
      id: 1,
      name: "Food name 1",
      orderedBy: "The Hoe who ordered this",
      status: "served",
      time: "12:45",
      destination: "R-1203",
    },
  ];

  return (
    <>
      <Row
        justify="center"
        gutter={[0, 0]}
        className={`m-3 p-3 mt-4 rounded border border-light`}
      >
        <Col span={24}>
          <Row justify="space-between" align="middle">
            <Col className={`p-3 `}>
              <span className={`fs-2 fw-bold`}>Orderd Food/Drink</span>
            </Col>
            <Button
              className={`m-3 p-3 fs-1 rounded border-primary button`}
              onClick={() => {
                setCurrentData({});
                setCurrentAction("Create");
                setIsOrderFoodAndDrinkModalVisible(true);
              }}
            >
              Add Order
            </Button>
          </Row>
        </Col>
        <Col span={24}>
          <Table
            dataSource={orderedData}
            columns={orderedColumns}
            // pagination={pagination}
            // loading={loading}
            // onChange={handleTableChange}
          />
        </Col>
      </Row>
      <Modal
        title={<Title level={3}>Order Food/Drink</Title>}
        visible={isOrderFoodAndDrinkModalVisible}
        onOk={() => {
          setIsOrderFoodAndDrinkModalVisible(false);
        }}
        onCancel={() => {
          setIsOrderFoodAndDrinkModalVisible(false);
        }}
        footer={null}
      >
        <Row justify="center">
          <Col span={24}>
            <OrderFoodAndDrinkForm data={currentData} action={currentAction} />
          </Col>
        </Row>
      </Modal>
    </>
  );
};
