import { Row, Col} from 'antd'
const AuthLayout=({cardTag})=>{
    const HeadStyle = {height:'100vh', display:'flex', flexDirection:'column'};
    return(
        <div style={HeadStyle}>
            <Row style={{height:100}}></Row>
            <Row>
                <Col lg={{span:8,offset:8}} md={{span:12,offset:6}} sm={{span:14,offset:5}} xs={{span:22,offset:1}}>
                    {cardTag}
                </Col>
            </Row>
        </div>
    )
}
export default AuthLayout;