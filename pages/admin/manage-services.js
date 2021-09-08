/* eslint-disable react/display-name */
import { Typography } from "antd";

import { SideBar } from "../../components/SideBar";
import { ServiceManager } from "../../components/Service/ServiceManager";

const { Title } = Typography;

export const ManageServices = ({}) => {
  return (
    <div
      className={`d-flex justify-content-center flex-fill`}
      style={{ paddingTop: "100px" }}
    >
      <div className={`mt-4`}>
        <SideBar iAm="manageServices" />
      </div>
      <div className={`d-flex flex-column flex-fill`}>
        {/* <Row
          justify="center"
          align="middle"
          gutter={[0, 0]}
          className={`m-3 p-3 mt-4 rounded border border-light bg-dark`}
          style={{ minHeight: "300px" }}
        >
          <Title className={`text-background`}>The graph will be here</Title>
        </Row> */}
        <ServiceManager />
      </div>
    </div>
  );
};

export default ManageServices;
