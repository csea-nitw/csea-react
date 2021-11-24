import { Grid, Typography, Stack, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';

function Timer(prop: Date) {
  //   const calculateTimeLeft = () => {
  //     let year = new Date().getFullYear();
  //     let difference = +new Date(`10/01/${year}`) - +new Date();
  //     let timeLeft = {};

  //     if (difference > 0) {
  //       timeLeft = {
  //         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
  //         minutes: Math.floor((difference / 1000 / 60) % 60),
  //         seconds: Math.floor((difference / 1000) % 60),
  //       };
  //     }

  //     const [timeleft, setTimeLeft] = useState(calculateTimeLeft());

  //     useEffect(() => {
  //       const timer = setTimeout(() => {
  //         setTimeLeft(calculateTimeLeft());
  //       }, 1000);
  //       return () => clearTimeout(timer);
  //       const timerComponents = [];

  //       Object.keys(timeLeft).forEach((interval) => {
  //         if (!timeleft[interval]) {
  //           return;
  //         }

  //         timerComponents.push(
  //           <span>
  //             {timeleft[interval]} {interval}{' '}
  //           </span>,
  //         );
  //       });
  //     });

  //     return timeLeft;
  //   };

  return (
    <>
      <Stack direction="row" spacing={1} justifyContent="center" mt={2}>
        <Box
          style={{
            width: '60px',
            height: '60px',
            alignContent: 'center',
            justifyContent: 'center',
            paddingTop: '10px',
            backgroundColor: 'white',
          }}
        >
          <Stack>
            <Typography fontWeight={600} fontSize={20}>
              00
            </Typography>
            <Typography fontSize={15} style={{ color: 'gray', paddingTop: '0', marginTop: '-5px' }}>
              days
            </Typography>
          </Stack>
        </Box>
        <Box
          style={{
            width: '60px',
            height: '60px',
            alignContent: 'center',
            justifyContent: 'center',
            paddingTop: '10px',
            backgroundColor: 'white',
          }}
        >
          <Stack>
            <Typography fontWeight={600} fontSize={20}>
              00
            </Typography>
            <Typography fontSize={15} style={{ color: 'gray', paddingTop: '0', marginTop: '-5px' }}>
              hrs
            </Typography>
          </Stack>
        </Box>
        <Box
          style={{
            width: '60px',
            height: '60px',
            alignContent: 'center',
            justifyContent: 'center',
            paddingTop: '10px',
            backgroundColor: 'white',
          }}
        >
          <Stack>
            <Typography fontWeight={600} fontSize={20}>
              00
            </Typography>
            <Typography fontSize={15} style={{ color: 'gray', paddingTop: '0', marginTop: '-5px' }}>
              mins
            </Typography>
          </Stack>
        </Box>
        <Box
          style={{
            width: '60px',
            height: '60px',
            alignContent: 'center',
            justifyContent: 'center',
            paddingTop: '10px',
            backgroundColor: 'white',
          }}
        >
          <Stack>
            <Typography fontWeight={600} fontSize={20}>
              00
            </Typography>
            <Typography fontSize={15} style={{ color: 'gray', paddingTop: '0', marginTop: '-5px' }}>
              sec
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}

export { Timer };
