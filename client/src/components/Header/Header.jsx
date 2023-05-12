import "./header.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/Images/logo-quai-antique.png";

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <Link to="/">
                    <img src={Logo} alt="logo du restaurant Quai Antique" />
                </Link>
            </div>
            <nav>
                <ul className="nav-container">
                    <li className="nav-item">
                        <Link to="/carte">La carte</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/menus">Les menus</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/equipe">L&apos;équipe</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/a-propos">À propos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <button className="btn">Réservez</button>
        </header>
    );
};

export  default Header;
