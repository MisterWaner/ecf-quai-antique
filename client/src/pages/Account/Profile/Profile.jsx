import "./profile.css";

import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Axios from "../../../api/axios";
import {
    infoConnexionSchema,
    infoSchema,
    prefSchema,
} from "../../../Validation/ProfileValidation.js";

const Profile = () => {
    const params = useParams();

    const GET_USER_URL = `/users/${params.id}`;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(infoSchema),
        mode: "onTouched",
    });

    const {
        register: register2,
        handleSubmit: handleSubmit2,
        reset: reset2,
        formState: { errors: errors2 },
    } = useForm({
        resolver: yupResolver(prefSchema),
        mode: "onTouched",
    });

    const {
        register: register3,
        handleSubmit: handleSubmit3,
        reset: reset3,
        watch,
        formState: { errors: errors3 },
    } = useForm({
        resolver: yupResolver(infoConnexionSchema),
        mode: "onTouched",
    });

    const onSubmit = async (data, event) => {
        event.preventDefault();
        console.log(data);

        try {
            const res = await Axios.put(GET_USER_URL, data);
            console.log(res.data[0]);
            if (res.status === 200) {
                alert("Votre formulaire à bien été pris en compte");
                reset();
            } else if (res.status == 401) {
                alert("Oops");
            }
            console.log(res);
        } catch (error) {
            console.log(error);
            if (!error?.res) {
                alert("Aucune réponse du serveur");
            } else {
                alert("La mise à jour du profil a échouée");
            }
        }
    };

    const onSubmit2 = async (data, event) => {
        event.preventDefault();
        console.log(data);

        try {
            const res = await Axios.put(GET_USER_URL, data);
            if (res.status === 200) {
                alert("Votre formulaire à bien été pris en compte");
                reset2();
            } else if (res.status == 401) {
                alert("Oops");
            }
            console.log(res);
        } catch (error) {
            console.log(error);
            if (!error?.res) {
                alert("Aucune réponse du serveur");
            } else {
                alert("La mise à jour du profil a échouée");
            }
        }
    };

    const onSubmit3 = async (data, event) => {
        event.preventDefault();
        console.log(data);

        try {
            const res = await Axios.put(GET_USER_URL, data);
            if (res.status === 200) {
                alert("Votre formulaire à bien été pris en compte");
                reset3();
            } else if (res.status == 401) {
                alert("Oops");
            }
            console.log(res);
        } catch (error) {
            console.log(error);
            if (!error?.res) {
                alert("Aucune réponse du serveur");
            } else {
                alert("La mise à jour du profil a échouée");
            }
        }
    };

    return (
        <main className="account-main">
            <h1>Mon compte</h1>
            <section className="profile-section">
                <h2>Mes informations personnelles</h2>
                <div className="info-container">
                    <form
                        key={1}
                        onSubmit={handleSubmit(onSubmit)}
                        className="info">
                        <div className="input-container">
                            <label htmlFor="firstname">Prénom :</label>
                            <input
                                type="text"
                                id="firstname"
                                placeholder="John"
                                autoComplete="off"
                                {...register("firstname")}
                            />
                            {errors.firstname && (
                                <p className="error-msg">
                                    {errors.firstname?.message}
                                </p>
                            )}
                        </div>
                        <div className="input-container">
                            <label htmlFor="lastname">Nom :</label>
                            <input
                                type="text"
                                id="lastname"
                                placeholder="Doe"
                                autoComplete="off"
                                {...register("lastname")}
                            />
                            {errors.lastname && (
                                <p className="error-msg">
                                    {errors.lastname?.message}
                                </p>
                            )}
                        </div>
                        <div className="input-container">
                            <label htmlFor="phone">Téléphone :</label>
                            <input
                                type="text"
                                id="phone"
                                placeholder="06-XX-XX-XX-XX"
                                autoComplete="off"
                                {...register("phone")}
                            />
                            {errors.phone && (
                                <p className="error-msg">
                                    {errors.phone?.message}
                                </p>
                            )}
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
                    <form
                        key={2}
                        onSubmit={handleSubmit2(onSubmit2)}
                        className="info">
                        <div className="input-container">
                            <label htmlFor="allergies">Allergies :</label>
                            <input
                                type="text"
                                autoComplete="off"
                                id="allergies"
                                {...register2("allergies")}
                            />
                            {errors2.allergies && (
                                <p className="error-msg">
                                    {errors2.allergies?.message}
                                </p>
                            )}
                        </div>
                        <div className="input-container">
                            <label htmlFor="quantity">
                                Nombre de couverts :
                            </label>
                            <input
                                type="number"
                                id="quantity"
                                // min='1'
                                // max="10"
                                {...register2("quantity")}
                            />
                            {errors2.quantity && (
                                <p className="error-msg">
                                    {errors2.quantity?.message}
                                </p>
                            )}
                        </div>
                        <div className="input-container">
                            <label htmlFor="children">
                                Nombre d&apos;enfants :
                            </label>
                            <input
                                type="number"
                                id="children"
                                // min='0'
                                // max='5'
                                {...register2("children")}
                            />
                            {errors2.children && (
                                <p className="error-msg">
                                    {errors2.children?.message}
                                </p>
                            )}
                        </div>
                        <div className="button-container">
                            <button type="submit">Valider</button>
                        </div>
                    </form>
                    <table>
                        <tbody>
                            <tr>
                                <td className="label">Allergies:</td>
                                <td className="value">Noix</td>
                            </tr>
                            <tr>
                                <td className="label">Nombre de couverts:</td>
                                <td className="value">1</td>
                            </tr>
                            <tr>
                                <td className="label">
                                    Nombre d&apos;enfants:
                                </td>
                                <td className="value">0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section className="profile-section">
                <h2>Mes informations de connexion:</h2>
                <div className="info-container">
                    <form
                        key={3}
                        onSubmit={handleSubmit3(onSubmit3)}
                        className="info">
                        <div className="input-container">
                            <label htmlFor="email">Email</label>
                            <input
                                autoComplete="off"
                                type="email"
                                placeholder="example@example.com"
                                id="email"
                                {...register3("email")}
                            />
                            {errors3.email && (
                                <p className="error-msg">
                                    {errors3.email?.message}
                                </p>
                            )}
                        </div>
                        <div className="input-container">
                            <label htmlFor="password">Mot de passe</label>
                            <input
                                type="password"
                                placeholder="Mot de passe"
                                id="password"
                                autoComplete="off"
                                {...register3("password")}
                            />
                            {errors3.password && (
                                <p className="error-msg">
                                    {errors3.password?.message}
                                </p>
                            )}
                        </div>
                        <div className="input-container">
                            <label htmlFor="confirmation">Confirmation</label>
                            <input
                                type="password"
                                placeholder="Confirmez votre mot de passe"
                                id="confirmation"
                                autoComplete="off"
                                {...register3("confirmation", {
                                    validate: (val) => {
                                        if (watch("password") != val) {
                                            return "Le mot de passe et la confirmation ne sont pas identiques";
                                        }
                                    },
                                })}
                            />
                            {errors3.confirmation && (
                                <p className="error-msg">
                                    {errors3.confirmation?.message}
                                </p>
                            )}
                        </div>
                        <div className="button-container">
                            <button type="submit">Modifier</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Profile;
