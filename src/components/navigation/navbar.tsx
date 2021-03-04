import React from "react";
import { AppBar, Button, Grid, Toolbar, IconButton } from "@material-ui/core";
import { HomePageLink, PayPageLink } from "./links";

import {
  Email as EmailIcon,
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
} from "@material-ui/icons";

import "./navbar.css";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <AppBar position="sticky">
        <Toolbar>
          <a className="navbar-logo-text" href="/">EHIRSH</a>
          <Grid container spacing={1} direction="row" justify="flex-end">
            <Button color="inherit" href="https://world.hey.com/ehirsh">
              Blog
            </Button>
            <Button color="inherit" component={PayPageLink}>
              Pay
            </Button>
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
