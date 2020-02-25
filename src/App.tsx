import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/navigation/navbar";
import Container from "@material-ui/core/Container";

import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { blue, lightBlue, red } from "@material-ui/core/colors";

import { ParallaxProvider } from "react-scroll-parallax";

import useMediaQuery from "@material-ui/core/useMediaQuery";

import About from "./pages/about";

const App: React.FC = () => {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: prefersDark ? lightBlue : blue,
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

  return (
    <ParallaxProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <div className="App-header">
              <Navbar></Navbar>
            </div>
            <Container maxWidth="sm">
              <About></About>
            </Container>
          </div>
        </Router>
      </ThemeProvider>
    </ParallaxProvider>
  );
};

export default App;
