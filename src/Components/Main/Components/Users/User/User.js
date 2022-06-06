import clsx from "clsx";
import userst from "./User.module.css";
import { HiStatusOnline } from 'react-icons/hi'

function User(props) {
    return (
        <div className={clsx(userst.container)}>
            <div className={clsx(userst.images)}>
                <img src={props.imgur} alt={props.name} />
            </div>
            <div className={clsx(userst.name)}>
                <p>{props.name}</p>
            </div>
            <div className={props.status}> 
                <HiStatusOnline />
            </div>
        </div>
    );  
}

export default User;