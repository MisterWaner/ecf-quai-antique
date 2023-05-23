import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../../assets/Images/logo-quai-antique.png";
import Burger from "../../assets/icon/burger-solid.svg";

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    };

    const toggleItem = () => {
        setToggleMenu(!toggleMenu)
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

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/connexion");
    };

    return (
        <nav className="nav-container">
            {(toggleMenu || screenWidth > 768) && (
                <ul className="list">
                    <li onClick={toggleItem} className="logo-container nav-item">
                        <Link to="/">
                            <img
                                src={Logo}
                                alt="logo du restaurant Quai Antique"
                            />
                        </Link>
                    </li>
                    <li onClick={toggleItem} className="nav-item">
                        <Link to="/carte">La carte</Link>
                    </li>
                    <li onClick={toggleItem} className="nav-item">
                        <Link to="/menus">Les menus</Link>
                    </li>
                    <li onClick={toggleItem} className="nav-item">
                        <Link to="/equipe">L&apos;équipe</Link>
                    </li>
                    <li onClick={toggleItem} className="nav-item">
                        <Link to="/a-propos">À propos</Link>
                    </li>
                    <li onClick={toggleItem} className="nav-item">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li onClick={toggleItem} className="nav-item">
                        <button onClick={handleClick} className="btn">
                            Réservez/Connexion
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

export default Header;
