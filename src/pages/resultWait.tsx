import { Grid, Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import React from 'react';
import { pi } from '../constants/sampleConstant';
import { SampleComponent } from '../components/sampleComponent';

function ResultWaiting() {
  return (
    <Grid container alignItems="center" justifyContent="center" spacing={2}>
      <Grid item xs={12} mt={5}>
        <Typography variant="h2" mt={4}>
          Your result will be here soon!
        </Typography>
      </Grid>
      <Grid item md={12} mt={5}>
        <Button variant="contained" size="large" disableElevation disabled>
          {' '}
          Check Result
        </Button>
      </Grid>
    </Grid>
  );
}

export { ResultWaiting };
