import * as yup from "yup";

const connexionSchema = yup.object().shape({
    email: yup
        .string()
        .email("Email invalide")
        .trim()
        .required("Email obligatoire"),
    password: yup
        .string()
        .min(8, "Votre mot de passe doit contenir 8 caractères minimum")
        .trim()
        .required("Mot de passe obligatoire"),
});

export { connexionSchema };
