import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/Sidebar/Sidebar";
import "./adminLayout.css";

const AdminLayout = () => {
    return (
        <div className="admin-layout">
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default AdminLayout;
