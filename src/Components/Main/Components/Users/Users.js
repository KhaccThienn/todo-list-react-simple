import clsx from "clsx";
import User from "./User/User";
import users from "./Users.module.css";

function Users() {
    return (
        <div className={clsx(users.containers)}>
            <User
                name="Luan NV"
                imgur="https://toigingiuvedep.vn/wp-content/uploads/2021/06/hinh-anh-anime-cute.jpg"
                status="online"
            />
            <User
                name="Luan NV"
                imgur="https://toigingiuvedep.vn/wp-content/uploads/2021/06/hinh-anh-anime-cute.jpg"
                status="online"
            />
        </div>
    );
}

export default Users;