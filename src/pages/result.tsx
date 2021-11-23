import { Grid, Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import React from 'react';
import { pi } from '../constants/sampleConstant';
import { SampleComponent } from '../components/sampleComponent';

function Result() {
  return (
    <Grid container alignItems="center" justifyContent="center" spacing={2}>
      <Grid item xs={12} mt={5}>
        <Typography variant="h2" mt={4}>
          Here is your result!
        </Typography>
      </Grid>
      <Grid item md={12} mt={5}>
        <Typography variant="h5" mt={2}>
          Score: 123
        </Typography>
        <Typography variant="h5" mt={1}>
          High Score: 456
        </Typography>
        <Typography variant="h5" mt={1}>
          Your Best: 567
        </Typography>
      </Grid>
    </Grid>
  );
}

export { Result };
