import "./carte.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Axios from "../../../api/axios";
import { carteCreationSchema } from "../../../Validation/CarteValidation";

const CARTE_CREATION_URL = "/cartes";

const DashboardCarte = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(carteCreationSchema),
        mode: "onTouched",
    });

    const onSubmit = async (data, event) => {
        event.preventDefault();
        console.log(data);

        try {
            const res = await Axios.post(CARTE_CREATION_URL, data);
            if (res.status === 200) {
                alert("Création effectuée avec succès");
                reset();
            } else if (res.status == 401) {
                alert("Oops, il semblerait qu'un problème soit survenu");
            }
        } catch (error) {
            console.log(error);
            if (!error?.res) {
                alert("Aucune réponse du serveur");
            } else if (error.res?.status === 409) {
                alert("Cette carte est déjà enregistré");
            } else {
                alert("La création a échouée");
            }
        }
    };
    return (
        <main className="admin-main">
            <h1>La Carte</h1>
            <section className="carte-management">
                <h2>Création</h2>
                <div className="carte-creation-container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-container">
                            <label htmlFor="title">Nom du plat:</label>
                            <input
                                autoComplete="off"
                                type="text"
                                placeholder="Lasagne"
                                id="title"
                                {...register("title")}
                            />
                            {errors.title && (
                            <p className="error-msg">{errors.title?.message}</p>
                        )}
                        </div>
                        <div className="input-container">
                            <label htmlFor="image">Image:</label>
                            <input type="file" name="image" id="image" />
                        </div>
                        <div className="input-container">
                            <label htmlFor="description">Description:</label>
                            <textarea
                                autoComplete="off"
                                type="text"
                                id="description"
                                {...register("description")}
                                cols="30"
                                rows="10"
                            />
                            {errors.description && (
                            <p className="error-msg">{errors.description?.message}</p>
                        )}
                        </div>
                        <div className="input-container">
                            <label htmlFor="price">Prix:</label>
                            <input
                                autoComplete="off"
                                type="text"
                                placeholder="example@example.com"
                                id="price"
                                {...register("price")}
                            />
                            {errors.price && (
                            <p className="error-msg">{errors.price?.message}</p>
                        )}
                        </div>
                        <div className="button-container">
                            <button type="submit">Enregistrer</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default DashboardCarte;
