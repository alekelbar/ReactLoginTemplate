import * as Yup from "yup"

export const loginValidations = Yup.object({
  email: Yup.string().email("El formato no es correcto").required("El email es obligatorio"),
  password: Yup.string().required("La contraseña es requerida"),
});