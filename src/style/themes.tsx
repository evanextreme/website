import React from "react";

import { createMuiTheme } from "@material-ui/core/styles";
import { blue, lightBlue, red } from "@material-ui/core/colors";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

const theme = React.useMemo(
  () =>
    createMuiTheme({
      palette: {
        primary: blue,
        secondary: lightBlue,
        error: red,
        // Used by `getContrastText()` to maximize the contrast between the background and
        // the text.
        contrastThreshold: 3,
        // Used to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.4
      }
    }),
  [prefersDark]
);

export default theme;
