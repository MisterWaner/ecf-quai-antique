import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const ClientLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default ClientLayout;
