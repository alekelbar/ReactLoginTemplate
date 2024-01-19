import { Box, Container, Typography } from "@mui/material"
import image from './../../assets/buildingSite.png'

type NewFeatureProps = {
  moduleName: string
}

export const NewFeature: React.FC<NewFeatureProps> = ({
  moduleName
}) => {
  return (
    <Container>
      <Container>
        <picture>
          <img width={'100%'} src={image} alt="building site" />
        </picture>
      </Container>
      <Typography textAlign={'center'} variant="h5">
        ¡Ey! Ten cuidado, este módulo de
        <Box component={'span'} sx={{
          fontWeight: 'bold',
          fontSize: '2rem',
          color: theme => theme.palette.primary.main
        }}>
          {" " + moduleName + " "}
        </Box>
        se encuentra en desarrollo, ¡Vuelve luego!
      </Typography>
    </Container>
  )
}
