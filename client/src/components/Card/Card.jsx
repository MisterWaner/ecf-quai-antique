import "./card.css";

const Card = () => {
    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">TItre de la carte</h3>
            </div>
            <div className="card-body">
                <div className="card-image">
                    <img src="/images/salade-saumon.jpg" alt="" />
                </div>
                <p className="card-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus debitis architecto odit sunt, impedit eius tempora sequi quis perspiciatis vel sit dolore voluptate, molestias asperiores.</p>
            </div>
            <hr />
            <div className="card-footer">
                <p className="card-price">22.99€</p>
            </div>
        </div>
    );
};

export default Card;
