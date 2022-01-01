import React from "react";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { Divider, IconButton, Link, Toolbar } from "@material-ui/core";
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
      display: "block",
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
  divider: {
    display: "block",
    width: "17rem",
    marginTop: "1rem",
    marginBottom: "1rem",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  copyright: {
    fontSize: "0.7rem",
  },
}));

function Copyright() {
  const classes = useStyles();
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      className={classes.copyright}
    >
      {"© "}
      <Link color="inherit" href="https://mui.com/">
        CSEA NITW
      </Link>
    </Typography>
  );
}

const Footer = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className="Home">
        <Box display="flex" justifyContent="space-between" pl={5} pr={5} mb={2}>
          <Box className={classes.footLeft}>
            <Toolbar className="csea-logo">
              <Box component="img" alt="Your logo." src={Logo} />
            </Toolbar>
            <Stack direction="row" spacing={2}>
              <IconButton aria-label="Instagram.com">
                <InstagramIcon className="icon" />
              </IconButton>
              <IconButton aria-label="Linkedin.com">
                <LinkedInIcon className="icon" />
              </IconButton>
              <IconButton aria-label="Facebook.com">
                <FacebookIcon className="icon" />
              </IconButton>
              <IconButton aria-label="Twitter.com">
                <TwitterIcon className="icon" />
              </IconButton>
            </Stack>
          </Box>
          <Box className={classes.footMobile}>
            <Stack mb={1} container mt={2} direction="row" spacing={7}>
              <Stack spacing={1}>
                <Box>
                  <Link
                    href="/"
                    className="hlink"
                    color="inherit"
                    fontFamily="title-font"
                  >
                    Quizex
                  </Link>
                </Box>
                <Box>
                  <Link href="/" className="hlink" color="inherit">
                    Internito
                  </Link>
                </Box>
                <Box>
                  <Link href="/" className="hlink" color="inherit">
                    Contact
                  </Link>
                </Box>
              </Stack>
              <Stack spacing={1}>
                <Box>
                  <Link href="#" color="inherit">
                    Home
                  </Link>
                </Box>
                <Box>
                  <Link href="#" color="inherit">
                    Events
                  </Link>
                </Box>
                <Box>
                  <Link href="#" color="inherit">
                    Teams
                  </Link>
                </Box>
              </Stack>
              <Stack spacing={1}>
                <Box>
                  <Link href="#" color="inherit">
                    Gallery
                  </Link>
                </Box>
                <Box>
                  <Link href="#" color="inherit">
                    Alumni
                  </Link>
                </Box>
                <Box>
                  <Link href="#" color="inherit">
                    Careers
                  </Link>
                </Box>
              </Stack>
            </Stack>
            <Divider
              className={classes.divider}
              style={{
                borderTop: "0.1rem solid rgba(0,0,0,0.25)",
              }}
              variant="middle"
            />
            <Box className={classes.footBottom}>
              <Toolbar>
                <Box component="img" alt="Your logo." src={Logo} />
              </Toolbar>
              <Stack direction="row" spacing={2} mt={1} mb={2.5}>
                <IconButton aria-label="Instagram.com">
                  <InstagramIcon className="icon" />
                </IconButton>
                <IconButton aria-label="Linkedin.com">
                  <LinkedInIcon className="icon" />
                </IconButton>
                <IconButton aria-label="Facebook.com">
                  <FacebookIcon className="icon" />
                </IconButton>
                <IconButton aria-label="Twitter.com">
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
