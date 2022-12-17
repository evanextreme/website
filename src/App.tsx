import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/navigation/navbar";
import Container from "@mui/material/Container";

import { ThemeProvider } from "@mui/styles";

import useMediaQuery from "@mui/material/useMediaQuery";

import mainTheme from "./style/theme"
import About from "./pages/about";
import Pay from "./pages/pay";

const App: React.FC = () => {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <ThemeProvider theme={mainTheme}>
      <Router>
        <head>
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": "1a06751c0793415aa7c6c82fe1226172"}'
          ></script>
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
