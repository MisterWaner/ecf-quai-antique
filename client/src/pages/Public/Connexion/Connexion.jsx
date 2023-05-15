import "./connexion.css";
import { Link } from "react-router-dom";

const Connexion = () => {
    return (
        <main>
            <h1>Connexion</h1>
            <section className="form-section">
                <form action="">
                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="example@example.com"
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Mot de passe</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Mot de passe"
                        />
                    </div>
                    <button type="submit">Je me connecte</button>
                </form>
                <p>
                    Vous n&apos;avez pas de compte ?{" "}
                    <Link to="/inscription">Inscrivez-vous</Link> pour
                    enregistrer vos préférences.
                </p>
            </section>
        </main>
    );
};

export default Connexion;
