import * as Yup from 'yup';

export const ProductSchema = Yup.object().shape({
    name: Yup.string().required("name is required"),
    paragraf: Yup.string().min(4).required("paragraf is required"),
    icon: Yup.string().required("icon is required")
})