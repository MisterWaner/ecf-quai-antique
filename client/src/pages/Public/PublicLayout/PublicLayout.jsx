import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default PublicLayout;
