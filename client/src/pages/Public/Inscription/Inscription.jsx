import "./inscription.css";

const Inscription = () => {
    return (
        <main>
            <h1>Inscription</h1>
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
                    <div className="input-container">
                        <label htmlFor="confirmation">Mot de passe</label>
                        <input
                            type="password"
                            name="confirmation"
                            id="confirmation"
                            placeholder="Confirmez votre mot de passe"
                        />
                    </div>
                    <button type="submit">Je m&apos;inscris</button>
                </form>
            </section>
        </main>
    );
};

export default Inscription;
