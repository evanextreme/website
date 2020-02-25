import React from "react";
import { AppBar, Grid, Toolbar, IconButton } from "@material-ui/core";

// import { Link } from "react-router-dom";

import {
  Email as EmailIcon,
  GithubFace as GitHubIcon,
  Twitter as TwitterIcon
} from "mdi-material-ui";

import "./navbar.css";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <AppBar>
        <Toolbar>
          <p className="navbar-logo-text">EHIRSH</p>
          <Grid container spacing={1} direction="row" justify="flex-end">
            <IconButton href="mailto:evan@ehirsh.com" aria-label="Email">
              <EmailIcon />
            </IconButton>
            <IconButton
              href="https://www.twitter.com/evanextreme"
              aria-label="Twitter"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              href="https://www.github.com/evanextreme"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
