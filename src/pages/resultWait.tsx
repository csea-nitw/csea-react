import { CardContent, Card, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import React from 'react';
import Countdown from 'react-countdown';

function ResultWaiting() {
  return (
    <Card sx={{ maxWidth: '500px', margin: '20px auto' }}>
      <CardContent>
        <Grid container alignItems="center" justifyContent="center" spacing={2}>
          <Grid item xs={12} mt={5}>
            <Typography variant="h2" mt={4}>
              Your result will be here soon!
            </Typography>
          </Grid>
          <Grid item xs={12} mt={1}>
            <Typography variant="h4" mt={1} sx={{ color: 'gray' }}>
              Quiz Ends in: <Countdown date={Date.now() + 100000} />
            </Typography>
          </Grid>
          <Grid item md={12} mt={2}>
            <Button variant="contained" size="large" disableElevation disabled>
              {' '}
              Check Result
            </Button>
          </Grid>
          <Grid item md={12} mt={2}>
            <img
              src="http://source.unsplash.com/random"
              alt="#"
              style={{
                height: '150px',
                margin: 'auto',
                padding: '1vh',
                borderRadius: '15px',
                objectFit: 'contain',
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export { ResultWaiting };
