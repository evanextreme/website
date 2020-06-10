import React from "react";
import { AppBar, Button, Grid, Toolbar, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

import {
  Email as EmailIcon,
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
} from "@material-ui/icons";

import "./navbar.css";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export const PayLinkComponent = (props: any) => {
  return <Link to="/pay" {...props}></Link>;
};

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <AppBar position="sticky">
        <Toolbar>
          <h1 className="navbar-logo-text">EHIRSH</h1>
          <Grid container spacing={1} direction="row" justify="flex-end">
            <Button color="inherit" component={PayLinkComponent}>
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
