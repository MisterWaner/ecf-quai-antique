import "./profile.css";

const Profile = () => {
    return (
        <main className="account-main">
            <h1>Mon compte</h1>
            <section className="profile-section">
                <h2>Mes informations personnelles</h2>
                <div className="info-container">
                    <form action="" className="info">
                        <div className="input-container">
                            <label htmlFor="firstname">Prénom :</label>
                            <input
                                type="text"
                                name="firstname"
                                id="firstname"
                                placeholder="John"
                                autoComplete="off"
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="lastname">Nom :</label>
                            <input type="text" name="lastname" id="lastname" placeholder="Doe" autoComplete="off" />
                        </div>
                        <div className="input-container">
                            <label htmlFor="phone">Téléphone :</label>
                            <input type="text" name="phone" id="phone" placeholder="06-XX-XX-XX-XX" autoComplete="off" />
                        </div>
                        <div className="button-container">
                            <button type="submit">Valider</button>
                        </div>
                    </form>
                    <table>
                        <tbody>
                            <tr>
                                <td className="label">Prénom:</td>
                                <td className="value">John</td>
                            </tr>
                            <tr>
                                <td className="label">Nom:</td>
                                <td className="value">Doe</td>
                            </tr>
                            <tr>
                                <td className="label">Téléphone:</td>
                                <td className="value">06-XX-XX-XX-XX</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section className="profile-section">
                <h2>Mes préférences</h2>
                <div className="info-container">
                    <form action="" className="info">
                        <div className="input-container">
                            <label htmlFor="allergies">Allergies :</label>
                            <input
                                type="text"
                                name="allergies"
                                id="allergies"
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="couverts">Nombre de couverts :</label>
                            <input
                                type="number"
                                name="couverts"
                                id="couverts"
                                min="1"
                                max="60"  
                                defaultValue="1"
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="enfants">Nombre d&apos;enfants :</label>
                            <input
                                type="number"
                                name="enfants"
                                id="enfants"
                                min="0"
                                max="10"  
                                defaultValue="0"
                            />
                        </div>
                        <div className="button-container">
                            <button type="submit">Valider</button>
                        </div>
                    </form>
                    <table>
                        <tbody>
                            <tr>
                                <td className="label">Allergies:</td>
                                <td className="value">John</td>
                            </tr>
                            <tr>
                                <td className="label">Nombre de couverts:</td>
                                <td className="value">1</td>
                            </tr>
                            <tr>
                                <td className="label">Nombre d&apos;enfants:</td>
                                <td className="value">0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
};

export default Profile;
