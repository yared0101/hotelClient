/* eslint-disable react/display-name */
import { Typography } from "antd";

import { MainLayout } from "../../components/MainLayout";
import { SideBar } from "../../components/SideBar";
import { FoodManager } from "../../components/FoodAndDrink/FoodManager";
import { DrinkManager } from "../../components/FoodAndDrink/DrinkManager";

const { Title } = Typography;

export const ManageFoodAndDrinks = ({}) => {
  return (
    <div
      className={`d-flex justify-content-center flex-fill`}
      style={{ paddingTop: "100px" }}
    >
      <div className={`mt-4`}>
        <SideBar iAm="manageFoodAndDrinks" />
      </div>
      <div className={`d-flex flex-column flex-fill`}>
        {/* <Row
          justify="center"
          align="middle"
          gutter={[0, 0]}
          className={`m-3 p-3 mt-4 rounded border border-light bg-dark`}
          style={{ minHeight: "300px" }}
        >
          <Title className={`text-background`}>Place for the graphs</Title>
        </Row> */}
        <FoodManager />
        <DrinkManager />
      </div>
    </div>
  );
};

ManageFoodAndDrinks.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <SideBar items={items} />
      <div className={`d-flex flex-fill`}>{page}</div>
    </MainLayout>
  );
};

export default ManageFoodAndDrinks;
