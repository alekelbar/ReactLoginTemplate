import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
// const THEME_CUSTOM = {


export const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});


type ThemeConfigProviderProps = {
  children: JSX.Element
}

export const ThemeConfigProvider: React.FC<ThemeConfigProviderProps> = ({
  children
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
