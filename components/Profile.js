import { Tabs, Col, Input, Button, Row, Typography, Upload, Select, Divider } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";
import { EnvironmentFilled, MailFilled, PhoneFilled, UploadOutlined } from "@ant-design/icons";
import styles from '../styles/style.module.css';

const { Paragraph } = Typography;
const { TabPane } = Tabs;
const { TextArea } = Input;
const { Option } = Select;

const TransInput = ({ placeholder = "", name = "", onChange, children, type }) => {
  let elem = <></>;

  if (name == "edit") {
    elem = (
      <div>
        <small>
          {(placeholder.icon)}
          {" "}
          {placeholder.value}
        </small>
        <Paragraph className="bold"
          editable={{ onChange: onChange }}>
          {children}
        </Paragraph>
      </div>
    )
  } else if (name == "add") {
    elem = (
      <div>
        <Input type={type || "text"} placeholder={placeholder.value}
          style={{
            marginTop: 4,
            marginBottom: 4
          }} />
      </div>
    )
  } else {
    elem = (
      <div>
        <small>
          {(placeholder.icon)}
          {" "}
          {placeholder.value}
        </small>
        <Paragraph className="bold">
          {children}
        </Paragraph>
      </div>
    )
  }


  return elem;
}

const ProfHeader = (props) => {
  const [name, setName] = useState(props.data.name);
  const [position, setPosition] = useState(props.data.position);

  return (
    <Row gutter={16} className={props.className}>
      <Col span={8}>
        <Row>
          <div class='str rltv'>
            <img src="/assets/images/3.png"
              class='str'
            />
          </div>
        </Row>
        <Row className='rltv'>

          <div className='str theme-bgy aln-cntr'>
            <Upload name='image'
              className="aln-cntr pntr str">
              <span class='pd-hor inline' ><UploadOutlined /></span>
            </Upload>
          </div>
        </Row>
      </Col>

      <Col span={16}>
        <Row>
          <h3>
            <TransInput name="view" type={props.type}
              placeholder={{ value: "Name" }}>
              {name}
            </TransInput>
            <TransInput name="view" type={props.type}
              placeholder={{ value: "Position" }}>
              {position}
            </TransInput>
          </h3>
        </Row>
      </Col>
    </Row>

  )
}
const PersonalInfo = (props) => {
  const [name, setName] = useState(props.data.name);
  const [birthDate, setBirthDate] = useState(props.data.birthDate);
  const [gender, setGender] = useState(props.data.gender);
  const [email, setEmail] = useState(props.data.email);
  const [phone, setPhone] = useState(props.data.phone);
  const [address, setAddress] = useState(props.data.address);
  return (
    <div className={props.className}>
      <Row gutter="40">
        <Col>
          <TransInput name={props.name} type={props.type} placeholder={{ value: "Name" }}
            onChange={setName}>
            {name}
          </TransInput>
          <TransInput name={props.name} type={props.type} placeholder={{ value: "Gender" }}
            onChange={setGender}>
            {gender}
          </TransInput>
          <TransInput name={props.name} type={props.type} placeholder={{ value: "Birth Date" }}
            onChange={setBirthDate}>
            {birthDate}
          </TransInput>
        </Col>
        <Col>
          <TransInput name={props.name} type={props.type}
            placeholder={{ icon: <MailFilled />, value: " Email" }}
            onChange={setEmail}>
            {email}
          </TransInput>
          <TransInput name={props.name} type={props.type}
            placeholder={{ icon: <PhoneFilled />, value: " Phone" }}
            onChange={setPhone}>
            {phone}
          </TransInput>
          <TransInput name={props.name} type={props.type}
            placeholder={{ icon: <EnvironmentFilled />, value: " Address" }}
            onChange={setAddress}>
            {address}
          </TransInput>
        </Col>
      </Row>
    </div>
  )
}
const EmploymentInfo = (props) => {
  const [department, setDepartment] = useState(props.data.department);
  const [position, setPosition] = useState(props.data.position);
  const [salary, setSalary] = useState(props.data.salary);

  return (
    <div className={props.className + " str"}>
      <div className="row flex-wrap justifyContent-str flex-space-ev" >
        <TransInput name={props.name} type={props.type}
          placeholder={{ value: "Department" }}
          onChange={setDepartment}>
          {department}
        </TransInput>
        <TransInput name={props.name} type={props.type}
          placeholder={{ value: "Position" }}
          onChange={setPosition}>
          {position}
        </TransInput>
        <TransInput name={props.name} type={props.type}
          placeholder={{ value: "Salary" }}>
          {salary}
        </TransInput>
      </div>
    </div>
  )
}
const ExtraInfo = (props) => {
  const [bankNo, setBankNo] = useState(props.data.bankNo);
  const [name, setName] = useState(props.data.emergencyContact.name);
  const [phone, setPhone] = useState(props.data.emergencyContact.phone);
  return (
    <div>
      <Col>
        <TransInput name={props.name} type={props.type}
          placeholder={{ value: "Bank Account Number" }}
          onChange={setBankNo}>
          {bankNo}
        </TransInput>
        <h3 style={{ color: "#aaa" }}>Emergency Contact</h3>
        <TransInput name={props.name} type={props.type}
          placeholder={{ value: "Name" }}
          onChange={setName}>
          {name}
        </TransInput>
        <TransInput name={props.name} type={props.type}
          placeholder={{ value: "Phone" }}
          onChange={setPhone}>
          {phone}
        </TransInput>
      </Col>
    </div>
  )
}
const AdminPanel = (props) => {
  return (
    <div>
      <Col>
        <TextArea placeholder="Write Something" rows={2} />
        <Button>Notify</Button>
        <Button>Warn</Button>
        <Button>Alert</Button>
      </Col>
      <Divider />
      <Col>
        <h3 style={{ color: "#aaa" }}>Account Control</h3>
        <Row span={6}>
          <Select defaultValue="Take Actions">
            <Option value="Disable">Disable</Option>
            <Option value="Block">Block</Option>
            <Option value="Remove">Remove</Option>
          </Select>
          <Button>Execute</Button>
        </Row>
      </Col>
    </div>
  )
}

const Profile = (props) => {
  let data = props.data;

  let actionBtn = "";
  if (props.name != "view")
    actionBtn = <Button type="primary" size="large" className="str">{props.name}</Button>


  // personal, employment details, bank details
  return (
    <Modal {...props.modalProps} footer="">
      <div className={styles.profileView}>
        <ProfHeader name={props.name} data={{
          name: data.personal.name,
          position: data.employment.position
        }} />
        <Tabs defaultActiveKey="1" className="pd">
          <TabPane tab="General Info" key="1" className="aln-cntr mrg-top">
            <div className="str pd aln-lft">
              <h3 style={{ color: "#aaa" }}>Employment Info</h3>
            </div>
            <EmploymentInfo name={props.name} data={data.employment} className="inline aln-lft" />
            <div className="str pd aln-lft">
              <h3 style={{ color: "#aaa" }}>Personal Info</h3>
            </div>
            <PersonalInfo name={props.name} data={data.personal} className="inline aln-lft" />
            <Divider />
            {actionBtn}
          </TabPane>
          <TabPane tab="Extra Info" key="2">
            <ExtraInfo name={props.name} data={data.extra} />
            <Divider />
            {actionBtn}
          </TabPane>
          <TabPane tab="Admin Actions" key="3">
            <AdminPanel name={props.name} />
            <Divider />
          </TabPane>
        </Tabs>


      </div>
    </Modal >
  )
}

export default Profile;