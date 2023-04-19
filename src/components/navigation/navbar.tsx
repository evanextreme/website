import React from "react";
import {
  AppBar,
  Button,
  Grid,
  Link,
  Toolbar,
  IconButton,
} from "@mui/material";
import { HomePageLink, PayPageLink } from "./links";

import {
  Email as EmailIcon,
  GitHub as GitHubIcon,
  // Twitter as TwitterIcon,
  Cloud as BlueSkyIcon
} from "@mui/icons-material";

import SvgIcon from "@mui/material/SvgIcon"

import "./navbar.css";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <AppBar position="sticky">
        <Toolbar>
          <Grid container spacing={1} direction="row">
            <Link component={HomePageLink}>
              <div className="navbar-logo-text">EVAN HIRSH</div>
            </Link>
          </Grid>
          {/* align the grid to the right side */}
          <Grid container spacing={1} direction="row" justifyContent="flex-end">
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
              href="https://staging.bsky.app/profile/evan.exposed"
              aria-label="BlueSky"
            >
              <BlueSkyIcon />
            </IconButton>
            <IconButton
              href="https://mastodon.sdf.org/@evan"
              aria-label="Mastodon"
              rel="me"
            >
              <SvgIcon viewBox="0 0 60 60" preserveAspectRatio="none">
                <path d="M31.875,8.063C25.834,8.087 19.836,8.854 16.715,10.293C16.715,10.293 10,13.35 10,23.762C10,36.156 9.991,51.72 21.125,54.73C25.389,55.876 29.056,56.123 32.004,55.953C37.354,55.651 40,54.012 40,54.012L39.82,50.059C39.82,50.059 36.353,51.281 32.059,51.141C27.805,50.991 23.323,50.671 22.625,45.359C22.561,44.865 22.529,44.365 22.531,43.867C31.545,46.105 39.232,44.842 41.348,44.586C47.256,43.868 52.399,40.163 53.055,36.777C54.083,31.441 53.996,23.762 53.996,23.762C53.996,13.35 47.293,10.293 47.293,10.293C44.002,8.756 37.916,8.038 31.875,8.063L31.875,8.063ZM25.41,16.004C27.48,16.059 29.525,16.985 30.785,18.941L32.004,21.012L33.219,18.941C35.749,15.007 41.419,15.253 44.117,18.297C46.605,21.193 46.051,23.062 46.051,36L46.051,36.004L41.156,36.004L41.156,24.746C41.156,19.476 34.438,19.273 34.438,25.477L34.438,32L29.574,32L29.574,25.477C29.574,19.273 22.859,19.472 22.859,24.742L22.859,36L17.953,36C17.953,23.052 17.409,21.171 19.887,18.297C21.246,16.765 23.34,15.948 25.41,16.004L25.41,16.004 12h3v8z" />
              </SvgIcon>
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
