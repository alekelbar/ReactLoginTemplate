import { Button, Card, Link, TextField, Typography } from "@mui/material"
import { Link as RDLink } from "react-router-dom"
import { routes } from "../../../router/routes"
import { TloginForm } from "./types/Login.type"
import { useFormik } from "formik"
import { loginValidations } from "./validations/login.validation"
import { TextFieldError } from "../components/TextFieldError"
import { useAnonymousApi } from "../../../hooks/useAnonymousApi"
import { useAppDispatch } from "../../../redux/hooks.redux"
import { userLoginThunk } from "../../../redux/Slices/auth/thunks"

const initialValues: TloginForm = {
  email: '',
  password: '',
}

export const LoginPage = () => {

  const { client } = useAnonymousApi();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      dispatch(userLoginThunk(client, values))
    },
    validationSchema: loginValidations
  });

  return (
    <Card
      onSubmit={formik.handleSubmit}
      component={'form'}
      sx={{
        background: 'transparent',
        padding: '40px',
        borderRadius: '10px 50px',

        // positioned
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant="body1"
        sx={{
          textAlign: 'center',
          my: '1rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid white',
          width: '100%',
        }}
      >Bienvenido</Typography>

      <TextField
        value={formik.values.email}
        name={"email"}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        sx={{
          my: '.5rem',
        }}
        type="text"
        label="Email"
      />

      <TextFieldError
        show={!!(formik.errors.email && formik.touched.email)}
        text={formik.errors.email}
      />

      <TextField
        value={formik.values.password}
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        sx={{
          my: '.5rem'
        }}
        type="password"
        label="Password"
      />

      <TextFieldError
        show={!!(formik.errors.password && formik.touched.password)}
        text={formik.errors.password}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{
          my: '1rem'
        }}
      >Iniciar sesión</Button>

      <RDLink style={{ textAlign: 'center' }} to={`${routes.AUTH}/${routes.REGISTER}`}>
        <Link component={'p'} sx={{
          my: '1rem'
        }}>
          ¿Todavía no tiene una cuenta?
        </Link>
      </RDLink>

    </Card>
  )
}