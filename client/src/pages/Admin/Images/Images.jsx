import "./images.css";

const Images = () => {
    return (
        <main className="admin-main">
            <h1>Les Photos</h1>
            <section className="picture-management">
                <h2>Téléchargement</h2>
                <div className="upload-container">
                    <form action="">
                        <div className="input-container">
                            <label htmlFor="image">Image:</label>
                            <input type="file" name="image" id="image" />
                        </div>
                        <div className="button-container">
                            <button type="submit">Enregistrer</button>
                        </div>
                    </form>
                    <div className="upload-validation">

                    </div>
                </div>
            </section>
            <section className="picture-management">
                <h2>Suppresion</h2>
                
            </section>
        </main>
    );
};

export default Images;
