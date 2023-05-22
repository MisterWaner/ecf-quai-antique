import * as yup from "yup";

const menuSchema = yup.object().shape({
    title: yup.string().required("Le nom du menu est requis"),
});

export { menuSchema };
