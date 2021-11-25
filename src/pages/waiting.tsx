import { Grid, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import Countdown from 'react-countdown';

function Waiting() {
  const [startTime, setStartTime] = useState(Date.now() + 5000);
  const [active, setActive] = useState(true);
  // const navigate = useNavigate();

  const localStart = localStorage.getItem('start-time');
  if (localStart) {
    setStartTime(new Date(localStart).getTime);
  }
  setInterval(() => {
    if (Date.now() > startTime) {
      setActive(false);
      // navigate('/quiz');
    }
  }, 100);
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
        <Typography variant="h4" mt={4} style={{ color: 'black' }}>
          <Countdown date={startTime} />
        </Typography>
      </Grid>
      <Grid item md={12} style={{ position: 'relative', top: '-150px', marginTop: '50px' }}>
        <Link to="/quiz">
          <Button variant="contained" size="large" disableElevation disabled={active}>
            {' '}
            Start Quiz
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export { Waiting };
