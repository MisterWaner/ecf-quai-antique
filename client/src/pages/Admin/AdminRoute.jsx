import { Routes, Route } from "react-router-dom";
import AdminLayout from "./AdminLayout/AdminLayout";

import Dashboard from "./Dashboard/Dashboard";

const AdminRoute = () => {
    return (
        <Routes>
            <Route element={<AdminLayout/>} >
                <Route path="/dashboard" element={<Dashboard />}/>
            </Route>
        </Routes>
    );
};

export default AdminRoute;
