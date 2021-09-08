import React, { useState } from "react";
import { Image, Menu, Button, Collapse, Divider } from "antd";
import styles from "../styles/style.module.css";
import { RoomSearchBox } from "../components/RoomSearchBox";
import RoomDetail from "../components/RoomDetail";
import Link from "next/link";
import { Reservation } from "../components/Reservation";

const { Panel } = Collapse;
const { SubMenu } = Menu;

const BookButton = ({ item, type = "" }) => {
    const [roomDetailVisible, setRoomDetailVisible] = useState(false);

    const showModal = () => {
        setRoomDetailVisible(true);
    };
    const handleOk = () => {
        setRoomDetailVisible(false);
    };
    const handleCancel = () => {
        setRoomDetailVisible(false);
    };

    const modalProps = {
        visible: roomDetailVisible,
        onOk: handleOk,
        onCancel: handleCancel,
    };

    return (
        <div>
            {type == "booked" ? (
                <div className="row flex-gap">
                    <Button onClick={showModal} type="default">
                        Update Reservation
                    </Button>
                    <Button type="default">Remove</Button>
                </div>
            ) : (
                <div className="row">
                    <Button
                        onClick={showModal}
                        style={{ flex: 1 }}
                        type="primary"
                    >
                        BOOK NOW
                    </Button>
                </div>
            )}
            <RoomDetail item={item} type={type} modalProps={modalProps} />
        </div>
    );
};

const RoomDisplayCont = ({ room, type = "" }) => {
    return (
        <div key={room.id} className={`w-md test border-0  ${styles.roomDisp}`}>
            <div className={styles.imgCont}>
                <Image.PreviewGroup>
                    {room.imgs.map((src) => {
                        return <Image key={src} src={src} alt="alt" />;
                    })}
                </Image.PreviewGroup>
                {type == "" ? (
                    <small className={styles.avs}>
                        Rooms Left : {room.rooms.length}
                    </small>
                ) : (
                    ""
                )}
            </div>
            <div className={styles.descr}>
                <h2>{room.type}</h2>
                <div>
                    {room.beds} beds | &nbsp;
                    {room.sleeps} sleeps
                </div>
                <div className={styles.detail}>
                    <Collapse bordered={false} defaultActiveKey={[]} ghost>
                        <Panel header="Room Details" key="1">
                            {room.description}
                        </Panel>
                    </Collapse>
                </div>
                <hr />
                <div>ETB {room.price} / night</div>
                <BookButton item={room} type={type} />
            </div>
        </div>
    );
};

const RoomDisplay = () => {
    let listData = [
        {
            id: 0,
            imgs: ["/assets/images/3.png", "/assets/images/2.png"],
            type: "Delux Room",
            rooms: [
                {
                    no: 119,
                    floor: 2,
                    view: "inside",
                },
                {
                    no: 102,
                    floor: 1,
                    view: "outside",
                },
            ],
            available: true,
            beds: 1,
            sleeps: 2,
            description: "Room description in detail goes here",
            price: 1231,
            discount: 12,
            accessibility: {
                Sqft: "308 sq ft",
                "City view": true,
                Central: true,
                Wifi: true,
                Parking: true,
            },
        },
    ];

    const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
    const [booking, setBooking] = useState([1, 2]);

    return (
        <div
            style={{ paddingTop: "100px" }}
            className={`d-flex flex-column flex-fill`}
        >
            <RoomSearchBox />
            <div className="pd-big">
                <h1>My Bookings</h1>
                <div>
                    {booking.map((_) => {
                        const room = listData[0];
                        return <RoomDisplayCont room={room} type="booked" />;
                    })}
                </div>
                <Divider />
            </div>
            {/* <Profile /> */}
            <div className="row flexcntnt-cntr flex-wrap d-flex justify-content-center">
                {/* {this.state.list.map((room) => ( */}
                {list.map((_) => {
                    const room = listData[0];
                    return <RoomDisplayCont room={room} />;
                })}
            </div>
        </div>
    );
};

export default RoomDisplay;
