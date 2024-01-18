import { Typography, useTheme } from "@mui/material";

type TextFieldErrorProps = {
  text?: string;
  show: boolean;
}

export const TextFieldError: React.FC<TextFieldErrorProps> = ({
  show,
  text
}) => {

  return (
    <Typography sx={{
      display: show ? '' : 'none',
      my: '.1rem',
      color: (t) => t.palette.error.main,
    }}
    >
      {text}
    </Typography>
  )
}