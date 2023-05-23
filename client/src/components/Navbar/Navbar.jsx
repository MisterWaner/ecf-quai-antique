import "./navbar.css";
import { Link, useParams } from "react-router-dom";
import Logo from "../../assets/Images/logo-quai-antique.png";

const Navbar = () => {

    const params = useParams()
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
                        <Link to={`/mon-compte/${params.id}`}>Mon Compte</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={`/mon-compte/${params.id}/reservation`}>Réservation</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
