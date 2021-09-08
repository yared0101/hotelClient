import {
    WifiOutlined,
    ExpandAltOutlined,
    PartitionOutlined,
    PictureOutlined,
    AimOutlined,
} from "@ant-design/icons";
import { Input, Select, Button, List } from "antd";
import { useState, useEffect } from "react";

const { TextArea } = Input;

const icons = {
    Sqft: <ExpandAltOutlined />,
    Wifi: <WifiOutlined />,
    Central: <AimOutlined />,
    Parking: <PartitionOutlined />,
    "City view": <PictureOutlined />,
};

const RoomAccessibility = ({ data, name }) => {
    let comp = null;

    let acListDefault = [];
    if (name == "edit") {
        acListDefault = Object.keys(data);
    }
    const [acValue, setAcValue] = useState("");
    const [acList, setAcList] = useState(acListDefault);

    const addAc = () => {
        if (!acList.includes(acValue)) setAcList([...acList, acValue]);
    };
    const removeAc = (id) => {
        setAcList(acList.filter((item, index) => id !== index));
    };

    if (name == "add" || name == "edit") {
        data = ["Wifi", "Central", "Free Parking", "Free Gym"];
        comp = (
            <div>
                <div className="row ">
                    <Select
                        className="flex1"
                        defaultValue="Accessibility List"
                        value={acValue}
                        onChange={(val) => setAcValue(val)}
                    >
                        {data.map((item, index) => (
                            <Select.Option key={index} value={item}>
                                {item}
                            </Select.Option>
                        ))}
                    </Select>
                    <Button onClick={addAc}>+ Add</Button>
                </div>
                <div>
                    <List
                        dataSource={acList}
                        renderItem={(item, index) => (
                            <List.Item
                                key={index}
                                actions={[
                                    <Button
                                        key={0}
                                        onClick={() => removeAc(index)}
                                    >
                                        Remove
                                    </Button>,
                                ]}
                            >
                                <List.Item.Meta
                                    avatar={<span>{icons[{ item }]}</span>}
                                    title={<b>{item}</b>}
                                />
                            </List.Item>
                        )}
                    ></List>
                </div>
            </div>
        );
    } else {
        comp = (
            <div className="pd row flex-wrap flex-space-ev">
                {Object.entries(data).map((item, index) => {
                    let value = "";
                    if (item[1] === true) {
                        value = [icons[item[0]], " " + item[0]];
                    } else if (item[1] === false) return false;
                    else {
                        value = [icons[item[0]], " " + item[1]];
                    }

                    return (
                        <span key={index} className="inline pd-hor">
                            {value}
                        </span>
                    );
                })}
            </div>
        );
    }
    return comp;
};
const RoomDescr = ({ name, data }) => {
    let comp = null;
    if (name == "add" || name == "edit") {
        let descrData = "";

        if (name == "edit") descrData = data;
        comp = (
            <div className="row">
                <TextArea
                    showCount
                    maxLength={300}
                    autoSize={{ minRows: 3, maxRows: 5 }}
                    value={data}
                    placeholder="Write Something"
                    className="flex1"
                />
            </div>
        );
    } else {
        comp = <p>{data}</p>;
    }
    return comp;
};
const RoomPrice = ({ name, data }) => {
    const [price, setPrice] = useState();
    const [discount, setDiscount] = useState();
    let comp = null;
    useEffect(() => {
        if (name == "add" || name == "edit") {
            let priceData = "";
            let discountData = "";
            if (name == "edit") {
                priceData = data.price;
                discountData = data.discount;
            }
            setPrice(priceData);
            setDiscount(discountData);
            comp = (
                <div className="inline row">
                    <Input
                        placeholder="Price"
                        value={price}
                        prefix="ETB"
                        suffix="/night"
                    />
                    <Input placeholder="Discount" value={discount} suffix="%" />
                </div>
            );
        } else {
            comp = (
                <div className="aln-r">
                    <div>
                        <small className="theme-bgy rad inline pd-hor bold">
                            {data.discount}% off
                        </small>
                    </div>
                    <h2 className="inline">
                        ETB <b className="">{data.price}</b>
                    </h2>
                    <small> / night</small>
                </div>
            );
        }
    }, []);

    return comp;
};

const RoomType = ({ name, room }) => {
    return (
        <div>
            <div className="mrg-ver-big">
                <h2 className="nomrg ">Accessibility</h2>
                <RoomAccessibility name={name} data={room.accessibility} />
            </div>

            <div className="mrg-ver-big">
                <h2>Room Description</h2>
                <RoomDescr name={name} data={room.description} />
            </div>

            <div className="mrg-ver-big">
                <RoomPrice
                    name={name}
                    data={{ price: room.price, discount: room.discount }}
                />
            </div>
        </div>
    );
};
export default RoomType;
