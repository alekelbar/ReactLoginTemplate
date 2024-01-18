import { Box, Container } from "@mui/material"

type PublicProps = {
  children: JSX.Element
}


export const PublicLayout: React.FC<PublicProps> = ({
  children
}) => {
  return (
    <Box>
      <Container
        sx={{
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          my: '2rem',
        }}
      >
        {children}
      </Container>
    </Box>
  )
}