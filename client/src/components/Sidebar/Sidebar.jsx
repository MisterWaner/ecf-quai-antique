import "./sidebar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-quai-antique.png";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <nav className="sidebar-nav">
                <div className="sidebar-logo-container">
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                <ul className="sidebar-nav-container">
                    <li className="sidebar-nav-item">
                        <Link to="/dashboard">Accueil</Link>
                    </li>
                    <li className="sidebar-nav-item">
                        <Link to="/dashboard/carte">Carte</Link>
                    </li>
                    <li className="sidebar-nav-item">
                        <Link to="/dashboard/menus">Menus</Link>
                    </li>
                    <li className="sidebar-nav-item">
                        <Link to="/dashboard/horaires">Horaires</Link>
                    </li>
                    <li className="sidebar-nav-item">
                        <Link to="/dashboard/reservations">Réservations</Link>
                    </li>
                    <li className="sidebar-nav-item">
                        <Link to="/dashboard/photos">Photos</Link>
                    </li>
                    <li className="sidebar-nav-item">
                        <Link to="/connexion">Déconnexion</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
