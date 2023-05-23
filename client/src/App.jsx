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
import AdminCarte from "./pages/Admin/Carte/Carte";
import AdminMenus from "./pages/Admin/Menus/Menus";
import Reservations from "./pages/Admin/Reservations/Reservations";
import Horaires from "./pages/Admin/Horaires/Horaires";
import Images from "./pages/Admin/Images/Images";
//AccountLayout
import RegisteredLayout from "./pages/Account/RegisteredLayout/RegisteredLayout";
import Profile from "./pages/Account/Profile/Profile";
import Reservation from "./pages/Account/Rerservation/Reservation";

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
                    <Route index element={<Dashboard />} />
                    <Route
                        path="/dashboard/carte"
                        element={<AdminCarte />}
                    />
                    <Route
                        path="/dashboard/menus"
                        element={<AdminMenus />}
                    />
                    <Route path="/dashboard/horaires" element={<Horaires />} />
                    <Route
                        path="/dashboard/reservations"
                        element={<Reservations />}
                    />
                    <Route path="/dashboard/images" element={<Images />} />
                </Route>
                <Route path="/mon-compte/:id" element={<RegisteredLayout />}>
                    <Route path="/mon-compte/:id" index element={<Profile />} />
                    <Route
                        path="/mon-compte/:id/reservation"
                        element={<Reservation />}
                    />
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
