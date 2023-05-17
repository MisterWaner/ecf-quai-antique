import "./menus.css";

const DashboardMenus = () => {
    return (
        <main className="admin-main">
            <h1>Les Menus</h1>
            <section className="menus-management">
                <h2>Création</h2>
                <div className="menus-creation-container">
                    <form action="">
                        <div className="input-container">
                            <label htmlFor="menu">Nom du menu:</label>
                            <input type="text" name="menu" id="menu" />
                        </div>
                        <div className="input-container">
                            <label htmlFor="formule">Formule:</label>
                            <input type="text" name="formule" id="formule" />
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

export default DashboardMenus;
