import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

function SignIn() {
  const navigate = useNavigate();
  const [signIn, setSignIn] = React.useState(false);
  React.useEffect(() => {
    if (signIn) {
      localStorage.setItem('quiz-user', '61a0aa51714f2600234922f0');
      navigate('/quiz');
    }
  }, [signIn]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 5000);
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
    };
    fetch(
      'https://csea-backend.herokuapp.com/api/questions/61a08e68d2595b0023984644',
      requestOptions,
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('response is not ok');
        }
        if (response.status !== 200) {
          throw new Error('Status code is not 200');
        }
        return response.json();
      })
      .then(() => setSignIn(true))
      .catch((err) => {
        console.log(err);
        // window.location.href = '/';
      })
      .finally(() => clearTimeout(id));
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '95vh' }} justifyContent="center">
        <CssBaseline />

        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          sx={{ margin: '20px' }}
          component={Paper}
          elevation={2}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: 'black' }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    Dont have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
              <Typography variant="body2" color="text.secondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="cseanitw.in">
                  CSEA
                </Link>{' '}
                {new Date().getFullYear()}.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export { SignIn };
