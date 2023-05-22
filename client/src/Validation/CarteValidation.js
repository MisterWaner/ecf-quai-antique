import * as yup from "yup";

const carteCreationSchema = yup.object().shape({
    title: yup
        .string()
        .required("Titre Obligatoire")
        .max(100, "Attention le titre ne doit pas dépasser 100 caractères"),
    description: yup.string().required("Description obligatoire"),
    price: yup.number().positive().required("Le prix est obligatoire"),
});

export { carteCreationSchema };
