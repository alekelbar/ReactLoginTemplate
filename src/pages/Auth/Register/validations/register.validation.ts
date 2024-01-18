import * as Yup from 'yup'


export const registerValidation = Yup.object({
  email: Yup.string().email("El formato no es correcto").required("Su email es requerido"),
  password: Yup.string().required("Su contraseña es requerida"),
  confirmPassword: Yup
    .string()
    .required("Necesita confirmar su contraseña")
    .test("confirmPass", "Las contraseñas deben coincidir", (value, ctx) => {
      return value === ctx.parent.password;
    }),
  name: Yup.string().required("Su nombre es obligatorio"),
  lastName: Yup.string().required("Su apellido es obligatorio"),
});