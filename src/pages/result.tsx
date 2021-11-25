import { Grid, Typography, Card, CardContent, Button } from '@mui/material';
import React from 'react';

function Result() {
  return (
    <Card style={{ maxWidth: '500px', margin: '50px auto' }}>
      <CardContent>
        <Grid container alignItems="center" justifyContent="center" spacing={2}>
          <Grid item xs={12} mt={1} mb={1}>
            <Typography variant="h3">Here is your result!</Typography>
            <br />
            <hr />
          </Grid>
          <Grid item md={12}>
            <Typography variant="h5" mt={2}>
              Score: 123
            </Typography>
            <Typography variant="h5" mt={1}>
              High Score: 456
            </Typography>
            <Typography variant="h5" mt={1} mb={3}>
              Your Best: 567
            </Typography>
            <Button variant="outlined" size="large">
              Go back to home page
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export { Result };
