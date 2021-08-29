import { createTheme } from "@material-ui/core/styles";

export const materialUiTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#8e65ab",
    },
    secondary: {
      main: "#6a1b9a",
    },
    error: {
      main: "#f44336",
    },
  },
  typography: {
    fontFamily: "Urbanist",
  },
  shape: {
    borderRadius: 2,
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 40,
        minWidth: 200,
      },
    },
    MuiTypography: {
      root: {
        lineHeight: 1.5,
      },
      body1: {
        marginBottom: 14,
      },
    },
  },
});
