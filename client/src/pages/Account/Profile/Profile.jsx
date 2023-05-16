import './profile.css';

const Profile = () => {
    return (
        <main className="account-main">
            <h1>Mon compte</h1>
            <section className="profile-section">
                <h2>Mes informations personnelles</h2>
                <div className="info-container">
                    <form action="" className="personnal-info">
                        <div className="input-container">
                            <label htmlFor="firstname">Prénom :</label>
                            <input type="text" name="firstname" id="firstname" />
                        </div>
                        <div className="input-container">
                            <label htmlFor="lastname">Nom :</label>
                            <input type="text" name="lastname" id="lastname" />
                        </div>
                        <div className="input-container">
                            <label htmlFor="lastname">Téléphone :</label>
                            <input type="text" name="lastname" id="lastname" />
                        </div>
                    </form>
                    <table>
                        <tbody>
                            <tr>
                                <td>Prénom:</td>
                                <td>John</td>
                            </tr>
                            <tr>
                                <td>Nom:</td>
                                <td>Doe</td>
                            </tr>
                            <tr>
                                <td>Téléphone:</td>
                                <td>06-XX-XX-XX-XX</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
};

export default Profile;
