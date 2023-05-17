import "./inscription.css";

import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

const schema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "fr"] } })
        .trim()
        .required(),
    password: Joi.string().min(8).trim().required(),
    confirmation: Joi.ref('password')
}).with('password', 'confirmation');

const Inscription = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: joiResolver(schema) });
    const onSubmit = (data) => console.log(data);

    return (
        <main className="public-main">
            <h1>Inscription</h1>
            <section className="form-section">
                <form
                    action="http://localhost:3001/inscription"
                    method="POST"
                    onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="example@example.com"
                            {...register("email")}
                        />
                        {errors.email?.type === "required" && (
                            <p>Une adresse email valide est obligatoire</p>
                        )}
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Mot de passe</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Mot de passe"
                            {...register("password")}
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="confirmation">Confirmation</label>
                        <input
                            type="password"
                            name="confirmation"
                            id="confirmation"
                            placeholder="Confirmez votre mot de passe"
                            {...register("confirmation")}
                        />
                    </div>
                    <button type="submit">Je m&apos;inscris</button>
                </form>
            </section>
        </main>
    );
};

export default Inscription;
