import { Grid, Typography, Stack, Box, ThemeProvider } from '@mui/material';
import { Button } from '@mui/material';
import { Card } from '@mui/material';
import React from 'react';
import { pi } from '../constants/sampleConstant';
import { SampleComponent } from '../components/sampleComponent';

function Waiting() {
  const [hrs, sethrs] = React.useState(0);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      spacing={2}
      style={{ height: '100vh', backgroundColor: '#F3F7F7' }}
    >
      <Grid item xs={12} mt={3}>
        <Typography variant="h2" mt={4} style={{ color: '#3c3d3d' }}>
          Quiz #122 Will Start in
        </Typography>
        {/* Timer starts here */}
      </Grid>
      <Grid item md={12} style={{ position: 'relative', top: '-150px', marginTop: '50px' }}>
        <Button variant="contained" size="large" disableElevation disabled>
          {' '}
          Start Quiz
        </Button>
      </Grid>
    </Grid>
  );
}

export { Waiting };
