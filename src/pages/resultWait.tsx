import { CardContent, Card, Grid, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import { useNavigate } from 'react-router-dom';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function ResultWaiting() {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [score, setScore] = useState(-1);
  const [resp, setResp] = useState<any>({});
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    if (resp) {
      if (resp.participant) setUser(resp.participant);
      if (resp.score) {
        setScore(resp.score);
        setIsReady(true);
      }
    }
  }, [resp]);
  useEffect(() => {
    const localAuth = localStorage.getItem('csea-quiz-token');
    if (!localAuth) {
      navigate('/register');
    }
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(`https://csea-backend.herokuapp.com/api/score/${localAuth}`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('response is not ok');
        }
        if (response.status !== 200) {
          throw new Error('Status code is not 200');
        }
        return response.json();
      })
      .then((val) => {
        setResp(val);
        // setThisQuiz(val);
      })
      .catch((err) => {
        console.log(err);

        // window.location.href = '/';
      });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ maxWidth: '80vw', margin: '20px auto' }}>
        <CardContent>
          <Grid container alignItems="center" justifyContent="center" spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h2" mt={4} mb={2}>
                Thank you for participating <em>{user}</em>!
              </Typography>

              {isReady && score !== -1 ? (
                <Typography variant="h3">
                  You&apos;ve scored <strong>{score}</strong> out of 30
                </Typography>
              ) : null}

              <hr />
            </Grid>
            <Grid item xs={12} mt={1}>
              <Typography sx={{ color: 'gray', fontSize: '22px', fontWeight: '500' }}>
                Results will be announced soon. We will get back to you once we are done with all
                response validations!
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}

export { ResultWaiting };
