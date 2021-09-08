/* eslint-disable react/display-name */
import { useState } from "react";
import { Row, Col, Table, Button, Modal, Typography, Tag } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  CloseOutlined,
  CheckOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import { FoodAndDrinkImageUploader } from "./FoodAndDrinkImageUploader";
import { FoodForm } from "./FoodForm";

const { Title } = Typography;

export const FoodManager = ({}) => {
  const [isFoodModalVisible, setIsFoodModalVisible] = useState(false);
  const [currentData, setCurrentData] = useState({});
  const [currentAction, setCurrentAction] = useState("");

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) =>
        a.name.toLowerCase() < b.name.toLowerCase()
          ? -1
          : +(a.name.toLowerCase() > b.name.toLowerCase()),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      responsive: ["xxl"],
    },
    {
      title: "Available",
      dataIndex: "available",
      key: "available",
      responsive: ["md"],
      sorter: (a, b) => a.available > b.available,
      render: (available) => {
        if (available) {
          return <Tag color="red">Unvailable</Tag>;
        }
        return <Tag color="green">Available</Tag>;
      },
    },
    {
      title: "price",
      dataIndex: "price",
      key: "price",
      responsive: ["sm"],
      sorter: (a, b) => a.price - b.price,
    },
    {
      align: "right",
      title: "Number of Sales",
      dataIndex: "numberOfSales",
      key: "numberOfSales",
      responsive: ["lg"],
      sorter: (a, b) =>
        a.numberOfSales > b.numberOfSales
          ? 1
          : a.numberOfSales === b.numberOfSales
          ? 0
          : -1,
    },
    {
      align: "right",
      title: "Modification",
      key: "action",
      render: (row) => {
        return (
          <Row gutter={0} justify="end" className={`d-flex `}>
            <Col span={8}>
              <Button
                className={`button-success border-success rounded py-2 px-3`}
                onClick={() => {
                  setCurrentData({ ...row });
                  setCurrentAction("Update");
                  setIsFoodModalVisible(true);
                }}
              >
                <EditOutlined />
              </Button>
            </Col>
            <Col span={8}>
              <Button
                className={`button-danger border-danger rounded py-2 px-3`}
                onClick={() => {
                  console.log(`delete(key: '${row.key}')`);
                }}
              >
                <DeleteOutlined />
              </Button>
            </Col>
            <Col span={8}>
              <Button
                className={`button-dark border-dark rounded py-2 px-3`}
                onClick={() => {
                  console.log(`disable(key: '${row.key}')`);
                  row.available = !row.available;
                }}
              >
                {row.available ? <CheckOutlined /> : <CloseOutlined />}
              </Button>
            </Col>
          </Row>
        );
      },
    },
  ];
  const dataSource = [
    {
      key: 9876543,
      id: 1234,
      name: "Aliquam Auctor Velit Associates",
      available: false,
      price: 919,
      numberOfSales: 18127,
      title: "inceptos hymenaeos. Mauris ut quam",
      averageTime: 46,
      isFasting: false,
      description:
        "ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at",
    },
    {
      key: 9876420,
      id: 1257,
      name: "Egestas PC",
      available: false,
      price: 645,
      numberOfSales: 71956,
      title: "Donec egestas. Duis ac",
      averageTime: 23,
      isFasting: false,
      description:
        "convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu,",
    },
    {
      key: 9876297,
      id: 1280,
      name: "In Molestie Consulting",
      available: false,
      price: 351,
      numberOfSales: 20760,
      title: "eu odio tristique",
      averageTime: 22,
      isFasting: true,
      description:
        "consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem",
    },
    {
      key: 9876174,
      id: 1303,
      name: "Tortor Integer Aliquam Consulting",
      available: true,
      price: 269,
      numberOfSales: 37268,
      title: "In ornare",
      averageTime: 53,
      isFasting: false,
      description:
        "facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem,",
    },
    {
      key: 9876051,
      id: 1326,
      name: "Vitae Limited",
      available: true,
      price: 366,
      numberOfSales: 50549,
      title: "diam. Sed diam lorem,",
      averageTime: 32,
      isFasting: false,
      description:
        "convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et",
    },
    {
      key: 9875928,
      id: 1349,
      name: "Erat Vitae Ltd",
      available: true,
      price: 327,
      numberOfSales: 49929,
      title: "egestas. Sed pharetra,",
      averageTime: 46,
      isFasting: true,
      description:
        "egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu.",
    },
    {
      key: 9875805,
      id: 1372,
      name: "Nisi Sem Limited",
      available: true,
      price: 719,
      numberOfSales: 8098,
      title: "interdum. Nunc sollicitudin",
      averageTime: 39,
      isFasting: true,
      description:
        "auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius.",
    },
    {
      key: 9875682,
      id: 1395,
      name: "Maecenas Iaculis Aliquet Associates",
      available: false,
      price: 779,
      numberOfSales: 96092,
      title: "commodo auctor velit. Aliquam",
      averageTime: 27,
      isFasting: false,
      description:
        "mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor",
    },
    {
      key: 9875559,
      id: 1418,
      name: "Arcu Sed Ltd",
      available: false,
      price: 802,
      numberOfSales: 17178,
      title: "Sed nulla ante, iaculis",
      averageTime: 21,
      isFasting: true,
      description:
        "adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis",
    },
    {
      key: 9875436,
      id: 1441,
      name: "Lectus Quis LLP",
      available: true,
      price: 680,
      numberOfSales: 31656,
      title: "lectus sit amet luctus vulputate,",
      averageTime: 50,
      isFasting: false,
      description:
        "non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra.",
    },
    {
      key: 9875313,
      id: 1464,
      name: "Proin Eget Corp.",
      available: true,
      price: 543,
      numberOfSales: 12038,
      title: "Ut nec urna",
      averageTime: 38,
      isFasting: false,
      description:
        "pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu.",
    },
    {
      key: 9875190,
      id: 1487,
      name: "Nulla Company",
      available: true,
      price: 538,
      numberOfSales: 47965,
      title: "habitant morbi tristique senectus",
      averageTime: 44,
      isFasting: true,
      description:
        "Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit",
    },
    {
      key: 9875067,
      id: 1510,
      name: "Luctus Corp.",
      available: true,
      price: 581,
      numberOfSales: 34929,
      title: "magna sed dui.",
      averageTime: 28,
      isFasting: false,
      description:
        "blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus",
    },
    {
      key: 9874944,
      id: 1533,
      name: "Lobortis Company",
      available: false,
      price: 544,
      numberOfSales: 78609,
      title: "at, egestas a, scelerisque",
      averageTime: 36,
      isFasting: true,
      description:
        "Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo",
    },
    {
      key: 9874821,
      id: 1556,
      name: "Sapien Aenean LLC",
      available: true,
      price: 76,
      numberOfSales: 89146,
      title: "non arcu. Vivamus sit",
      averageTime: 43,
      isFasting: false,
      description:
        "non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla.",
    },
    {
      key: 9874698,
      id: 1579,
      name: "Sem Limited",
      available: true,
      price: 571,
      numberOfSales: 73929,
      title: "elit, a feugiat tellus",
      averageTime: 32,
      isFasting: false,
      description:
        "justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum,",
    },
    {
      key: 9874575,
      id: 1602,
      name: "Ac LLP",
      available: true,
      price: 672,
      numberOfSales: 56355,
      title: "est. Nunc ullamcorper,",
      averageTime: 53,
      isFasting: false,
      description:
        "Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus",
    },
    {
      key: 9874452,
      id: 1625,
      name: "Urna Convallis Erat Institute",
      available: false,
      price: 891,
      numberOfSales: 10915,
      title: "augue, eu tempor erat neque",
      averageTime: 29,
      isFasting: false,
      description:
        "in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla.",
    },
    {
      key: 9874329,
      id: 1648,
      name: "Mattis Corp.",
      available: false,
      price: 729,
      numberOfSales: 62119,
      title: "rhoncus. Donec est. Nunc ullamcorper,",
      averageTime: 48,
      isFasting: false,
      description:
        "odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis,",
    },
    {
      key: 9874206,
      id: 1671,
      name: "Feugiat Industries",
      available: true,
      price: 820,
      numberOfSales: 87267,
      title: "est arcu ac",
      averageTime: 24,
      isFasting: true,
      description:
        "consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin",
    },
    {
      key: 9874083,
      id: 1694,
      name: "Libero Dui Nec Incorporated",
      available: true,
      price: 682,
      numberOfSales: 21897,
      title: "cursus et, magna.",
      averageTime: 19,
      isFasting: false,
      description:
        "adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus.",
    },
    {
      key: 9873960,
      id: 1717,
      name: "Dui Nec LLC",
      available: false,
      price: 214,
      numberOfSales: 93437,
      title: "quis, pede.",
      averageTime: 48,
      isFasting: false,
      description:
        "convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus",
    },
    {
      key: 9873837,
      id: 1740,
      name: "Non Corporation",
      available: false,
      price: 662,
      numberOfSales: 79615,
      title: "diam. Proin dolor.",
      averageTime: 39,
      isFasting: false,
      description:
        "vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod",
    },
    {
      key: 9873714,
      id: 1763,
      name: "Luctus Company",
      available: true,
      price: 271,
      numberOfSales: 26118,
      title: "risus, at fringilla purus",
      averageTime: 16,
      isFasting: false,
      description:
        "Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum",
    },
    {
      key: 9873591,
      id: 1786,
      name: "Commodo Ipsum Suspendisse Consulting",
      available: false,
      price: 366,
      numberOfSales: 52663,
      title: "urna. Vivamus molestie dapibus",
      averageTime: 35,
      isFasting: false,
      description:
        "Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc",
    },
    {
      key: 9873468,
      id: 1809,
      name: "Et Eros Proin Limited",
      available: true,
      price: 894,
      numberOfSales: 4884,
      title: "tempus mauris erat eget",
      averageTime: 24,
      isFasting: false,
      description:
        "elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra,",
    },
    {
      key: 9873345,
      id: 1832,
      name: "Nibh Vulputate Mauris Consulting",
      available: false,
      price: 930,
      numberOfSales: 80952,
      title: "ornare, elit elit fermentum",
      averageTime: 20,
      isFasting: false,
      description:
        "at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci.",
    },
    {
      key: 9873222,
      id: 1855,
      name: "Habitant Morbi Tristique Institute",
      available: true,
      price: 145,
      numberOfSales: 94249,
      title: "lectus ante dictum mi, ac",
      averageTime: 47,
      isFasting: true,
      description:
        "fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet",
    },
    {
      key: 9873099,
      id: 1878,
      name: "Fringilla Associates",
      available: false,
      price: 657,
      numberOfSales: 74676,
      title: "Quisque purus sapien, gravida",
      averageTime: 26,
      isFasting: false,
      description:
        "sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non,",
    },
    {
      key: 9872976,
      id: 1901,
      name: "Convallis In Cursus Consulting",
      available: true,
      price: 737,
      numberOfSales: 4002,
      title: "laoreet posuere, enim nisl",
      averageTime: 42,
      isFasting: true,
      description:
        "Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante.",
    },
    {
      key: 9872853,
      id: 1924,
      name: "Sit Corp.",
      available: true,
      price: 606,
      numberOfSales: 77756,
      title: "ridiculus mus. Aenean eget magna.",
      averageTime: 41,
      isFasting: false,
      description:
        "adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna.",
    },
    {
      key: 9872730,
      id: 1947,
      name: "Et Ltd",
      available: false,
      price: 903,
      numberOfSales: 8845,
      title: "urna convallis erat, eget",
      averageTime: 38,
      isFasting: false,
      description:
        "ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus",
    },
    {
      key: 9872607,
      id: 1970,
      name: "Accumsan Consulting",
      available: true,
      price: 324,
      numberOfSales: 95163,
      title: "erat semper",
      averageTime: 17,
      isFasting: true,
      description:
        "est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend",
    },
    {
      key: 9872484,
      id: 1993,
      name: "Vel Nisl Quisque Consulting",
      available: true,
      price: 451,
      numberOfSales: 35643,
      title: "libero. Integer in",
      averageTime: 55,
      isFasting: false,
      description:
        "pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae,",
    },
    {
      key: 9872361,
      id: 2016,
      name: "Nulla Tincidunt Ltd",
      available: true,
      price: 260,
      numberOfSales: 25578,
      title: "nibh lacinia orci, consectetuer",
      averageTime: 56,
      isFasting: true,
      description:
        "vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla",
    },
    {
      key: 9872238,
      id: 2039,
      name: "Suscipit Institute",
      available: true,
      price: 956,
      numberOfSales: 87429,
      title: "Phasellus elit pede,",
      averageTime: 52,
      isFasting: false,
      description:
        "lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit",
    },
    {
      key: 9872115,
      id: 2062,
      name: "Dui Suspendisse Limited",
      available: true,
      price: 376,
      numberOfSales: 17545,
      title: "sociis natoque penatibus",
      averageTime: 41,
      isFasting: true,
      description:
        "sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti",
    },
    {
      key: 9871992,
      id: 2085,
      name: "Auctor Foundation",
      available: false,
      price: 313,
      numberOfSales: 90322,
      title: "vitae sodales",
      averageTime: 47,
      isFasting: false,
      description:
        "non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est",
    },
    {
      key: 9871869,
      id: 2108,
      name: "Scelerisque Scelerisque Dui Ltd",
      available: false,
      price: 619,
      numberOfSales: 22809,
      title: "Nam ligula",
      averageTime: 47,
      isFasting: true,
      description:
        "Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est",
    },
    {
      key: 9871746,
      id: 2131,
      name: "Nisi Inc.",
      available: false,
      price: 889,
      numberOfSales: 10627,
      title: "Vivamus rhoncus.",
      averageTime: 50,
      isFasting: false,
      description:
        "purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel",
    },
    {
      key: 9871623,
      id: 2154,
      name: "Libero Nec Ligula Inc.",
      available: false,
      price: 291,
      numberOfSales: 20566,
      title: "tellus. Aenean egestas hendrerit neque.",
      averageTime: 60,
      isFasting: true,
      description:
        "cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus",
    },
    {
      key: 9871500,
      id: 2177,
      name: "Velit LLC",
      available: false,
      price: 516,
      numberOfSales: 12223,
      title: "nec, diam. Duis mi enim,",
      averageTime: 42,
      isFasting: false,
      description:
        "a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci,",
    },
    {
      key: 9871377,
      id: 2200,
      name: "Lorem Ac Risus Corp.",
      available: true,
      price: 843,
      numberOfSales: 28504,
      title: "Fusce aliquet magna a",
      averageTime: 55,
      isFasting: true,
      description:
        "mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla.",
    },
    {
      key: 9871254,
      id: 2223,
      name: "Placerat Orci LLC",
      available: true,
      price: 772,
      numberOfSales: 25170,
      title: "auctor velit. Aliquam",
      averageTime: 24,
      isFasting: false,
      description:
        "blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus",
    },
    {
      key: 9871131,
      id: 2246,
      name: "Cras Pellentesque Limited",
      available: false,
      price: 848,
      numberOfSales: 37716,
      title: "odio tristique pharetra.",
      averageTime: 28,
      isFasting: false,
      description:
        "rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est",
    },
    {
      key: 9871008,
      id: 2269,
      name: "Nec Cursus A Institute",
      available: false,
      price: 257,
      numberOfSales: 60726,
      title: "interdum feugiat.",
      averageTime: 33,
      isFasting: false,
      description:
        "mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero",
    },
    {
      key: 9870885,
      id: 2292,
      name: "Ut Industries",
      available: false,
      price: 357,
      numberOfSales: 66893,
      title: "in consequat enim diam",
      averageTime: 46,
      isFasting: true,
      description:
        "et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus",
    },
    {
      key: 9870762,
      id: 2315,
      name: "Ac Facilisis Ltd",
      available: true,
      price: 450,
      numberOfSales: 22733,
      title: "velit dui, semper et, lacinia",
      averageTime: 48,
      isFasting: false,
      description:
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam",
    },
    {
      key: 9870639,
      id: 2338,
      name: "Donec Institute",
      available: false,
      price: 799,
      numberOfSales: 67141,
      title: "purus sapien, gravida non, sollicitudin",
      averageTime: 28,
      isFasting: false,
      description:
        "vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan",
    },
    {
      key: 9870516,
      id: 2361,
      name: "Euismod Ac Consulting",
      available: true,
      price: 770,
      numberOfSales: 42409,
      title: "tempus eu,",
      averageTime: 52,
      isFasting: true,
      description:
        "ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu,",
    },
    {
      key: 9870393,
      id: 2384,
      name: "Dolor Dapibus Gravida Associates",
      available: true,
      price: 977,
      numberOfSales: 8235,
      title: "ut lacus. Nulla",
      averageTime: 45,
      isFasting: true,
      description:
        "fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed",
    },
    {
      key: 9870270,
      id: 2407,
      name: "Donec Est Mauris Company",
      available: false,
      price: 395,
      numberOfSales: 25074,
      title: "diam eu",
      averageTime: 37,
      isFasting: false,
      description:
        "Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus",
    },
    {
      key: 9870147,
      id: 2430,
      name: "Vestibulum Ante Ipsum LLC",
      available: false,
      price: 847,
      numberOfSales: 12117,
      title: "Nam ac nulla.",
      averageTime: 27,
      isFasting: false,
      description:
        "et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam",
    },
    {
      key: 9870024,
      id: 2453,
      name: "Duis Risus Odio Limited",
      available: true,
      price: 638,
      numberOfSales: 21718,
      title: "Aenean egestas hendrerit neque.",
      averageTime: 38,
      isFasting: false,
      description:
        "elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum",
    },
    {
      key: 9869901,
      id: 2476,
      name: "Libero At Associates",
      available: true,
      price: 111,
      numberOfSales: 66122,
      title: "tellus sem",
      averageTime: 60,
      isFasting: true,
      description:
        "nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit.",
    },
    {
      key: 9869778,
      id: 2499,
      name: "Lacus Quisque Purus Associates",
      available: true,
      price: 665,
      numberOfSales: 47324,
      title: "mi, ac mattis velit",
      averageTime: 17,
      isFasting: false,
      description:
        "vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna",
    },
    {
      key: 9869655,
      id: 2522,
      name: "Tincidunt Industries",
      available: true,
      price: 146,
      numberOfSales: 26624,
      title: "Aliquam ultrices iaculis odio.",
      averageTime: 29,
      isFasting: false,
      description:
        "ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt,",
    },
    {
      key: 9869532,
      id: 2545,
      name: "Duis Volutpat Foundation",
      available: false,
      price: 294,
      numberOfSales: 91427,
      title: "massa. Suspendisse eleifend.",
      averageTime: 35,
      isFasting: true,
      description:
        "Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla",
    },
    {
      key: 9869409,
      id: 2568,
      name: "Cum Institute",
      available: true,
      price: 902,
      numberOfSales: 57347,
      title: "nisi a odio",
      averageTime: 24,
      isFasting: true,
      description:
        "aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus",
    },
    {
      key: 9869286,
      id: 2591,
      name: "Ante Dictum Corporation",
      available: false,
      price: 873,
      numberOfSales: 6534,
      title: "ante. Nunc mauris sapien, cursus",
      averageTime: 54,
      isFasting: true,
      description:
        "risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare",
    },
    {
      key: 9869163,
      id: 2614,
      name: "Consectetuer Foundation",
      available: false,
      price: 68,
      numberOfSales: 4383,
      title: "non massa non ante bibendum",
      averageTime: 54,
      isFasting: true,
      description:
        "blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit",
    },
    {
      key: 9869040,
      id: 2637,
      name: "Lobortis Risus Industries",
      available: false,
      price: 702,
      numberOfSales: 97381,
      title: "rhoncus. Donec",
      averageTime: 57,
      isFasting: false,
      description:
        "eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla",
    },
    {
      key: 9868917,
      id: 2660,
      name: "Pretium Et Rutrum Foundation",
      available: false,
      price: 857,
      numberOfSales: 99207,
      title: "ultricies ligula.",
      averageTime: 22,
      isFasting: true,
      description:
        "ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus.",
    },
    {
      key: 9868794,
      id: 2683,
      name: "Nec LLC",
      available: false,
      price: 386,
      numberOfSales: 66424,
      title: "molestie orci tincidunt",
      averageTime: 18,
      isFasting: false,
      description:
        "Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient",
    },
    {
      key: 9868671,
      id: 2706,
      name: "Arcu Sed Et Ltd",
      available: false,
      price: 938,
      numberOfSales: 21342,
      title: "nisi dictum augue",
      averageTime: 17,
      isFasting: true,
      description:
        "blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum",
    },
    {
      key: 9868548,
      id: 2729,
      name: "Eu Neque Industries",
      available: true,
      price: 859,
      numberOfSales: 57442,
      title: "lacus. Quisque purus sapien,",
      averageTime: 47,
      isFasting: true,
      description:
        "Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae,",
    },
    {
      key: 9868425,
      id: 2752,
      name: "Amet Foundation",
      available: false,
      price: 69,
      numberOfSales: 10892,
      title: "magna a",
      averageTime: 41,
      isFasting: true,
      description:
        "ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante",
    },
    {
      key: 9868302,
      id: 2775,
      name: "Dolor Corp.",
      available: true,
      price: 78,
      numberOfSales: 54233,
      title: "Nam ligula elit,",
      averageTime: 19,
      isFasting: true,
      description:
        "Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed",
    },
    {
      key: 9868179,
      id: 2798,
      name: "Dapibus Rutrum LLC",
      available: false,
      price: 707,
      numberOfSales: 42615,
      title: "enim. Etiam",
      averageTime: 50,
      isFasting: false,
      description:
        "gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis,",
    },
    {
      key: 9868056,
      id: 2821,
      name: "Quisque LLC",
      available: true,
      price: 602,
      numberOfSales: 88971,
      title: "egestas. Sed pharetra, felis",
      averageTime: 37,
      isFasting: false,
      description:
        "felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis",
    },
    {
      key: 9867933,
      id: 2844,
      name: "Ligula Donec Consulting",
      available: true,
      price: 619,
      numberOfSales: 62739,
      title: "metus. Aliquam erat",
      averageTime: 23,
      isFasting: false,
      description:
        "lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc",
    },
    {
      key: 9867810,
      id: 2867,
      name: "Venenatis A Foundation",
      available: true,
      price: 899,
      numberOfSales: 89305,
      title: "semper et, lacinia vitae,",
      averageTime: 45,
      isFasting: true,
      description:
        "Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero",
    },
    {
      key: 9867687,
      id: 2890,
      name: "Diam Limited",
      available: true,
      price: 231,
      numberOfSales: 48634,
      title: "a, auctor non,",
      averageTime: 39,
      isFasting: false,
      description:
        "augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant",
    },
    {
      key: 9867564,
      id: 2913,
      name: "Id Enim Foundation",
      available: true,
      price: 665,
      numberOfSales: 20870,
      title: "ultricies ornare, elit elit fermentum",
      averageTime: 57,
      isFasting: false,
      description:
        "senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer",
    },
    {
      key: 9867441,
      id: 2936,
      name: "Nulla Ante Iaculis Ltd",
      available: false,
      price: 120,
      numberOfSales: 74019,
      title: "fermentum vel, mauris. Integer sem",
      averageTime: 34,
      isFasting: false,
      description:
        "et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam auctor, velit eget",
    },
    {
      key: 9867318,
      id: 2959,
      name: "Non Feugiat Incorporated",
      available: true,
      price: 234,
      numberOfSales: 36927,
      title: "vel turpis. Aliquam",
      averageTime: 42,
      isFasting: false,
      description:
        "iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a,",
    },
    {
      key: 9867195,
      id: 2982,
      name: "Metus Aenean Sed LLP",
      available: false,
      price: 963,
      numberOfSales: 26301,
      title: "nisi sem semper erat,",
      averageTime: 41,
      isFasting: false,
      description:
        "ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam.",
    },
    {
      key: 9867072,
      id: 3005,
      name: "Massa Non Ante Consulting",
      available: true,
      price: 586,
      numberOfSales: 42385,
      title: "urna, nec",
      averageTime: 23,
      isFasting: false,
      description:
        "sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id",
    },
    {
      key: 9866949,
      id: 3028,
      name: "Fusce Aliquet Magna LLP",
      available: true,
      price: 880,
      numberOfSales: 31637,
      title: "morbi tristique senectus",
      averageTime: 43,
      isFasting: true,
      description:
        "vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus",
    },
    {
      key: 9866826,
      id: 3051,
      name: "Erat Vitae Risus Limited",
      available: true,
      price: 332,
      numberOfSales: 90957,
      title: "hymenaeos. Mauris ut",
      averageTime: 47,
      isFasting: false,
      description:
        "turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
    },
    {
      key: 9866703,
      id: 3074,
      name: "Imperdiet PC",
      available: true,
      price: 172,
      numberOfSales: 44113,
      title: "Proin vel nisl. Quisque",
      averageTime: 38,
      isFasting: true,
      description:
        "feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula",
    },
    {
      key: 9866580,
      id: 3097,
      name: "Convallis Incorporated",
      available: false,
      price: 623,
      numberOfSales: 58824,
      title: "vel nisl. Quisque fringilla",
      averageTime: 35,
      isFasting: false,
      description:
        "non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo.",
    },
    {
      key: 9866457,
      id: 3120,
      name: "Etiam Gravida LLC",
      available: false,
      price: 851,
      numberOfSales: 68452,
      title: "quis diam luctus lobortis.",
      averageTime: 25,
      isFasting: true,
      description:
        "iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis",
    },
    {
      key: 9866334,
      id: 3143,
      name: "Amet Massa Inc.",
      available: true,
      price: 206,
      numberOfSales: 82858,
      title: "commodo auctor",
      averageTime: 41,
      isFasting: true,
      description:
        "dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus,",
    },
    {
      key: 9866211,
      id: 3166,
      name: "Id Foundation",
      available: false,
      price: 180,
      numberOfSales: 97222,
      title: "risus. Nulla eget metus",
      averageTime: 43,
      isFasting: true,
      description:
        "bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat enim",
    },
    {
      key: 9866088,
      id: 3189,
      name: "Et Ipsum LLP",
      available: true,
      price: 781,
      numberOfSales: 84819,
      title: "ut dolor dapibus gravida.",
      averageTime: 44,
      isFasting: false,
      description:
        "orci, in consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis",
    },
    {
      key: 9865965,
      id: 3212,
      name: "Parturient Montes Foundation",
      available: false,
      price: 547,
      numberOfSales: 74099,
      title: "dui, in sodales elit",
      averageTime: 21,
      isFasting: true,
      description:
        "diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non,",
    },
    {
      key: 9865842,
      id: 3235,
      name: "Netus Et Malesuada Company",
      available: false,
      price: 660,
      numberOfSales: 27958,
      title: "feugiat non, lobortis",
      averageTime: 51,
      isFasting: false,
      description:
        "nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque",
    },
    {
      key: 9865719,
      id: 3258,
      name: "Quisque Porttitor Eros PC",
      available: true,
      price: 591,
      numberOfSales: 21906,
      title: "Sed eu nibh vulputate",
      averageTime: 58,
      isFasting: true,
      description:
        "imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta",
    },
    {
      key: 9865596,
      id: 3281,
      name: "Pharetra Quisque LLP",
      available: true,
      price: 94,
      numberOfSales: 26430,
      title: "venenatis lacus. Etiam",
      averageTime: 39,
      isFasting: false,
      description:
        "gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo.",
    },
    {
      key: 9865473,
      id: 3304,
      name: "Pretium Incorporated",
      available: false,
      price: 621,
      numberOfSales: 19750,
      title: "leo elementum sem, vitae",
      averageTime: 46,
      isFasting: true,
      description:
        "Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus",
    },
    {
      key: 9865350,
      id: 3327,
      name: "Commodo Inc.",
      available: true,
      price: 564,
      numberOfSales: 34875,
      title: "ipsum leo elementum",
      averageTime: 60,
      isFasting: true,
      description:
        "inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra",
    },
    {
      key: 9865227,
      id: 3350,
      name: "Vel Faucibus Associates",
      available: true,
      price: 729,
      numberOfSales: 22791,
      title: "Phasellus nulla.",
      averageTime: 21,
      isFasting: false,
      description:
        "Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis",
    },
    {
      key: 9865104,
      id: 3373,
      name: "Amet LLC",
      available: false,
      price: 146,
      numberOfSales: 4293,
      title: "id nunc interdum",
      averageTime: 15,
      isFasting: true,
      description:
        "Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum",
    },
    {
      key: 9864981,
      id: 3396,
      name: "Rutrum Fusce Associates",
      available: true,
      price: 276,
      numberOfSales: 27658,
      title: "quam. Pellentesque habitant morbi tristique",
      averageTime: 54,
      isFasting: false,
      description:
        "porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat",
    },
    {
      key: 9864858,
      id: 3419,
      name: "Sed Dolor Associates",
      available: false,
      price: 686,
      numberOfSales: 53428,
      title: "Morbi metus. Vivamus euismod",
      averageTime: 34,
      isFasting: true,
      description:
        "mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis",
    },
    {
      key: 9864735,
      id: 3442,
      name: "Duis A Associates",
      available: true,
      price: 874,
      numberOfSales: 91409,
      title: "elit, pellentesque a, facilisis non,",
      averageTime: 50,
      isFasting: true,
      description:
        "eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu",
    },
    {
      key: 9864612,
      id: 3465,
      name: "Eu Arcu Morbi Associates",
      available: false,
      price: 479,
      numberOfSales: 70674,
      title: "enim. Mauris quis",
      averageTime: 29,
      isFasting: true,
      description:
        "risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at",
    },
    {
      key: 9864489,
      id: 3488,
      name: "Molestie Institute",
      available: false,
      price: 154,
      numberOfSales: 81759,
      title: "sed orci lobortis augue",
      averageTime: 32,
      isFasting: false,
      description:
        "interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut",
    },
    {
      key: 9864366,
      id: 3511,
      name: "Libero Dui Nec PC",
      available: true,
      price: 672,
      numberOfSales: 19810,
      title: "mauris. Morbi",
      averageTime: 19,
      isFasting: true,
      description:
        "sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum",
    },
  ];
  return (
    <>
      <Row
        justify="center"
        gutter={[0, 0]}
        className={`m-3 p-3 rounded border border-light`}
      >
        <Col span={24}>
          <Row justify="space-between" align="middle">
            <Col className={`p-3 `}>
              <span className={`fs-2 fw-bold`}>List of Food</span>
            </Col>
            <Button
              type="default"
              className={`d-flex align-items-center m-3 rounded`}
              onClick={() => {
                setCurrentData({
                  key: "",
                  id: "",
                  name: "",
                  available: "",
                  price: "",
                  numberOfSales: "",
                  title: "",
                  averageTime: "",
                  isFasting: "",
                  description: "",
                });
                setCurrentAction("Create");
                setIsFoodModalVisible(true);
              }}
            >
              <PlusOutlined className={`fs-1`} />
              Add Food
            </Button>
          </Row>
        </Col>
        <Col span={24}>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={{
              current: 1,
              pageSize: 5,
            }}
          />
        </Col>
      </Row>
      <Modal
        title={<Title level={3}>Food</Title>}
        visible={isFoodModalVisible}
        onOk={() => {
          setIsFoodModalVisible(false);
        }}
        onCancel={() => {
          setIsFoodModalVisible(false);
        }}
        footer={null}
      >
        <Row justify="center">
          <Col className={`mb-2`}>
            <FoodAndDrinkImageUploader type="Food" />
          </Col>
          <Col span={24}>
            <FoodForm data={currentData} action={currentAction} />
          </Col>
        </Row>
      </Modal>
    </>
  );
};
