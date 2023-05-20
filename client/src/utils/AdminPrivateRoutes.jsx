import { Outlet, Navigate } from "react-router-dom";

const AdminPrivateRoutes = () => {
    let auth = { token: true };

    return auth.token ? <Outlet /> : <Navigate to="/" />;
};

export default AdminPrivateRoutes;