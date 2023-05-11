import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Menus from "./pages/Menus/Menus";
import Carte from "./pages/Carte/Carte";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/la-carte" element={<Carte />} />
                <Route path="/les-menus" element={<Menus />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
