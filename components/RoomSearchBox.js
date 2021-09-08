import React, { Component } from "react";
import { Menu, Slider, Button, Input, Dropdown, Checkbox, Radio } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { Search } = Input;

export class RoomSearchBox extends Component {
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
        <Menu.ItemGroup title="View">
          <Radio.Group>
            <Radio value="inside">Inside</Radio>
            <Radio value="outside">Outside</Radio>
          </Radio.Group>
        </Menu.ItemGroup>
      </Menu>
    );
    return (
      <div className="row mrg-ver flexcntnt-cntr pd d-flex align-self-start">
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
