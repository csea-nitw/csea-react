import React from "react";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { IconButton, Link, Toolbar } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import Logo from "../csea-edit.png";
import { Box } from "@mui/system";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../css/font.css";
import "../css/footer.css";
import { makeStyles } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fffff",
    },
    secondary: {
      main: "#00000",
    },
  },
});
const useStyles = makeStyles((theme) => ({
  footLeft: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  footMobile: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontSize: "1.2rem",
    },
  },
  footBottom: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  copyright: {
    fontSize: "0.7rem",
    fontFamily: "text-font",
  },
}));

function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant="body2" align="center" className={classes.copyright}>
      © CSEA NITW
    </Typography>
  );
}

const Footer = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className="footer-container">
        <Box display="flex" justifyContent="space-between" pl={5} pr={5} mb={2}>
          <Box className={classes.footLeft}>
            <Toolbar className="csea-logo">
              <Box component="img" alt="Your logo." src={Logo} />
            </Toolbar>
            <Stack direction="row" spacing={1}>
              <IconButton
                aria-label="Instagram.com"
                onClick={() => {
                  window.open("https://www.instagram.com/csea_nitw/", "_blank");
                }}
              >
                <InstagramIcon className="icon" />
              </IconButton>
              <IconButton
                aria-label="Linkedin.com"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/company/csea-nitw/",
                    "_blank"
                  );
                }}
              >
                <LinkedInIcon className="icon" />
              </IconButton>
              <IconButton
                aria-label="Facebook.com"
                onClick={() => {
                  window.open("https://www.facebook.com/cseanitw", "_blank");
                }}
              >
                <FacebookIcon className="icon" />
              </IconButton>
              <IconButton
                aria-label="Twitter.com"
                onClick={() => {
                  window.open("https://twitter.com/cseanitw", "_blank");
                }}
              >
                <TwitterIcon className="icon" />
              </IconButton>
            </Stack>
          </Box>
          <Box className={classes.footMobile}>
            <Stack mb={2} container mt={2} direction="row" spacing={7}>
              <Stack spacing={1}>
                <Box>
                  <Link
                    href="/"
                    className="hlink"
                    color="inherit"
                    style={{
                      fontFamily: "title-semi-normal-font",
                    }}
                  >
                    Quizex
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/"
                    className="hlink"
                    color="inherit"
                    style={{
                      fontFamily: "title-semi-normal-font",
                    }}
                  >
                    Internito
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/"
                    className="hlink"
                    color="inherit"
                    style={{
                      fontFamily: "title-semi-normal-font",
                    }}
                  >
                    Contact
                  </Link>
                </Box>
              </Stack>
              <Stack spacing={1}>
                <Box>
                  <Link
                    href="/"
                    color="inherit"
                    style={{
                      fontFamily: "title-normal-font",
                    }}
                  >
                    Home
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/"
                    color="inherit"
                    style={{
                      fontFamily: "title-normal-font",
                    }}
                  >
                    Events
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/"
                    color="inherit"
                    style={{
                      fontFamily: "title-normal-font",
                    }}
                  >
                    Teams
                  </Link>
                </Box>
              </Stack>
              <Stack spacing={1}>
                <Box>
                  <Link
                    href="/"
                    color="inherit"
                    style={{
                      fontFamily: "title-normal-font",
                    }}
                  >
                    Gallery
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/"
                    color="inherit"
                    style={{
                      fontFamily: "title-normal-font",
                    }}
                  >
                    Alumni
                  </Link>
                </Box>
                <Box>
                  <Link
                    href="/"
                    color="inherit"
                    style={{
                      fontFamily: "title-normal-font",
                    }}
                  >
                    Careers
                  </Link>
                </Box>
              </Stack>
            </Stack>
            <Box className={classes.footBottom}>
              <Toolbar>
                <Box component="img" alt="Your logo." src={Logo} />
              </Toolbar>
              <Stack direction="row" spacing={1} mt={1} mb={2.5}>
                <IconButton
                  aria-label="Instagram.com"
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/csea_nitw/",
                      "_blank"
                    );
                  }}
                >
                  <InstagramIcon className="icon" />
                </IconButton>
                <IconButton
                  aria-label="Linkedin.com"
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/company/csea-nitw/",
                      "_blank"
                    );
                  }}
                >
                  <LinkedInIcon className="icon" />
                </IconButton>
                <IconButton
                  aria-label="Facebook.com"
                  onClick={() => {
                    window.open("https://www.facebook.com/cseanitw", "_blank");
                  }}
                >
                  <FacebookIcon className="icon" />
                </IconButton>
                <IconButton
                  aria-label="Twitter.com"
                  onClick={() => {
                    window.open("https://twitter.com/cseanitw", "_blank");
                  }}
                >
                  <TwitterIcon className="icon" />
                </IconButton>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Copyright />
      </div>
    </ThemeProvider>
  );
};

export default Footer;
