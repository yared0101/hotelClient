import { useState } from "react";
import { Reservation } from "../components/Reservation";
import RoomDisplay from "./room-display";

const reservedRooms = () => {
    const [bookList, setBookList] = useState([1]);
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div>
                {bookList.map((item) => (
                    <RoomDisplay />
                ))}
            </div>
        </div>
    );
};

export default reservedRooms;
