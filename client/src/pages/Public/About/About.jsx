import "./about.css";

const About = () => {
    return (
        <>
            <main className="public-main">
                <h1>À Propos</h1>
                <section className="about-section">
                    <h2>Le projet</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam at, exercitationem quidem officiis autem
                        pariatur quod consequatur sit illo omnis, minus
                        perspiciatis dolore sed, maiores voluptatem quos ut
                        mollitia minima? Unde eius, reiciendis quos perferendis
                        neque odit reprehenderit consectetur et blanditiis
                        aperiam ipsa itaque, quae numquam. Tempore ratione
                        dignissimos repellendus laudantium commodi a laboriosam
                        optio iure atque voluptates voluptas, doloribus illo
                        sapiente. Est aliquid quam distinctio consequatur magnam
                        repellendus, minus minima totam ducimus quia corrupti
                        ipsum perferendis autem deleniti mollitia, dolore
                        eveniet iste accusamus, non officia itaque! Aspernatur
                        corrupti modi fuga alias delectus voluptatem error
                        incidunt eveniet laudantium ipsum facilis et eaque
                        architecto quasi, velit porro, tempore quibusdam commodi
                        molestias ducimus in ullam. Minus labore quasi voluptas
                        praesentium deserunt molestias maiores delectus, qui,
                        quisquam vero ad quam ut vitae, soluta odio alias. Hic
                        illo, quia assumenda dolores labore sunt voluptas ullam
                        quod nam aspernatur officia nemo, inventore asperiores
                        consequuntur explicabo earum nobis aut suscipit incidunt
                        numquam iure recusandae blanditiis quos! Quaerat
                        dignissimos similique doloremque natus autem porro aut
                        minus sed assumenda esse consectetur ullam, voluptates
                        nobis, nulla blanditiis provident est quasi ipsum neque
                        quae non officia distinctio obcaecati. Maiores qui
                        commodi excepturi eaque ipsam laboriosam eos fuga,
                        inventore iusto adipisci ducimus facilis labore
                        necessitatibus assumenda. Quaerat ad neque esse
                        nesciunt. Vel eius, aliquam voluptatum illo suscipit
                        eaque dolor beatae provident architecto rerum
                        perspiciatis ab cupiditate quia libero voluptatibus odit
                        officiis laudantium assumenda nemo? At dolore nam
                        voluptates, officia ipsum dicta facere rerum officiis
                        dolorum nesciunt incidunt accusantium atque et vero.
                    </p>
                </section>
                <section className="about-section">
                    <h2>Nos horaires d&apos;ouverture</h2>
                    <table className="planning-table">
                        <thead>
                            <tr>
                                <th scope="col">Jour</th>
                                <th scope="col">Midi</th>
                                <th scope="col">Soir</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Lundi</th>
                                <td>Fermé</td>
                                <td>Fermé</td>
                            </tr>
                            <tr>
                                <th scope="row">Mardi</th>
                                <td>Fermé</td>
                                <td>19h - 22h</td>
                            </tr>
                            <tr>
                                <th scope="row">Mercredi</th>
                                <td>12h - 14h30</td>
                                <td>19h - 22h</td>
                            </tr>
                            <tr>
                                <th scope="row">Jeudi</th>
                                <td>12h - 14h30</td>
                                <td>19h - 22h</td>
                            </tr>
                            <tr>
                                <th scope="row">Vendredi</th>
                                <td>12h - 14h30</td>
                                <td>19h - 22h</td>
                            </tr>
                            <tr>
                                <th scope="row">Samedi</th>
                                <td>12h - 14h30</td>
                                <td>19h - 23h</td>
                            </tr>
                            <tr>
                                <th scope="row">Dimanche</th>
                                <td>11h - 15h</td>
                                <td>Fermé</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </>
    );
};

export default About;
