import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff", // Aquí defines el color principal personalizado
      // Puedes agregar otras tonalidades si lo deseas
    },
    secondary: {
      main: "#4caf50",
    },
  },
});

export default theme;