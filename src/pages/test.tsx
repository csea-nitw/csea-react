import { Grid, Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import React from 'react';
import { pi } from '../constants/sampleConstant';
import { SampleComponent } from '../components/sampleComponent';

function Test() {
  return (
    <Grid container alignItems="center" justifyContent="center" spacing={2}>
      <Grid item xs={12} mt={5}>
        <Typography variant="h2" mt={4}>
          Welcome to the CSEA Quiz App
        </Typography>
      </Grid>
      <Grid item md={12}>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            size="large"
            disableElevation
            style={{ backgroundColor: 'black' }}
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
