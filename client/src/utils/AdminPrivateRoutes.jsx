import { Outlet, Navigate } from "react-router-dom";

const AdminPrivateRoutes = () => {
    let auth = {'token':false}

    return(
        auth.token ? <Outlet /> : <Navigate to="/" />
    )
}

export default AdminPrivateRoutes;
