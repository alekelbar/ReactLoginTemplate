import { Box, Container } from "@mui/material"
import { CustomDrawer } from "../components/CustomDrawer"

type PrivateProps = {
  children: JSX.Element
}

export const PrivateLayout: React.FC<PrivateProps> = ({
  children
}) => {
  return (
    <Box>
      <CustomDrawer>
        <Container
          sx={{
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 9,
          }}
        >
          {children}
        </Container>
      </CustomDrawer>
    </Box>
  )
}