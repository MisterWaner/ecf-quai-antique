import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
//PublicLayout
import PublicLayout from "./pages/Public/PublicLayout/PublicLayout";
import Home from "./pages/Public/Home/Home";
import Carte from "./pages/Public/Carte/Carte";
import Menus from "./pages/Public/Menus/Menus";
import Equipe from "./pages/Public/Equipe/Equipe";
import About from "./pages/Public/About/About";
import Contact from "./pages/Public/Contact/Contact";
import Connexion from "./pages/Public/Connexion/Connexion";
import Inscription from "./pages/Public/Inscription/Inscription";
//AdminLayout
import AdminLayout from "./pages/Admin/AdminLayout/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import DashboardCarte from "./pages/Admin/Carte/Carte";
import DashboardMenus from "./pages/Admin/Menus/Menus";
import DashboardReservations from "./pages/Admin/Reservations/DashboardReservations";
import Horaires from "./pages/Admin/Horaires/Horaires";
import Photos from "./pages/Admin/Photos/Photos";
//AccountLayout
import RegisteredLayout from "./pages/Account/RegisteredLayout/RegisteredLayout";
import Profile from "./pages/Account/Profile/Profile";
import Reservation from "./pages/Account/Rerservation/Reservation";
import AdminPrivateRoutes from "./utils/AdminPrivateRoutes";
import ClientPrivateRoutes from "./utils/ClientPrivateRoutes";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<PublicLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/carte" element={<Carte />} />
                    <Route path="/menus" element={<Menus />} />
                    <Route path="/equipe" element={<Equipe />} />
                    <Route path="/a-propos" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/connexion" element={<Connexion />} />
                    <Route path="/inscription" element={<Inscription />} />
                </Route>
                <Route path="/dashboard" element={<AdminLayout />}>
                    <Route element={<AdminPrivateRoutes />}>
                        <Route index element={<Dashboard />} />
                        <Route
                            path="/dashboard/carte"
                            element={<DashboardCarte />}
                        />
                        <Route
                            path="/dashboard/menus"
                            element={<DashboardMenus />}
                        />
                        <Route
                            path="/dashboard/horaires"
                            element={<Horaires />}
                        />
                        <Route
                            path="/dashboard/reservations"
                            element={<DashboardReservations />}
                        />
                        <Route path="/dashboard/photos" element={<Photos />} />
                    </Route>
                </Route>
                <Route path="/mon-compte" element={<RegisteredLayout />}>
                    <Route element={<ClientPrivateRoutes />}>
                        <Route index element={<Profile />} />
                        <Route
                            path="/mon-compte/reservation"
                            element={<Reservation />}
                        />
                    </Route>
                </Route>
            </>
        )
    );

    return (
        <div className="app">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
