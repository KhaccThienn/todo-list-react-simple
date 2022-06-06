import clsx from "clsx";
import Contents from "./Components/Contents/Contents";
import mainst from './main.module.css';
import Users from './Components/Users/Users';

function Main() {
    return (
        <div className={clsx(mainst.container)}>
            <Users />
            <Contents />
        </div>
    );
}

export default Main;