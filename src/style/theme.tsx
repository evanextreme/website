import React from "react";

import { createTheme } from "@material-ui/core/styles";
import { indigo, red } from "@material-ui/core/colors";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

const mainTheme = React.useMemo(
  () =>
  createTheme({
    palette: {
      primary: {
        main: '#0d47a1',
      },
      secondary: indigo,
      error: red,
      // Used by `getContrastText()` to maximize the contrast between the background and
      // the text.
      contrastThreshold: 3,
      // Used to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.4,
    },
  }),
  [prefersDark]
);

export default mainTheme;
