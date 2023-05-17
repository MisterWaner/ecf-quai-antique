import './carte.css';

const DashboardCarte = () => {
    return (
        <main className="admin-main">
            <h1>La Carte</h1>
            <section className="carte-management">
                <h2>Création</h2>
                <div className="carte-creation-container">
                    <form action="">
                        <div className="input-container">
                            <label htmlFor="titre">Nom du plat:</label>
                            <input type="text" name="titre" id="titre" />
                        </div>
                        <div className="input-container">
                            <label htmlFor="image">Image:</label>
                            <input type="file" name="image" id="image" />
                        </div>
                        <div className="input-container">
                            <label htmlFor="description">Description:</label>
                            <textarea name="description" id="description" cols="30" rows="10"></textarea>
                        </div>
                        <div className="input-container">
                            <label htmlFor="price">Prix:</label>
                            <input type="text" name="price" id="price" />
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

export default DashboardCarte;
