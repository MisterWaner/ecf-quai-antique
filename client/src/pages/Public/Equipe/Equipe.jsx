import "./equipe.css";
import { memberKitchenData, memberServiceData } from "./memberData";

const Equipe = () => {
    return (
        <>
            <main className="public-main">
                <h1>L&apos;équipe</h1>
                <section className="team-section">
                    <h2 className="team-title">La Cuisine</h2>
                    <ul className="team-list">
                        {memberKitchenData.map((member, index) => {
                            return (
                                <li className="team-member" key={member.id}>
                                    <div className="team-member-pic">
                                        <img
                                            src={`images/team-member${
                                                index + 1
                                            }.jpg`}
                                            alt=""
                                        />
                                    </div>
                                    <div className="team-member-about">
                                        <h3 className="team-member-name">
                                            {member.name}
                                        </h3>
                                        <p className="team-member-desc">
                                            {member.description}
                                        </p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </section>
                <section className="team-section">
                    <h2 className="team-title">Le Service</h2>
                    <ul className="team-list">
                        {memberServiceData.map((member, index) => {
                            return (
                                <li className="team-member" key={member.id}>
                                    <div className="team-member-pic">
                                        <img
                                            src={`images/team-member${
                                                index + 3
                                            }.jpg`}
                                            alt=""
                                        />
                                    </div>
                                    <div className="team-member-about">
                                        <h3 className="team-member-name">
                                            {member.name}
                                        </h3>
                                        <p className="team-member-desc">
                                            {member.description}
                                        </p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </section>
            </main>
        </>
    );
};

export default Equipe;
