import clsx from "clsx";
import headerst from "./header.module.css"

function Headers() {
    return ( 
        <div className={clsx(headerst.container)}>
            <h1>
                Pham Mem Quan Ly Cong Viec
            </h1>
        </div>
    );
}

export default Headers;