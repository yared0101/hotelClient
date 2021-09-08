import { Calendar, Button, Collapse, Select } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { Component, useEffect, useState } from "react";
import { Reservation } from "./Reservation";
import RoomType from "./RoomType";

const { Panel } = Collapse;

const DetailView = ({ changePage, room }) => {
    const handleChange = () => {};
    const dateCellRender = (value) => {};
    const disabledDate = (value) => {
        console.log(value);
    };

    return (
        <div>
            {room.rooms.length > 0
                ? room.rooms.length + " Rooms Left"
                : "None Available Now"}
            <Collapse>
                <Panel
                    header="View Availability Calendar"
                    style={{ padding: 5 }}
                >
                    <Calendar
                        fullscreen={false}
                        onPanelChange={handleChange}
                        disabledDate={disabledDate}
                        dateCellRender={dateCellRender}
                    />
                </Panel>
            </Collapse>

            <RoomType room={room} />
            <div>
                <Button
                    type="primary"
                    onClick={() => changePage("reservation")}
                >
                    Reserve
                </Button>
            </div>
        </div>
    );
};

const PageDisp = (props) => {
    let component = null;

    props.children.map((page) => {
        console.log(props.url + " ." + page.props.path);
        if (props.url == page.props.path) {
            component = page.props.component;
            return true;
        }
    });

    return component;
};

const RoomDetail = ({ item, modalProps, type }) => {
    const room = item;

    const [url, setUrl] = useState(
        type == "booked" ? "reservation" : "detailView"
    );

    const changePage = (url) => {
        setUrl(url);
    };

    const [floors, setFloors] = useState([]);
    const [views, setViews] = useState(["inside", "outside"]);

    useEffect(() => {
        room.rooms.map((room) => {
            if (!floors.includes(room.floor))
                setFloors(() => [...floors, room.floor]);
        });
    });

    const updateViews = (floorValue) => {
        let temp = [];
        room.rooms.map((room) => {
            if (!temp.includes(room.view)) {
                if (room.floor == floorValue) temp.push(room.view);
            }
        });
        setViews(temp);
    };

    const reserveProps = {
        updateViews: updateViews,
        data: {
            views: views,
            floors: floors,
        },
    };

    const detailView = <DetailView room={room} changePage={changePage} />;
    const reservation = (
        <Reservation
            {...reserveProps}
            changePage={changePage}
            type={type == "booked" ? "update" : ""}
            footer={
                type == "booked" ? (
                    ""
                ) : (
                    <Button onClick={() => changePage("detailView")}>
                        Back <small className="pd-sml">to room detail</small>
                    </Button>
                )
            }
        />
    );
    return (
        <Modal {...modalProps} footer="">
            <PageDisp url={url}>
                <div path="detailView" component={detailView} />
                <div path="reservation" component={reservation} />
            </PageDisp>
        </Modal>
    );
};

export default RoomDetail;
