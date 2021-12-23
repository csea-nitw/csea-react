import { Grid, Typography, Button, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Test() {
  const navigate = useNavigate();
  useEffect(() => {
    const localAuth = localStorage.getItem('csea-quizmas-token');
    if (localAuth) {
      navigate('/wait');
    }
  }, []);
  return (
    <Grid container alignItems="center" justifyContent="center" spacing={2}>
      <Grid item xs={12} mt={5}>
        <Typography variant="h2" mt={4}>
          Welcome to CSEA Quizix!
        </Typography>
      </Grid>
      <Grid item md={12}>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            size="large"
            disableElevation
            style={{ backgroundColor: 'black' }}
            onClick={() => {
              window.location.href = '/login';
            }}
          >
            {' '}
            Log In
          </Button>
          <Button
            variant="contained"
            size="large"
            disableElevation
            style={{ backgroundColor: 'black' }}
          >
            {' '}
            Sign Up
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export { Test };
