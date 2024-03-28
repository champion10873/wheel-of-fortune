import { Outlet } from "react-router-dom";

// project import
// import SideBar from "./SideBar";
// import Header from "./Header";

const MainLayout = () => {
    return (
        <div>
            <Outlet />

        </div>
    );
};

export default MainLayout;