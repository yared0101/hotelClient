import Link from "next/link";
import Image from "next/image";
import { Menu, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import styles from "../styles/nav.module.css";

export const Nav = () => {
    const navItems = [
        { label: "Home", url: "/home" },
        { label: "Room", url: "/room-display" },
        { label: "Food-Drink", url: "/food-drink" },
        { label: "Service", url: "/services" },
        { label: "Admin", url: "/admin/dashboard" },
    ];
    const menu = (
        <Menu className={`mt-3`}>
            {navItems.map((item) => (
                <Menu.Item key={item.url} className={`pr-5`}>
                    <Link href={item.url}>
                        <a>{item.label}</a>
                    </Link>
                </Menu.Item>
            ))}
        </Menu>
    );
    const navItemsElements = navItems.map((item) => {
        return (
            <div key={item.url}>
                <Link href={item.url}>
                    <a>{item.label}</a>
                </Link>
            </div>
        );
    });
    return (
        <div className={styles.nav}>
            <Link href="/">
                <a className={styles.companyBrand}>
                    <div className={styles.companyLogo}>
                        <Image
                            src="/logo/onlyLogo.png"
                            alt="LOGO"
                            width="42.6"
                            height="37.3"
                        ></Image>
                    </div>
                    <h2 className={styles.companyName}>Triangle Int Hotel</h2>
                </a>
            </Link>
            <div className={styles.companyServicesAndProfilPic}>
                <div className={styles.companyServices}>
                    {navItemsElements}
                    <div className={styles.profilPicture}></div>
                </div>
                <Dropdown overlay={menu} trigger={["click"]}>
                    <a
                        className={`${styles.moreButton} ant-dropdown-link`}
                        onClick={(e) => e.preventDefault()}
                    >
                        <MenuOutlined />
                    </a>
                </Dropdown>
            </div>
        </div>
    );
};

export default Nav;
