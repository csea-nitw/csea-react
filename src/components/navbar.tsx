import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import Csealogo from '../media/images/csealogo-QUIZIX.png';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const ButtonAppBar = () => {
  const [register, setRegister] = React.useState(false);
  const localAuth = localStorage.getItem('csea-quizmas-token');
  React.useEffect(() => {
    if (localAuth) {
      setRegister(true);
    } else setRegister(false);
  });
  return (
    <AppBar position="sticky" style={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Grid
          container
          direction="row"
          style={{
            position: 'absolute',
            left: '60%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Grid item md={9} xs={7}>
            <img
              src={Csealogo}
              style={{
                margin: 'auto',
                textAlign: 'center',
                maxHeight: '30px',
              }}
              alt="CSEA"
            />{' '}
          </Grid>
          {register ? (
            <ThemeProvider theme={theme}>
              <Grid item md={2} xs={4}>
                <Button
                  style={{
                    color: 'white',
                  }}
                  onClick={() => {
                    localStorage.removeItem('csea-quizmas-token');
                    window.location.href = '/csea-react/#';
                    setRegister(false);
                  }}
                >
                  <Typography> Logout</Typography>
                </Button>
              </Grid>
            </ThemeProvider>
          ) : (
            <></>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export { ButtonAppBar as Navbar };
