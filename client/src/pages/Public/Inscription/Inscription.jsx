import "./inscription.css";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Inscription = () => {
    const schema = yup.object({
        email: yup
            .string()
            .email("Votre adresse email doit être valide")
            .required("Votre adresse email est obligatoire")
            .trim(),
        password: yup
            .string()
            .min(8, "Votre mot de passe doit contenir 8 caractères minimum")
            .required("Le mot de passse est obligatoire")
            .trim(),
        confirmation: yup
            .string()
            .required("La confirmation du mot de passe est obligatoire")
            .min(8, "Votre mot de passe doit contenir 8 caractères minimum")
            .trim()
            .oneOf(
                [yup.ref("password")],
                "Le mot de passe et la confirmation ne sont pas identiques"
            ),
    });

    const {
        register,
        watch,
        reset,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        mode: "onTouched",
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data, event) => {
        event.preventDefault();
        console.log(data);
        try {
            await fetch("http://localhost:3001/inscription", {
                method: "POST",
                body: data 
            }).then((res) => {
                if (res.ok) {
                    alert("Inscription effectuée");
                } else if (res.status == 401) {
                    alert("Oops ");
                }
            });
            reset();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main className="public-main">
            <h1>Inscription</h1>
            <section className="form-section">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            placeholder="example@example.com"
                            {...register("email")}
                            id="email"
                        />
                        {errors.email && (
                            <p className="error-msg">{errors.email?.message}</p>
                        )}
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Mot de passe</label>
                        <input
                            type="password"
                            placeholder="Mot de passe"
                            {...register("password")}
                            id="password"
                        />
                        {errors.password && (
                            <p className="error-msg">
                                {errors.password?.message}
                            </p>
                        )}
                    </div>
                    <div className="input-container">
                        <label htmlFor="confirmation">Confirmation</label>
                        <input
                            type="password"
                            placeholder="Confirmez votre mot de passe"
                            {...register("confirmation", {
                                validate: (val) => {
                                    if (watch("password") != val) {
                                        return "Le mot de passe et la confirmation ne sont pas identiques";
                                    }
                                },
                            })}
                            id="confirmation"
                        />
                        {errors.confirmation && (
                            <p className="error-msg">
                                {errors.confirmation?.message}
                            </p>
                        )}
                    </div>
                    <button disabled={!isValid} type="submit">
                        Je m&apos;inscris
                    </button>
                </form>
            </section>
        </main>
    );
};

export default Inscription;
