/* eslint-disable react/jsx-props-no-spreading */

import { Button, Grid, Typography, Card, CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';

import { useInput } from '@mui/base';
import { styled } from '@mui/system';
// import { useNavigate } from 'react-router-dom';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const StyledInputElement = styled('input')`
  width: 200px;
  font-size: 1rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.4375em;
  background: rgb(243, 246, 249);
  border: 1px solid #e5e8ec;
  border-radius: 10px;
  padding: 6px 10px;
  color: #20262d;
  transition: width 300ms ease;
  text-align: 'center'

  &:hover {
    background: #eaeef3;
    border-color: #e5e8ec;
  }

  &:focus {
    outline: none;
    width: 220px;
    transition: width 200ms ease-out;
  }
`;

const CustomInput = React.forwardRef(
  (
    props: React.InputHTMLAttributes<HTMLInputElement>,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    const { getRootProps, getInputProps } = useInput(props, ref);

    return (
      <div {...getRootProps()}>
        <StyledInputElement {...props} {...getInputProps()} />
      </div>
    );
  },
);

function QuizMas() {
  const [isReady, setIsReady] = useState(false);
  const imgUrl = '';
  const QsText = 'Some Question';
  useEffect(() => {
    setIsReady(true);
  });
//   const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      {isReady ? (
        <Grid>
          <Grid
            container
            xs={12}
            direction="row"
            style={{
              userSelect: 'none',
              height: '100%',
              backgroundColor: '#EAEEF3',
              margin: '0 auto',
            }}
          >
            {/* pallete thing here */}

            <Grid item md={12} height="max-content" margin="auto" container direction="column">
              <Card sx={{ padding: '2' }} variant="outlined">
                <CardContent>
                  <Grid margin="auto">
                    <Typography variant="h2">CSEA wishes you Merry Christmas</Typography>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* main quiz panel will appear here */}
            <Grid
              item
              xs={12}
              md={6}
              margin="0 auto"
              borderRadius="15px"
              container
              direction="column"
            >
              <Card sx={{ padding: '2', margin: '3vh 2vw' }} variant="outlined">
                <CardContent>
                  <Typography variant="h5" fontWeight={600} mb={0}>
                    Question of the day
                  </Typography>

                  {/* Question */}
                  {imgUrl !== '' ? (
                    <Grid item container direction="row">
                      <Grid item md={4} xs={12}>
                        <img
                          src={imgUrl}
                          alt={`${imgUrl}`}
                          style={{
                            height: '150px',
                            margin: 'auto',
                            padding: '1vh',
                            borderRadius: '15px',
                            objectFit: 'contain',
                          }}
                        />
                      </Grid>
                      <Grid
                        item
                        md={8}
                        xs={12}
                        style={{
                          margin: 'auto',
                        }}
                      >
                        <Box
                          padding="1vh"
                          fontWeight={400}
                          mt={1}
                          mb={3}
                          sx={{ width: '100%', border: '' }}
                        >
                          {' '}
                          {QsText}
                        </Box>
                      </Grid>
                    </Grid>
                  ) : (
                    <Grid
                      item
                      style={{
                        margin: 'auto',
                      }}
                    >
                      <Box
                        padding="1vh"
                        fontWeight={400}
                        mt={1}
                        mb={2}
                        sx={{ width: '100%', border: '' }}
                      >
                        {' '}
                        {QsText}
                      </Box>
                    </Grid>
                  )}
                  <hr />
                  <br />
                  <CustomInput aria-label="Demo input" placeholder="Type something..." />
                  <Button
                    variant="contained"
                    style={{
                      margin: '10px',
                    }}
                  >
                    Check
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <></>
      )}
    </ThemeProvider>
  );
}

export { QuizMas };
