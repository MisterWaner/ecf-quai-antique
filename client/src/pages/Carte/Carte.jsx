import "./carte.css";
import Card from "../../components/Card/Card";

const Carte = () => {
    return (
        <>
            <main>
                <h1>La Carte</h1>
                <section className="section-carte">
                    <h2 className="section-title">Les Entrées</h2>
                    <div className="card-container">
                        <Card />
                        <Card />
                    </div>
                </section>
                <section className="section-carte">
                    <h2 className="section-title">Les Plats</h2>
                    <div className="card-container">
                        <Card />
                        <Card />
                    </div>
                </section>
                <section className="section-carte">
                    <h2 className="section-title">Les Desserts</h2>
                    <div className="card-container">
                        <Card />
                        <Card />
                    </div>
                </section>
            </main>
        </>
    );
};

export default Carte;
