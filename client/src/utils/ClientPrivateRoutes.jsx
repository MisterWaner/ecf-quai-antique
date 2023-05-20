import { Outlet, Navigate } from "react-router-dom";

const ClientPrivateRoutes = () => {
    let auth = {'token':true}

    return(
        auth.token ? <Outlet /> : <Navigate to="/" />
    )
}

export default ClientPrivateRoutes;