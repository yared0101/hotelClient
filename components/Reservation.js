import React, { Component } from "react";
import {
    CalendarOutlined,
    UsergroupAddOutlined,
    AimOutlined,
} from "@ant-design/icons";
import { DatePicker, InputNumber, Select, Dropdown, Button, Input } from "antd";
import styles from "../styles/style.module.css";

const { RangePicker } = DatePicker;

const ReserveProps = ({ updateViews, data, name }) => {
    let comp = "";
    if (name == "hall") {
        comp = (
            <div className="row">
                How Many Peoples?{" "}
                <InputNumber
                    min={10}
                    max={1000}
                    defaultValue={0}
                    bordered={false}
                />
            </div>
        );
    } else {
        comp = (
            <div>
                <span className="row flexalign-cntr pd-hor pd-sml">
                    <span>
                        <UsergroupAddOutlined />
                    </span>
                    <h3 className="pd-hor">Guests</h3>
                </span>
                <div className="row">
                    <div className="pd"></div>
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
                <div className="row">
                    <div className="pd">
                        <AimOutlined />
                    </div>
                    <div className="row pd">
                        <Select defaultValue="Floor" onChange={updateViews}>
                            {data.floors.map((floor) => (
                                <Select.Option value={floor}>
                                    {floor}
                                </Select.Option>
                            ))}
                        </Select>
                        <Select defaultValue="View">
                            {data.views.map((view) => (
                                <Select.Option value={view}>
                                    {view}
                                </Select.Option>
                            ))}
                        </Select>
                    </div>
                </div>
            </div>
        );
    }
    return comp;
};
export class Reservation extends Component {
    state = {
        startDate: null,
        endDate: null,
        guests: {
            adults: 0,
            childs: 0,
        },
    };
    render() {
        return (
            <div>
                <div>
                    <h3 className="mrg-btm-big">
                        Enter Valid Reservation Details
                    </h3>
                    <div className="row">
                        <span className="pd">
                            <CalendarOutlined />
                        </span>
                        <RangePicker
                            placeholder={["Check-in Date", "Check-out Date"]}
                        />
                    </div>
                    <br />
                    <ReserveProps
                        name={this.props.name}
                        data={this.props.data}
                        updateViews={this.props.updateViews}
                    />
                </div>
                <footer className="row flex-gap pd-ver">
                    {this.props.footer}
                    {this.props.type == "update" ? (
                        <Button>Update</Button>
                    ) : (
                        <Button>Complete Registration</Button>
                    )}
                </footer>
            </div>
        );
    }
}
