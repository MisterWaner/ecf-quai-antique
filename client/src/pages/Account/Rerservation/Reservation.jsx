import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./reservation.css";
import Couverts from "../../../assets/icon/utensils-solid.svg";
import Axios from "../../../api/axios.js"

const Reservation = () => {

    const params = useParams()

    const GET_USER_URL = `/users/${params.id}`


    

    const [quantity, setQuantity] = useState(1);

    const increase = () => {
        setQuantity(quantity + 1);
        if(quantity === 10) {
            setQuantity(10);
        }
    };
    const decrease = () => {
        setQuantity(quantity - 1);
        if(quantity === 1) {
            setQuantity(1)
        }
    };

    const today = new Date().toISOString().split("T")[0];

    return (
        <main className="account-main">
            <h1>Réservation</h1>
            <section className="reservation-section">
                <div className="quantity-container">
                    <img src={Couverts} alt="" />
                    <div className="quantity-counter">
                        <button onClick={decrease}>-</button>
                        <p>{quantity}</p>
                        <button onClick={increase}>+</button>
                    </div>
                </div>
                <div className="date-container">
                    <input
                        type="date"
                        name="date"
                        id="date"
                        min={today}
                        defaultValue={today}
                    />
                </div>
            </section>
            <section className="slot-section">
                <h2>Midi :</h2>
                <form action="">
                    <div className="slot-container">
                        <input
                            className="radio"
                            type="radio"
                            name="slot-midi"
                            id="slot1"
                        />
                        <label htmlFor="slot1">12:00</label>
                        <input
                            className="radio"
                            type="radio"
                            name="slot-midi"
                            id="slot2"
                        />
                        <label htmlFor="slot2">12:15</label>
                        <input
                            className="radio"
                            type="radio"
                            name="slot-midi"
                            id="slot3"
                        />
                        <label htmlFor="slot3">12:30</label>
                        <input
                            className="radio"
                            type="radio"
                            name="slot-midi"
                            id="slot4"
                        />
                        <label htmlFor="slot4">12:45</label>
                        <input
                            className="radio"
                            type="radio"
                            name="slot-midi"
                            id="slot5"
                        />
                        <label htmlFor="slot5">13:00</label>
                        <input
                            className="radio"
                            type="radio"
                            name="slot-midi"
                            id="slot6"
                        />
                        <label htmlFor="slot6">13:15</label>
                        <input
                            className="radio"
                            type="radio"
                            name="slot-midi"
                            id="slot7"
                        />
                        <label htmlFor="slot7">13:30</label>
                    </div>
                    <div className="button-container">
                        <button type="submit">Je réserve</button>
                    </div>
                </form>
            </section>
            <section className="slot-section">
                <h2>Soir :</h2>
                <form action="">
                    <div className="slot-container">
                        <input
                            className="radio"
                            type="radio"
                            name="slot-soir"
                            id="slot8"
                        />
                        <label htmlFor="slot8">19:00</label>
                        <input
                            className="radio"
                            type="radio"
                            name="slot-soir"
                            id="slot9"
                        />
                        <label htmlFor="slot9">19:15</label>
                        <input
                            className="radio"
                            type="radio"
                            name="slot-soir"
                            id="slot10"
                        />
                        <label htmlFor="slot10">19:30</label>
                        <input
                            className="radio"
                            type="radio"
                            name="slot-soir"
                            id="slot11"
                        />
                        <label htmlFor="slot11">19:45</label>
                        <input
                            className="radio"
                            type="radio"
                            name="slot-soir"
                            id="slot13"
                        />
                        <label htmlFor="slot13">20:00</label>
                        <input
                            className="radio"
                            type="radio"
                            name="slot-soir"
                            id="slot14"
                        />
                        <label htmlFor="slot14">20:15</label>
                        <input
                            className="radio"
                            type="radio"
                            name="slot-soir"
                            id="slot15"
                        />
                        <label htmlFor="slot15">20:30</label>
                        <input
                            className="radio"
                            type="radio"
                            name="slot-soir"
                            id="slot16"
                        />
                        <label htmlFor="slot16">20:45</label>
                        <input
                            className="radio"
                            type="radio"
                            name="slot-soir"
                            id="slot17"
                        />
                        <label htmlFor="slot17">21:00</label>
                    </div>
                    <div className="button-container">
                        <button type="submit">Je réserve</button>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default Reservation;
