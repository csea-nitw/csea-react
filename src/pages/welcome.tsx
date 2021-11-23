import { Grid, Typography } from '@mui/material';
import React from 'react';
import { pi } from '../constants/sampleConstant';
import { SampleComponent } from '../components/sampleComponent';

function Welcome() {
  return (
    <Grid>
      <h2>This is test page</h2>
      <p>Value of pi is {pi}</p>
      <Typography fontFamily="Custom1">This is in custom font</Typography>
      <SampleComponent />
    </Grid>
  );
}

export { Welcome };
