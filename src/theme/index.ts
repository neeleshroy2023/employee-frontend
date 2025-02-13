import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8e2bd9",
    },
    secondary: {
      main: "#77d92b",
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontFamily: "Open Sans",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.5rem",
      fontFamily: "Open Sans",
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.17rem",
      fontFamily: "Open Sans",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1rem",
      fontFamily: "Open Sans",
      fontWeight: 700,
    },
    h5: {
      fontSize: "0.83rem",
      fontFamily: "Open Sans",
      fontWeight: 700,
    },
    h6: {
      fontSize: "0.67rem",
      fontFamily: "Open Sans",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
      fontFamily: "Nunito Sans",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.83rem",
      fontFamily: "Nunito Sans",
      fontWeight: 400,
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export default theme;
