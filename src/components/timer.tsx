import { Grid, Typography, Stack, Box } from '@mui/material';
import Countdown from 'react-countdown';
import React, { useState, useEffect } from 'react';

function Timer(prop: Date) {
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
