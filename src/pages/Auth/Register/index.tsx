import { Button, Box, Card, Divider, Link, TextField, Typography, Grid, CardActionArea, CardActions } from "@mui/material"
import { Link as RDLink } from "react-router-dom"
import { routes } from "../../../router/routes"
import type { TRegisterForm } from "./types/Register.type"
import { useFormik } from "formik"
import { registerValidation } from "./validations/register.validation"
import { TextFieldError } from "../components/TextFieldError"

const initialValues: TRegisterForm = {
  email: '',
  name: '',
  lastName: '',
  password: '',
  confirmPassword: ''
}

export const RegisterPage = () => {

  const formik = useFormik({
    initialValues,
    onSubmit(values) {
      console.log(values)
    },
    validationSchema: registerValidation
  });

  return (
    <Card
      onSubmit={formik.handleSubmit}
      component={'form'}
      sx={{
        background: 'transparent',
        padding: '5px'
        // borderRadius: '10px 50px',
        // positioned

      }}
    >
      <Grid spacing={2} container sx={{
        maxWidth: { xs: '300px', sm: '500px', md: '700px' },
      }}>

        <Grid item
          justifyContent={{
            sm: "start"
          }}
          xs={12}
          sm={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}>

          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              my: '1rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid white',
              width: '100%',
            }}
          >Registro</Typography>

          <TextField
            value={formik.values.email}
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{
              my: '.5rem'
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

          <TextField
            value={formik.values.confirmPassword}
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{
              my: '.5rem'
            }}
            type="password"
            label="Confirm Password"
          />

          <TextFieldError
            show={!!(formik.errors.confirmPassword && formik.touched.confirmPassword)}
            text={formik.errors.confirmPassword}
          />


        </Grid>

        <Grid item
          justifyContent={{
            sm: "start"
          }}
          xs={12}
          sm={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}>


          <Typography
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            variant="body1"
            sx={{
              textAlign: 'center',
              my: '1rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid white',
              width: '100%',
            }}
          >Información personal</Typography>

          <TextField
            value={formik.values.name}
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{
              my: '.5rem'
            }}
            type="text"
            label="Nombre"
          />

          <TextFieldError
            show={!!(formik.errors.name && formik.touched.name)}
            text={formik.errors.name}
          />

          <TextField
            value={formik.values.lastName}
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{
              my: '.5rem'
            }}
            type="text"
            label="Apellido"
          />

          <TextFieldError
            show={!!(formik.errors.lastName && formik.touched.lastName)}
            text={formik.errors.lastName}
          />

        </Grid>
      </Grid>

      <CardActions sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Button
          type="submit"
          variant="contained"
          sx={{
            my: '1rem'
          }}
        >Registrarse</Button>

        <RDLink style={{ textAlign: 'center' }} to={`${routes.AUTH}/${routes.LOGIN}`}>
          <Link component={'p'} sx={{
            my: '1rem',
          }}>
            ¿Ya tienes una cuenta?
          </Link>
        </RDLink>
      </CardActions>
    </Card>
  )
}