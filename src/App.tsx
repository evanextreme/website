import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/navigation/navbar";
import Container from "@material-ui/core/Container";

import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

import { red, blue, lightBlue } from "@material-ui/core/colors";

import useMediaQuery from "@material-ui/core/useMediaQuery";

import About from "./pages/about";
import Pay from "./pages/pay";

const App: React.FC = () => {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDark ? "dark" : "light",
          primary: prefersDark ? lightBlue : blue,
          secondary: lightBlue,
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

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <head>
          <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "1a06751c0793415aa7c6c82fe1226172"}'></script>
        </head>
        <div
          className="App"
          style={{ backgroundColor: "palette.background.default" }}
        >
          <div className="App-header">
            <Navbar></Navbar>
          </div>
          <Container maxWidth="sm">
            <Switch>
              <Route path="/pay">
                <Pay></Pay>
              </Route>
              <Route path="/">
                <About></About>
              </Route>
            </Switch>
          </Container>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
