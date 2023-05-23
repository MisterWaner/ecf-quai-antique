import "./navbar.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../../assets/Images/logo-quai-antique.png";
import Burger from "../../assets/icon/burger-solid.svg";

const Navbar = () => {

    const navigate = useNavigate();

    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    };

    const toggleItem = () => {
        setToggleMenu(!toggleMenu);
    };

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/connexion');
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", changeWidth);

        return () => {
            window.removeEventListener("resize", changeWidth);
        };
    }, []);

    const params = useParams();
    return (
        <nav className="navbar-container">
            {(toggleMenu || screenWidth > 768) && (
                <ul className="navbar-list">
                    <li
                        onClick={toggleItem}
                        className="navbar-item logo-container">
                        <Link to="/">
                            <img
                                src={Logo}
                                alt="logo du restaurant Quai Antique"
                            />
                        </Link>
                    </li>
                    <li onClick={toggleItem} className="navbar-item">
                        <Link to={`/mon-compte/${params.id}`}>Mon Compte</Link>
                    </li>
                    <li onClick={toggleItem} className="navbar-item">
                        <Link to={`/mon-compte/${params.id}/reservation`}>
                            Réservation
                        </Link>
                    </li>
                    <li onClick={toggleItem} className="nav-item">
                        <button onClick={handleClick} className="btn">
                            Déconnexion
                        </button>
                    </li>
                </ul>
            )}
            <button onClick={toggleNav} className="burger-btn">
                <img src={Burger} alt="burger icon" />
            </button>
        </nav>
    );
};

export default Navbar;
