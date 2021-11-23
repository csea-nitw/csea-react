import { Grid, Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import React from 'react';
import { pi } from '../constants/sampleConstant';
import { SampleComponent } from '../components/sampleComponent';

function Waiting() {
  return (
    <Grid container alignItems="center" justifyContent="center" spacing={2}>
      <Grid item xs={12} mt={5}>
        <Typography variant="h2" mt={4}>
          Quiz #122 Will Start in
        </Typography>

        <Typography variant="h3" mt={1} sx={{ color: 'gray' }}>
          12:00:00
        </Typography>
      </Grid>
      <Grid item md={12} mt={5}>
        <Button variant="contained" size="large" disableElevation disabled>
          {' '}
          Start Quiz
        </Button>
      </Grid>
    </Grid>
  );
}

export { Waiting };
