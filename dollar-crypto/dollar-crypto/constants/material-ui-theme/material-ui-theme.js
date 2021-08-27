import { createTheme } from "@material-ui/core/styles";
import { colors } from "@wesdollar/dollar-crypto.dollar-crypto.constants.colors";

const { primary, secondary, white, black, grey } = colors;

export const materialUiTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
});
