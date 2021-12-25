import { Grid, Typography, Button, Card, CardContent, Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Countdown from 'react-countdown';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import '../css/gradient.css';
import '../css/waiting-bg.css';
import { Navbar } from '../components/navbar';

let theme = createTheme();
theme = responsiveFontSizes(theme);
function Waiting() {
  const startTime = 1640442600000;

  // const active = true;
  const navigate = useNavigate();
  useEffect(() => {
    const localAuth = localStorage.getItem('csea-quizmas-token');
    if (!localAuth) {
      navigate('/register');
    }
    // if (!window.location.hash) {
    //   window.location.href += '#loaded';
    //   window.location.reload();
    // }
    // return () => {
    //   window.location.reload();
    // };
  }, []);

  const instructText = {
    fontSize: '0.8rem',
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        spacing={2}
        style={{ height: '91.5vh', backgroundColor: '#FAFAFA' }}
        className="css-bg-selector"
      >
        <Grid item xs={12} md={6} className="noselect">
          <Card className="css-selector" sx={{ height: '100%', boxShadow: '3', margin: '2rem' }}>
            <CardContent>
              <Box
                sx={{
                  textAlign: 'left',
                  marginTop: '0',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '0.8rem',
                }}
              >
                <span
                  style={{
                    border: '2px solid white',
                    padding: '3px 5px',
                    borderRadius: '15px',
                  }}
                >
                  Current Contest
                </span>
              </Box>
              <Typography variant="h4" color="black" fontWeight={500}>
                Quizzmas 2021
              </Typography>
              <Typography
                fontSize=".9rem"
                sx={{ fontWeight: '500', color: 'black', marginBottom: '1rem' }}
              >
                Dec 25 @ 8:00 pm IST
              </Typography>
              {/* comment before quiz */}
              {/* <Link to="/61c6b095c51a9900231414e6">
                <Button
                  variant="contained"
                  sx={{ color: 'white' }}
                  size="small"
                  disableElevation
                >
                  {' '}
                  Start Quiz
                </Button>
              </Link> */}
              {/* comment when quiz will start */}
              <Button variant="outlined" size="small" disableElevation disabled>
                {' '}
                <Typography textAlign="left">
                  Quiz will start in <Countdown date={startTime} />
                </Typography>
              </Button>

              {/* To be figure out */}
              {/* {active ? (
                <Link to="/61c6b095c51a9900231414e6">
                  <Button
                    variant="contained"
                    sx={{ color: 'white' }}
                    size="small"
                    disableElevation
                    disabled={active}
                  >
                    {' '}
                    Start Quiz
                  </Button>
                </Link>
              ) : (
                <Button variant="outlined" size="small" disableElevation disabled={!active}>
                  {' '}
                  <Typography textAlign="left">
                    Quiz will start in <Countdown date={startTime} />
                  </Typography>
                </Button>
              )} */}
            </CardContent>
          </Card>
        </Grid>
        {/* <Grid
          item
          xs={12}
          md={6}
          sx={{
            padding: '30px',
            margin: '2rem',
            textAlign: 'left',
            border: '1px solid',
          }}
        >
          <Typography variant="h5">Instructions</Typography>
          <hr />
          <br />
          <Typography sx={instructText}>
            1. You <strong>CAN</strong> use calculators
          </Typography>
          <Typography sx={instructText}>
            2. You <strong>CAN</strong> switch tabs during contest
          </Typography>
          <Typography sx={instructText}>
            3. <strong>Don&apos;t</strong> click on submit before you&apos;re done as system will
            accept only first entry as valid attempt
          </Typography>
          <Typography sx={instructText}>
            4.{' '}
            <strong>
              The platform is still under development so don&apos;t refresh while you attempt the
              quiz
            </strong>
          </Typography>
        </Grid> */}
        {/* <Grid item>
          <hr style={{ width: '100vw', marginBottom: '20px' }} />
          
        </Grid> */}
      </Grid>
    </ThemeProvider>
  );
}

export { Waiting };
