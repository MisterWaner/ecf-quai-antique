import { Routes, Route } from "react-router-dom";
import ClientLayout from "../../components/ClientLayout/ClientLayout";

import Home from "./Home/Home";
import Menus from "./Menus/Menus"
import Carte from "./Carte/Carte";
import About from "./About/About";
import Equipe from "./Equipe/Equipe";
import Contact from "./Contact/Contact";
import Connexion from "./Connexion/Connexion";
import Inscription from "./Inscription/Inscription";
import Reservation from "./Rerservation/Reservation";

const PublicRoute = () => {
  return (
    <Routes>
                <Route element={<ClientLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/carte" element={<Carte />} />
                    <Route path="/menus" element={<Menus />} />
                    <Route path="/equipe" element={<Equipe />} />
                    <Route path="/a-propos" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/connexion" element={<Connexion />} />
                    <Route path="/inscription" element={<Inscription />} />
                    <Route path="/reservation" element={<Reservation />} />
                </Route>

            </Routes>
  )
}

export default PublicRoute