import Menu from "../../components/Menu/Menu";
import "./menus.css";

const Menus = () => {
    return (
        <>
            <main>
                <h1>Les Menus</h1>
                <section className="menus-section">
                    <Menu />
                    <Menu />
                    <Menu />
                </section>
            </main>
        </>
    );
};

export default Menus;
