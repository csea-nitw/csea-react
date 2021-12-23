/* eslint-disable react/jsx-props-no-spreading */

import { Grid, Typography, Card, CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

import { useInput } from '@mui/base';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { quizmasQuestion } from '../constants/sampleQuizmas';
import '../css/quizmas.css';

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
  const [response, setResponse] = useState('');
  const [open, setOpen] = useState(false);
  const [errText, setErrText] = useState('');
  const [result, setResult] = useState({ message: '' });
  const navigate = useNavigate();
  const userId = localStorage.getItem('csea-quizmas-token');
  useEffect(() => {
    if (!userId) {
      navigate('/register');
    }
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (result.message) {
      setErrText(result.message);
    }
  }, [result]);

  const submit = () => {
    if (response.length >= 1) {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), 10000);
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          day: quizmasQuestion.day,
          answer: response,
        }),
        signal: controller.signal,
      };
      fetch('https://csea-backend.herokuapp.com/api/check', requestOptions)
        .then((res) => {
          if (!res.ok) {
            throw new Error('response is not ok');
          }
          setOpen(true);
          return res.json();
        })
        .then((val) => setResult(val))
        .catch((err) => {
          console.log(err);
          // window.location.href = '/';
        })
        .finally(() => clearTimeout(id));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {isReady ? (
        <Grid className="baseGrid">
          <Grid
            container
            xs={12}
            direction="row"
            style={{
              userSelect: 'none',
              height: '100%',
              margin: '0 auto',
            }}
          >
            {/* wishes here */}

            <Grid item md={12} height="max-content" margin="auto" container direction="column">
              <Typography variant="h3" color="white" fontWeight={600}>
              Quizzmas{' '}
              </Typography>
              <Typography variant="h4" color="white" fontWeight={500}>
                Day {quizmasQuestion.day}
              </Typography>
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
              <Card
                sx={{ padding: '2', margin: '3vh 2vw', borderRadius: '0px' }}
                variant="outlined"
                elevation={4}
              >
                <Collapse in={open}>
                  <Alert
                    severity="info"
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                    sx={{ mb: 2 }}
                  >
                    {errText}
                  </Alert>
                </Collapse>
                <CardContent>
                  {/* Question */}
                  {quizmasQuestion.imageUrl !== '' ? (
                    <Grid item container direction="row">
                      <Grid item md={4} xs={12}>
                        <img
                          src={quizmasQuestion.imageUrl}
                          alt={`${quizmasQuestion.imageUrl}`}
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
                        <Box padding="1vh" mt={1} mb={3} sx={{ width: '100%', border: '' }}>
                          <Typography fontWeight={500}> {quizmasQuestion.question}</Typography>
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
                        <Typography variant="h5" fontWeight={500}>
                          {' '}
                          {quizmasQuestion.question}
                        </Typography>
                      </Box>
                    </Grid>
                  )}
                  <hr />
                  <br />
                  <CustomInput
                    aria-label="Demo input"
                    placeholder="Type something..."
                    id="response-input"
                    onChange={(e) => setResponse(e.target.value)}
                    style={{ width: '75%' }}
                  />
                  <Button
                    variant="contained"
                    style={{
                      margin: '10px',
                      marginTop: '20px',
                      width: '50%',
                      backgroundColor: '#F12337',
                    }}
                    value={response}
                    onClick={() => submit()}
                  >
                    Check
                  </Button>
                </CardContent>
                <hr />
              </Card>
              <Typography sx={{ color: 'white', fontWeight: 'bold' }}>
                CSEA Wishes You a Merry Christmas!
              </Typography>
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
