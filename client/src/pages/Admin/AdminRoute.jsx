import { Routes, Route } from "react-router-dom";
import AdminLayout from "./AdminLayout/AdminLayout";

import Dashboard from "./Dashboard/Dashboard";
import DashboardCarte from "./Carte/Carte"
import DashboardMenus from "./Menus/Menus";
import Horaires from "./Horaires/Horaires";
import DashboardReservations from "./Reservations/DashboardReservations";
import Photos from "./Photos/Photos";

const AdminRoute = () => {
    return (
        <Routes>
            <Route element={<AdminLayout/>} >
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/dashboard/carte" element={<DashboardCarte />}/>
                <Route path="/dashboard/menus" element={<DashboardMenus />}/>
                <Route path="/dashboard/horaires" element={<Horaires />}/>
                <Route path="/dashboard/reservations" element={<DashboardReservations />}/>
                <Route path="/dashboard/photos" element={<Photos />}/>
            </Route>
        </Routes>
    );
};

export default AdminRoute;
