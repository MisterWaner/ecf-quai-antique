import "./inscription.css";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../../Validation/RegisterValidation";
import axios from "../../../api/axios";

const INSCRIPTION_URL = "/inscription";

const Inscription = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerSchema),
        mode: "onTouched",
    });

    const navigate = useNavigate()
    const onSubmit = async (data, event) => {
        event.preventDefault();
        console.log(data);

        try {
            const res = await axios.post(INSCRIPTION_URL, data);
            if (res.status === 200) {
                alert("Inscription effectuée avec succès");
                reset()
                
            } else if(res.status == 401) {
                alert('Oops')
            }
            navigate('/connexion')
            console.log(res);
        } catch (error) {
            console.log(error);
            if (!error?.res) {
                alert("Aucune réponse du serveur");
            } else if (error.res?.status === 409) {
                alert("Cet email est déjà enregistré");
            } else {
                alert("L'inscription a échouée");
            }
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
                            autoComplete="off"
                            type="email"
                            placeholder="example@example.com"
                            id="email"
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
                            placeholder="Mot de passe"
                            id="password"
                            autoComplete="off"
                            {...register("password")}
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
                            id="confirmation"
                            autoComplete="off"
                            {...register("confirmation", {
                                validate: (val) => {
                                    if (watch("password") != val) {
                                        return "Le mot de passe et la confirmation ne sont pas identiques";
                                    }
                                },
                            })}
                        />
                        {errors.confirmation && (
                            <p className="error-msg">
                                {errors.confirmation?.message}
                            </p>
                        )}
                    </div>
                    <div className="input-container">
                        <label htmlFor="role">Role</label>
                        <select name="role" id="role" {...register("role")}>
                            <option value="Client">Client</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                    <button type="submit">Je m&apos;inscris</button>
                </form>
            </section>
        </main>
    );
};

export default Inscription;
