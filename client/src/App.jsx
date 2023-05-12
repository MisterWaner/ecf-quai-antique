import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Menus from "./pages/Menus/Menus";
import Carte from "./pages/Carte/Carte";
import About from "./pages/About/About";
import Equipe from "./pages/Equipe/Equipe";
import Contact from "./pages/Contact/Contact";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/carte" element={<Carte />} />
                <Route path="/menus" element={<Menus />} />
                <Route path="/equipe" element={<Equipe />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
