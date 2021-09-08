import Link from "next/link";
import styles from "../styles/sideBar.module.css";
import { Row, Col, Menu, Space } from "antd";
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
} from "@ant-design/icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChartBar,
    faUsersCog,
    faUtensils,
    faBed,
    faConciergeBell,
    faHotel,
    faCogs,
    faOutdent,
} from "@fortawesome/free-solid-svg-icons";

const { SubMenu } = Menu;

export const SideBar = ({ iAm = "" }) => {
    const items = [
        {
            key: "dashboard",
            url: "/admin/dashboard",
            label: "Dashboard",
            icon: <FontAwesomeIcon icon={faChartBar} />,
        },
        {
            key: "manageEmployees",
            url: "/admin/manage-employees",
            label: "Manage Employees",
            icon: <FontAwesomeIcon icon={faUsersCog} />,
        },
        {
            key: "room",
            label: "Room",
            icon: <FontAwesomeIcon icon={faBed} />,
            children: [
                {
                    key: "manageRooms",
                    url: "/admin/manage-rooms",
                    label: "Manage Rooms",
                },
                {
                    key: "manageRoomTypes",
                    url: "/admin/manage-room-types",
                    label: "Manage Room Types",
                },
                {
                    key: "manageRoomServices",
                    url: "/admin/manage-room-services",
                    label: "Manage Room Services",
                },
                {
                    key: "viewReservedRooms",
                    url: "/admin/view-reserved-rooms",
                    label: "View Reserved Rooms",
                },
                {
                    key: "viewOrderedRoomServices",
                    url: "/admin/view-ordered-room-services",
                    label: "View Ordered Room Services",
                },
            ],
        },
        {
            key: "foodAndDrink",
            label: "Food & Drink",
            icon: <FontAwesomeIcon icon={faUtensils} />,
            children: [
                {
                    key: "manageFoodAndDrinks",
                    url: "/admin/manage-food-and-drinks",
                    label: "Manage Food & Drinks",
                },
                {
                    key: "viewOrderedFoodAndDrinks",
                    url: "/admin/view-ordered-food-and-drinks",
                    label: "View Ordered Food & Drinks",
                },
            ],
        },
        {
            key: "manageServices",
            url: "/admin/manage-services",
            label: "Manage Services",
            icon: <FontAwesomeIcon icon={faConciergeBell} />,
        },
        {
            key: "manageHall",
            url: "/admin/manage-hall",
            label: "Manage Hall",
            icon: <FontAwesomeIcon icon={faHotel} />,
        },
    ];

    const asdf = [
        {
            key: "dashboard - 1",
            url: "/admin/dashboard - 1",
            label: "Dashboard - 1",
            icon: <FontAwesomeIcon icon={faChartBar} />,
        },
        {
            key: "dashboard - 2",
            url: "/admin/dashboard - 2",
            label: "Dashboard - 2",
            icon: <FontAwesomeIcon icon={faChartBar} />,
        },
        {
            icon: <FontAwesomeIcon icon={faChartBar} />,
            key: "dashboard - 3",
            label: "Dashboard - 3",
            children: [
                {
                    key: "dashboard - 3 - 1",
                    url: "/admin/dashboard - 3 - 1",
                    label: "Dashboard - 3 - 1",
                },
                {
                    key: "dashboard - 3 - 2",
                    url: "/admin/dashboard - 3 - 2",
                    label: "Dashboard - 3 - 2",
                },
            ],
        },
        {
            key: "dashboard - 4",
            url: "/admin/dashboard - 4",
            label: "Dashboard - 4",
        },
    ];
    const returnParent = (key) => {
        const a = [];
        for (let i in items) {
            let element = items[i];
            if (element.children) {
                for (let j in element.children) {
                    let subElement = element.children[j];
                    if (subElement.key === key) return [element.key];
                }
            }
        }
    };
    return (
        <Row className={`${styles.main}`} align="middle">
            <Col span={24}>
                <Row>
                    <Menu
                        onClick={() => {}}
                        defaultOpenKeys={["sub1"]}
                        mode="inline"
                        defaultSelectedKeys={[iAm]}
                        defaultOpenKeys={returnParent(iAm)}
                    >
                        {items.map((item) => {
                            return item.children ? (
                                <SubMenu
                                    key={item.key}
                                    icon={item.icon}
                                    title={item.label}
                                >
                                    {item.children.map((subItems) => {
                                        return (
                                            <Menu.Item key={subItems.key}>
                                                <Link href={subItems.url}>
                                                    <a>
                                                        <span
                                                            className={`mr-2`}
                                                        >
                                                            {subItems.icon}
                                                        </span>
                                                        {subItems.label}
                                                    </a>
                                                </Link>
                                            </Menu.Item>
                                        );
                                    })}
                                </SubMenu>
                            ) : (
                                <Menu.Item key={item.key}>
                                    <Link href={item.url}>
                                        <a>
                                            <Space>
                                                {item.icon}
                                                {item.label}
                                            </Space>
                                        </a>
                                    </Link>
                                </Menu.Item>
                            );
                        })}
                    </Menu>
                    {/* {items.map((item, index) => {
            return (
              <Col span={24} key={item.key} className={`fs-1 fw-bold `}>
                <Link href={item.url}>
                  <a
                    className={`${styles.item} ${
                      iAm === item.key
                        ? styles["selected-item"]
                        : styles["not-selected-item"]
                    } rounded`}
                  >
                    {item.icon}
                    <span className={`ml-3 ${styles.label}`}>
                      {item.key == "manageHall"
                        ? "Manage Room Type"
                        : item.label}
                    </span>
                  </a>
                </Link>
              </Col>
            );
          })} */}
                </Row>
            </Col>
        </Row>
    );
};
