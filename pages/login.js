import {useState} from 'react'
import Link from 'next/link'
import { Input, Card, Row, Col, Button, Space, Checkbox} from 'antd'
import AuthLayout from '../components/AuthLayout'
import {errorPhone,errorPass,errorEmail} from '../public/validation/validation'
export default function Login() {
  const [phoneNumber,setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [tabKey,setTabKey] = useState('tab1')
  
  const submit=()=>{
    console.log(tabKey)
  }
  const tabList = [
    {
      key: 'tab1',
      tab: 'Email',
    },
    {
      key: 'tab2',
      tab: 'Phone Number',
    },
  ];
  const contentList = {
      tab1: 
      <Space direction='vertical' style={{width:"100%"}}>
          Email
          <Input name="email" value={email} placeholder="Email" type='email'  onChange={({target})=>setEmail(target.value)}></Input>
          {errorEmail(email)}
      </Space>,
      tab2: 
      <Space direction='vertical' style={{width:"100%"}}>
          Phone Number
          <div>
            <Input name='phoneNumber' value={phoneNumber} placeholder="Phone Number" onChange={({target})=>setPhoneNumber(target.value)}></Input>
            {errorPhone(phoneNumber)}
          </div>
      </Space>,
  };
  const cardTag=<Card
    tabList={tabList}
    onTabChange={key=>setTabKey(key)}
    hoverable
    style={{borderRadius:'1rem',borderColor:'rgb(253,126,20)'}}
    title={<h2 className="yaredPrimary">Login</h2>}
  >
    <Space direction='vertical' size="large" style={{width:"100%"}}>
      {contentList[tabKey]}
      <Space direction='vertical' style={{width:"100%"}}>
        Password
        <Input placeholder="Password" value={password} type="password" onChange={({target})=>{setPassword(target.value)}}></Input>
        {errorPass(password)}
      </Space>
      <Space direction='vertical' style={{width:"100%"}}>
        <Checkbox>Remember My Login</Checkbox>
        <Row>
          <Col offset={14} style={{alignContent:'center',justifyContent:'center'}}>
            <Button type="default"
              onClick={()=>submit()}
            >
              Login
            </Button>
          </Col>
        </Row>
      </Space>
      <Space direction='vertical' style={{width:"100%"}}>
        <div style={{textAlign:'center',width:'100%'}}>
          <Link href="/forgotpassword">Forgot My Password?</Link>
        </div>
        <div style={{textAlign:'center',width:'100%'}}>
          <Link href="/register">Create New Account</Link>
        </div>
      </Space>
    </Space>
  </Card>
  return (
    <AuthLayout cardTag={cardTag} />
  );
}
  