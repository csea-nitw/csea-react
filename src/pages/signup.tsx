import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function SignUp() {
  const errText = 'Mobile number or mail already in use';
  const [open, setOpen] = React.useState(false);
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordR, setPasswordR] = React.useState('');
  const [allOk, setAllOk] = React.useState(false);
  const [userId, setUserId] = React.useState('');
  const navigate = useNavigate();
  React.useEffect(() => {
    setAllOk(
      firstName.length >= 2 &&
        lastName.length >= 2 &&
        password.length >= 6 &&
        email.length !== 0 &&
        phone.length === 10 &&
        password === passwordR,
    );
  }, [firstName, lastName, email, password]);

  React.useEffect(() => {
    const checkAlreadySigned = localStorage.getItem('csea-quizmas-token');
    // console.log(checkAlreadySigned);
    if (checkAlreadySigned) {
      navigate('/wait');
    }
  }, []);

  React.useEffect(() => {
    if (userId) {
      // console.log(userId);
      localStorage.setItem('csea-quizmas-token', userId);
      navigate('/wait');
    }
  }, [userId]);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // alert(firstName + lastName + email + phone + password);
    // eslint-disable-next-line no-console
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 5000);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        name: firstName,
        mobile_no: phone,
        password,
      }),
      signal: controller.signal,
    };
    fetch('https://csea-backend.herokuapp.com/api/signup', requestOptions)
      .then((response) => {
        if (!response.ok) {
          setOpen(true);
          throw new Error('response is not ok');
        }
        if (response.status !== 200) {
          setOpen(true);

          throw new Error('Status code is not 200');
        }
        return response.json();
      })
      .then((val) => setUserId(val.id))
      .catch((err) => {
        console.log(err);
        // window.location.href = '/';
      })
      .finally(() => clearTimeout(id));
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100%' }} justifyContent="center">
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
              Register for Quizmas
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <Collapse in={open}>
                <Alert
                  severity="error"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                  {errText}
                </Alert>
              </Collapse>
              <TextField
                margin="normal"
                required
                fullWidth
                id="first_name"
                label="First Name"
                name="firstName"
                autoComplete="name"
                autoFocus
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="last_name"
                label="Last Name"
                name="lastName"
                autoComplete="name"
                autoFocus
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="phoneNum"
                label="Mobile Number"
                name="phone"
                type="number"
                autoFocus
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Password"
                type="password"
                id="confirmPassword"
                value={passwordR}
                onChange={(e) => {
                  setPasswordR(e.target.value);
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={!allOk}
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Log In
                  </Link>
                </Grid>
              </Grid>
              <Typography variant="body2" color="text.secondary" align="center" mt={1}>
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

export { SignUp };
