import { Button, Space, Table } from "antd";
import { useState } from "react";
import Profile from "../../components/Profile";
import { SideBar } from "../../components/SideBar";

const userData = {
    id: 1,
    personal: {
        name: "Someone Named",
        gender: "Female",
        birthDate: "28-08-1985",
        address: "Addis Ababa / Saris",
        phone: "(+251) 9 1234 1234",
        email: "someone@gmail.com",
    },
    extra: {
        emergencyContact: {
            name: "Emergency Center",
            phone: "(+251) 9 11",
        },
        bankNo: "100005123124",
    },
    employment: {
        position: "Manager",
        department: "Finance",
        salary: 1231,
    },
};

const UserList = () => {
    const columns = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
            responsive: ["sm"],
        },
        {
            title: "Username",
            dataIndex: "username",
            key: "username",
        },
        {
            title: "phone",
            dataIndex: "phone",
            key: "phone",
            responsive: ["sm"],
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            responsive: ["sm"],
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            render: (id) => (
                <Space>
                    <Button
                        key={id}
                        type="default"
                        onClick={() => dispProf("view")}
                    >
                        View
                    </Button>
                    <Button
                        key={id}
                        type="default"
                        onClick={() => dispProf("edit")}
                    >
                        Edit
                    </Button>
                    <Button key={id} type="default">
                        Remove
                    </Button>
                </Space>
            ),
        },
    ];

    const [showProfile, setShowProfile] = useState(false);
    const [profileName, setProfileName] = useState(false);

    const dataSource = [
        {
            key: userData.id,
            username: userData.personal.name,
            details: [
                {
                    gender: userData.personal.gender,
                    birthDate: userData.personal.birthDate,
                    position: userData.employment.position,
                    department: userData.employment.department,
                },
            ],
            phone: userData.personal.phone,
            email: userData.personal.email,
        },
        {
            key: 2,
            username: userData.personal.name,
            details: [
                {
                    gender: userData.personal.gender,
                    birthDate: userData.personal.birthDate,
                    position: userData.employment.position,
                    department: userData.employment.department,
                },
            ],
            phone: userData.personal.phone,
            email: userData.personal.email,
        },
        {
            key: 3,
            username: userData.personal.name,
            details: [
                {
                    gender: userData.personal.gender,
                    birthDate: userData.personal.birthDate,
                    position: userData.employment.position,
                    department: userData.employment.department,
                },
            ],
            phone: userData.personal.phone,
            email: userData.personal.email,
        },
    ];
    const expandedRowRender = (row) => {
        const columns = [
            {
                title: "Gender",
                dataIndex: "gender",
                key: "gender",
            },
            {
                title: "BirthDate",
                dataIndex: "birthDate",
                key: "birthDate",
            },
            {
                title: "Position",
                dataIndex: "position",
                key: "position",
            },
            {
                title: "Department",
                dataIndex: "department",
                key: "department",
            },
        ];

        const { details } = row;
        const data = details
            ? details.map((element, index) => ({ ...element, key: index }))
            : [];

        return <Table columns={columns} dataSource={data} pagination={false} />;
    };

    const addUser = () => {};
    const dispProf = (val) => {
        setProfileName(val);
        setShowProfile(true);
    };
    const modalProps = {
        visible: showProfile,
        onOk: addUser,
        onCancel: () => {
            setShowProfile(false);
        },
    };
    return (
        <div
            className={`d-flex justify-content-center flex-fill`}
            style={{ paddingTop: "100px" }}
        >
            <div className={`mt-4`}>
                <SideBar iAm={"manageEmployees"} />
            </div>
            <div className={`d-flex flex-column pd flex-fill`}>
                <div className="aln-r pd">
                    <Button
                        onClick={() => dispProf("add")}
                        type="default"
                        className={`px-3 py-2 fs-1`}
                    >
                        + Add User
                    </Button>
                </div>
                <Table
                    dataSource={dataSource}
                    columns={columns}
                    expandable={{ expandedRowRender }}
                    pagination={{ current: 1, pageSize: 5 }}
                />
                ;
                <Profile
                    name={profileName}
                    data={userData}
                    modalProps={modalProps}
                />
            </div>
        </div>
    );
};
export default UserList;
