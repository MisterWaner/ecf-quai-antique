import "./menus.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Axios from "../../../api/axios";

import { menuSchema } from "../../../Validation/MenuValidation.js";

const MENU_URL = "/menus";

const DashboardMenus = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(menuSchema),
        mode: "onTouched",
    });

    const onSubmit = async (data, event) => {
        event.preventDefault();
        console.log(data);

        try {
            const res = await Axios.post(MENU_URL, data);
            if (res.status === 200) {
                alert("Création effectuée avec succès");
                reset();
            } else if (res.status == 401) {
                alert("Oops, il semblerait qu'un problème soit survenu");
            }
        } catch (error) {
            console.log(error);
            if (!error?.res?.status === 409) {
                alert("Ce menu est déjà enregistré");
            } else {
                alert("La création a échouée");
            }
        }
    };

    return (
        <main className="admin-main">
            <h1>Les Menus</h1>
            <section className="menus-management">
                <h2>Création</h2>
                <div className="menus-creation-container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-container">
                            <label htmlFor="title">Nom du menu:</label>
                            <input
                                autoComplete="off"
                                type="text"
                                placeholder="Lasagne"
                                id="title"
                                {...register("title")}
                            />
                            {errors.title && (
                                <p className="error-msg">
                                    {errors.title?.message}
                                </p>
                            )}
                        </div>

                        <div className="button-container">
                            <button type="submit">Enregistrer</button>
                        </div>
                    </form>
                </div>
            </section>
            <section className="menus-management">
                
            </section>
        </main>
    );
};

export default DashboardMenus;
