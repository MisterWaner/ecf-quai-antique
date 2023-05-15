import "./contact.css";
import Phone from "../../../assets/icon/phone-solid.svg";
import At from "../../../assets/icon/at-solid.svg";
import Location from "../../../assets/icon/location-dot-solid.svg";

const Contact = () => {
    return (
        <>
            <main>
                <h1>Contact</h1>
                <section className="contact-section">
                    <div className="phone">
                        <img src={Phone} alt="" />
                        <p>04-56-01-02-03</p>
                    </div>
                    <div className="adress">
                        <img src={Location} alt="" />
                        <address>
                            <p>Quai Antique</p>
                            <p>Rue Vieille Monnaie</p>
                            <p>73000 Chambéry</p>
                        </address>
                    </div>
                    <div className="mail">
                        <img src={At} alt="" />
                        <p>contact@quai-antique.fr</p>
                    </div>
                </section>
                <section className="photo-section">
                    <img src="/images/place-des-elephants.jpg" alt="" />
                    <img src="/images/drapeaux-savoie.jpg" alt="" />
                    <img src="/images/fondue.jpg" alt="" />
                </section>
            </main>
        </>
    );
};

export default Contact;
