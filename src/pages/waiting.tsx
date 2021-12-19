import { Grid, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Countdown from 'react-countdown';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);
function Waiting() {
  const startTime = 1638118800000 - 30 * 60 * 1000 - 4 * 60 * 60 * 1000;
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const localAuth = localStorage.getItem('csea-quiz-token');
    if (!localAuth) {
      navigate('/register');
    }
  }, []);
  setInterval(() => {
    if (Date.now() > startTime) {
      setActive(false);
      // navigate('/quiz');
    }
  }, 100);
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="space-around"
        spacing={2}
        style={{ height: '90vh', backgroundColor: '#F3F7F7' }}
      >
        <Grid item>
          <Typography variant="h2" mt={4} style={{ color: '#3c3d3d' }}>
            Quizmas Will Start in
          </Typography>
          {/* Timer starts here */}
          <Typography variant="h4" mt={4} style={{ color: 'black' }}>
            <Countdown date={startTime} />
          </Typography>
        </Grid>
        <Grid item>
          {active!==true ? (
            <Link to="/quizmas">
              <Button variant="contained" size="large" disableElevation disabled={active}>
                {' '}
                Start Quiz
              </Button>
            </Link>
          ) : (
            <Button variant="contained" size="large" disableElevation disabled={!active}>
              {' '}
              Start Quiz
            </Button>
          )}
        </Grid>
        <Grid item>
          <Typography variant="h4" fontWeight="bold">
            Instructions
          </Typography>
          <Typography>
            1. You <strong>CAN</strong> use calculators
          </Typography>
          <Typography>
            2. You <strong>CAN</strong> switch tabs during contest
          </Typography>
          <Typography>
            3. <strong>Don&apos;t</strong> click on submit before you&apos;re done as system will
            accept only first entry as valid attempt
          </Typography>
          <Typography>
            4.{' '}
            <strong>
              The platform is still under development so don&apos;t refresh while you attempt the
              quiz
            </strong>
          </Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export { Waiting };
