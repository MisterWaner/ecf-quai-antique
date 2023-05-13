import "./menu.css";
import Formule from "../Formule/Formule";

const Menu = () => {
    return (
        <div className="menu-card">
            <div className="menu-header">
                <h3 className="menu-title">Titre du Menu</h3>
            </div>
            <div className="menu-body">
                <Formule />
                <Formule />
                <Formule />
                <Formule />
            </div>
        </div>
    );
};

export default Menu;
