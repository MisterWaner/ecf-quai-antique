import "./footer.css";
import Facebook from "../../assets/icon/facebook-f.svg";
import Insta from "../../assets/icon/instagram.svg";
import Euro from "../../assets/icon/euro-sign-solid.svg";
import Credit from "../../assets/icon/credit-card-regular.svg";
import Visa from '../../assets/icon/cc-visa.svg';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="social-logos">
                    <img src={Facebook} alt="" />
                    <img src={Insta} alt="" />
                </div>
                <div className="text-container">
                    <p>&copy; Quai antique - 2023 - Tous droits réservés</p>
                </div>
                <div className="payment-logos">
                    <img src={Euro} alt="" />
                    <img src={Credit} alt="" />
                    <img src={Visa} alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
