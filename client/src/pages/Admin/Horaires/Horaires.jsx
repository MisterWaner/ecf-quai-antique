import "./horaires.css";

const Horaires = () => {
    return (
        <main className="admin-main">
            <h1>Les Horaires</h1>
            <section className="horaires-management">
                <h2>Création</h2>
                <div className="horaires-creation-container">
                    <form action="">
                        <div className="input-container">
                            <label htmlFor="day">Jour de la semaine:</label>
                            <input type="text" name="day" id="day" />
                        </div>
                        <div className="checkbox-container">
                            <input type="checkbox" name="open-midi" id="open-midi" />
                            <label htmlFor="open-midi">Ouvert</label>
                            <input type="checkbox" name="close-midi" id="close-midi" />
                            <label htmlFor="close-midi">Fermé</label>
                        </div>
                        <div className="input-container">
                            <label htmlFor="midi-open">
                                Ouverture du midi:
                            </label>
                            <input
                                type="time"
                                name="midi-open"
                                id="midi-open"
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="midi-close">
                                Fermeture du midi:
                            </label>
                            <input
                                type="time"
                                name="midi-close"
                                id="midi-close"
                            />
                        </div>
                        <div className="checkbox-container">
                            <input type="checkbox" name="open-soir" id="open-soir" />
                            <label htmlFor="open-soir">Ouvert</label>
                            <input type="checkbox" name="close-soir" id="close-soir" />
                            <label htmlFor="close">Fermé</label>
                        </div>
                        <div className="input-container">
                            <label htmlFor="soir-open">
                                Ouverture du soir:
                            </label>
                            <input
                                type="time"
                                name="soir-open"
                                id="soir-open"
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="soir-close">
                                Fermeture du soir:
                            </label>
                            <input
                                type="time"
                                name="soir-close"
                                id="soir-close"
                            />
                        </div>
                        <div className="button-container">
                            <button type="submit">Enregistrer</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Horaires;
