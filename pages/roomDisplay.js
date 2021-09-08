import React from "react";
import {
    Image,
    InputNumber,
    Checkbox,
    Dropdown,
    Menu,
    Input,
    Button,
    Space,
    DatePicker,
    Collapse,
    Slider,
} from "antd";
import {
    CalendarOutlined,
    DownOutlined,
    UsergroupAddOutlined,
} from "@ant-design/icons";
import styles from "../styles/style.module.css";

const { RangePicker } = DatePicker;
const { Panel } = Collapse;
const { Search } = Input;
const { SubMenu } = Menu;

export class GuestBookInfo extends React.Component {
    state = {
        startDate: null,
        endDate: null,
        guests: {
            adults: 0,
            childs: 0,
        },
    };
    render() {
        const dropdown = (
            <div className={styles.gBookDropdownBox}>
                <div className="row">
                    <span className="pd">
                        <CalendarOutlined />
                    </span>
                    <RangePicker
                        placeholder={["Check-in Date", "Check-out Date"]}
                    />
                </div>
                <br />
                <div className="row">
                    <span className="pd">
                        <UsergroupAddOutlined />
                    </span>
                    <div>
                        <h3>Guests</h3>
                        <div className="row">
                            <span className="pd">
                                Adults:{" "}
                                <InputNumber
                                    min={1}
                                    max={10}
                                    defaultValue={0}
                                    bordered={false}
                                />
                            </span>
                            <span className="pd">
                                Children:{" "}
                                <InputNumber
                                    min={1}
                                    max={10}
                                    defaultValue={0}
                                    bordered={false}
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
        return (
            <div
                className={"mrg-ver " + styles.gBookInfo}
                style={{ marginTop: "100px" }}
            >
                <div>
                    <Dropdown overlay={dropdown} trigger={["click"]}>
                        <div>
                            <Button
                                size={"large"}
                                onClick={(ev) => ev.preventDefault()}
                            >
                                <CalendarOutlined className="" />
                                Add Booking Info
                            </Button>
                        </div>
                    </Dropdown>
                </div>
            </div>
        );
    }
}

export class SearchBox extends React.Component {
    state = {};
    render() {
        const filter = (
            <Menu>
                <Menu.ItemGroup title="Price">
                    <Slider
                        range
                        defaultValue={[100, 2500]}
                        min={10}
                        max={10000}
                        step={100}
                    ></Slider>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Amenities">
                    <Checkbox>Wifi</Checkbox>
                    <Checkbox>Shower</Checkbox>
                </Menu.ItemGroup>
            </Menu>
        );
        return (
            <div className="row mrg-ver flexcntnt-cntr pd">
                <span>
                    <Search placeholder="Search Rooms" allowClear enterButton />
                </span>
                <span>
                    <Dropdown
                        overlay={filter}
                        placement="bottomRight"
                        trigger={["click"]}
                    >
                        <Button
                            className="ant-dropdown-link"
                            onClick={(e) => e.preventDefault()}
                        >
                            Filter <DownOutlined />
                        </Button>
                    </Dropdown>
                </span>
            </div>
        );
    }
}

export default class RoomDisplay extends React.Component {
    state = {
        list: [
            {
                id: 0,
                imgs: ["/assets/images/3.png", "/assets/images/2.png"],
                type: "Delux Room",
                availableMsg: "Only 1 Room left",
                beds: 1,
                sleeps: 2,
                description: "Room description in detail goes here",
                price: 1231,
                discount: 12,
            },
            {
                id: 1,
                imgs: ["/assets/images/3.png", "/assets/images/2.png"],
                type: "Delux Room",
                availableMsg: "Only 1 Room left",
                beds: 1,
                sleeps: 2,
                description: "Room description in detail goes here",
                price: 1231,
                discount: 12,
            },
            {
                id: 2,
                imgs: ["/assets/images/3.png", "/assets/images/2.png"],
                type: "Delux Room",
                availableMsg: "Only 1 Room left",
                beds: 1,
                sleeps: 2,
                description: "Room description in detail goes here",
                price: 1231,
                discount: 12,
            },
            {
                id: 3,
                imgs: ["/assets/images/1.png"],
                type: "Presidential Suit",
                availableMsg: "Only 1 Room left",
                beds: 1,
                sleeps: 2,
                description: "Room description in detail goes here",
                price: 1231,
                discount: 12,
            },
        ],
    };

    render() {
        return (
            <>
                <SearchBox />
                <GuestBookInfo />
                <div className="row flexcntnt-cntr flex-wrap">
                    {this.state.list.map((room) => (
                        <div
                            key={room.id}
                            className={"w-md test " + styles.roomDisp}
                        >
                            <div className={styles.imgCont}>
                                <Image.PreviewGroup>
                                    {room.imgs.map((src, index) => {
                                        return <Image key={index} src={src} />;
                                    })}
                                </Image.PreviewGroup>
                                <small className={styles.avs}>
                                    {room.availableMsg}
                                </small>
                            </div>
                            <div className={styles.descr}>
                                <h2>{room.type}</h2>
                                <div>
                                    {room.beds} beds | &nbsp;
                                    {room.sleeps} sleeps
                                </div>
                                <div className={styles.detail}>
                                    <Collapse
                                        bordered={false}
                                        defaultActiveKey={[]}
                                        ghost
                                    >
                                        <Panel header="Room Details" key="1">
                                            {room.description}
                                        </Panel>
                                    </Collapse>
                                </div>
                                <hr />
                                <div>ETB {room.price} / night</div>
                                <div className="row">
                                    <Button style={{ flex: 1 }} type="primary">
                                        BOOK NOW
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}
