import React from "react";
import {
  AppBar,
  Button,
  Grid,
  Link,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import { HomePageLink, PayPageLink } from "./links";

import {
  Email as EmailIcon,
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
  Forum as MastodonIcon,
} from "@material-ui/icons";

import "./navbar.css";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <AppBar position="sticky">
        <Toolbar>
          <Grid container spacing={1} direction="row" justify="flex-start">
            <Link component={HomePageLink}>
              <div className="navbar-logo-text">EVAN HIRSH</div>
            </Link>
          </Grid>
          <Grid container spacing={1} direction="row" justify="flex-end">
            {/* <ProjectMenu /> */}
            <Button color="inherit" href="https://blog.ehirsh.com/">
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
              href="https://mastodon.social/@evanextreme"
              aria-label="Mastodon"
            >
              <MastodonIcon />
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
