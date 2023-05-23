import "./connexion.css";

import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { connexionSchema } from "../../../Validation/ConnexionValidation";
import Axios from "../../../api/axios";

const LOGIN_URL = "/auth/login";

const Connexion = () => {

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(connexionSchema),
        mode: "onTouched",
    });

    const onSubmit = async (data, event) => {
        event.preventDefault();
        console.log(data);

        try {
            const res = await Axios.post(LOGIN_URL, data);
            console.log(res);

            const role = res?.data?.user.role;
            const token = res?.data?.accessToken;
            const id = res?.data?.user.id;
            console.log(role);
            console.log(token);

            if (role === "admin" && token) {
                navigate("/dashboard");
            } else if (role === "client" && id && token) {
                navigate(`/mon-compte/${id}`);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main className="public-main">
            <h1>Connexion</h1>
            <section className="form-section">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="off"
                            placeholder="example@example.com"
                            {...register("email")}
                        />
                        {errors.email && (
                            <p className="error-msg">{errors.email?.message}</p>
                        )}
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Mot de passe</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            autoComplete="off"
                            placeholder="Mot de passe"
                            {...register("password")}
                        />
                        {errors.password && (
                            <p className="error-msg">
                                {errors.password?.message}
                            </p>
                        )}
                    </div>
                    <button type="submit">Je me connecte</button>
                </form>
                <p>
                    Vous n&apos;avez pas de compte ?{" "}
                    <Link to="/inscription">Inscrivez-vous</Link> pour
                    enregistrer vos préférences.
                </p>
            </section>
        </main>
    );
};

export default Connexion;
