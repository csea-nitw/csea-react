import { Button, Grid, Typography, Stack, Card, CardContent } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import Countdown from 'react-countdown';
import { useNavigate } from 'react-router-dom';
import { quizAvailable } from '../constants/sampleQuizData';

function Quiz() {
  const user = localStorage.getItem('quiz-user');
  const [currentQs, setCurrentQs] = useState(0);
  const [startTime, setStartTime] = useState(1638030000000);
  const [submitted, setSubmitted] = useState(false);
  const [attempts, setAttempts] = useState(false);
  const [thisQuiz, setThisQuiz] = useState(quizAvailable);
  const [isReady, setIsReady] = useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    console.log(thisQuiz);
    setIsReady(true);
  }, [thisQuiz]);

  React.useEffect(() => {
    if (Date.now() < 1638029000000) {
      navigate('/wait');
      return;
    }
    const localAuth = localStorage.getItem('csea-quiz-token');
    if (!localAuth) {
      navigate('/register');
    }
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch('https://csea-backend.herokuapp.com/api/attempt/6196910a7abcf523affc1602', requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error('response is not ok');
        }
        if (response.status !== 200) {
          throw new Error('Status code is not 200');
        }
        return response.json();
      })
      .then((val) => {
        console.log(val);
        setThisQuiz(val);
      })
      .catch((err) => {
        console.log(err);

        // window.location.href = '/';
      });
  }, []);

  const [selected, setSelected] = useState([
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1,
  ]);

  const localStart = localStorage.getItem('start-time');
  if (localStart) {
    setStartTime(new Date(localStart).getTime);
  }

  const submitQuestion = () => {
    const localToken = localStorage.getItem('csea-quiz-token');
    const savedResponse = {
      participant: localToken,
      quiz: thisQuiz.quiz_id,
      responses: [{}],
    };
    console.log(savedResponse);
    thisQuiz.questions.forEach((question, index) => {
      const ques = {
        question: question.qsCode,
        option: selected[index],
      };
      savedResponse.responses.push(ques);
    });
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(savedResponse),
    };
    if (submitted) return;
    //  console.log(savedResponse);
    fetch('https://csea-backend.herokuapp.com/api/response', requestOptions)
      .then((response) => {
        if (response.status === 500) {
          alert('already responded or try contacting csea');
          navigate('/result-wait');
        }
        if (!response.ok) {
          throw new Error('response is not ok');
        }
        if (response.status !== 200) {
          throw new Error('Status code is not 200');
        }
        setSubmitted(true);
        return response.json();
      })
      .then((val) => {
        setSubmitted(true);
      })
      .catch((err) => {
        console.log(err);

        // window.location.href = '/';
      });
  };

  setInterval(() => {
    if (Date.now() > startTime && Date.now() < startTime + 200) {
      if (!attempts) {
        setAttempts(true);
        console.log(attempts);
        submitQuestion();
      }
    }
  }, 1000);
  const getColorForPallete = (index: number, selectedOption: number): string => {
    if (selectedOption !== -1) return '#1AA260  ';
    if (currentQs === index) return '#f2c215';
    return 'white';
  };
  const getFontColorForPallete = (index: number, selectedOption: number): string => {
    if (currentQs === index) return 'black';
    if (selectedOption !== -1) return 'white';
    return 'black';
  };

  React.useEffect(() => {
    if (submitted) {
      alert('success-submitted');
      navigate('/result-wait');
    }
  }, [submitted]);

  return (
    <>
      {isReady ? (
        <>
          <Typography variant="h4" fontWeight={600} m={1}>
            Quiz #123
          </Typography>
          <Typography variant="h6" sx={{ color: 'gray' }} fontWeight={600} m={1}>
            Time Left: <Countdown date={startTime} />
          </Typography>
          <Button
            variant="outlined"
            sx={{ margin: '10px' }}
            onClick={() => {
              submitQuestion();
            }}
          >
            Submit Quiz
          </Button>
          <hr style={{ fontSize: '20' }} />
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

            <Grid
              item
              xs={11}
              md={4}
              height="max-content"
              margin="5vh auto"
              container
              direction="column"
            >
              <Card sx={{ padding: '2' }} variant="outlined">
                <CardContent>
                  <Typography variant="h5" fontWeight={600}>
                    Quiz Pallete
                  </Typography>
                  <Grid item container direction="row" style={{ justifyContent: 'space-evenly' }}>
                    {thisQuiz.questions.map((item, index) => (
                      <Grid
                        key={item.qsCode}
                        item
                        xs={1.8}
                        onClick={() => setCurrentQs(index)}
                        mt={1}
                        style={{
                          backgroundColor: getColorForPallete(index, selected[index]),
                          borderRadius: '5vh',
                          border: '1px solid gray',
                        }}
                      >
                        <Button
                          disableFocusRipple
                          disableTouchRipple
                          sx={{
                            color: getFontColorForPallete(index, selected[index]),
                          }}
                        >
                          {1 + index}
                        </Button>
                      </Grid>
                    ))}
                  </Grid>
                  <Grid
                    item
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                  >
                    <Grid item xs={4}>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          padding: '7px',
                          marginTop: '10px',
                        }}
                        onClick={() => {
                          setCurrentQs(Math.max(currentQs - 1, 0));
                        }}
                      >
                        Previous
                      </Button>
                    </Grid>
                    <Grid item xs={4}>
                      {selected[currentQs] !== -1 ? (
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{
                            padding: '5px',
                            marginTop: '10px',
                          }}
                          onClick={() => {
                            const newArr: number[] = [];
                            selected.forEach((selectedOption, index) => {
                              if (currentQs === index) {
                                newArr.push(-1);
                              } else {
                                newArr.push(selectedOption);
                              }
                            });
                            setSelected(newArr);
                          }}
                        >
                          Clear Response
                        </Button>
                      ) : (
                        <Button
                          variant="outlined"
                          size="small"
                          disabled
                          sx={{
                            padding: '5px',
                            marginTop: '10px',
                          }}
                          onClick={() => {
                            const newArr: number[] = [];
                            selected.forEach((selectedOption, index) => {
                              if (currentQs === index) {
                                newArr.push(-1);
                              } else {
                                newArr.push(selectedOption);
                              }
                            });
                            setSelected(newArr);
                          }}
                        >
                          Clear Response
                        </Button>
                      )}
                    </Grid>
                    <Grid item xs={4}>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          padding: '5px',
                          marginTop: '10px',
                        }}
                        onClick={() => {
                          setCurrentQs(Math.min(currentQs + 1, thisQuiz.questions.length - 1));
                        }}
                      >
                        Next
                      </Button>
                    </Grid>
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
                    Question {1 + currentQs}
                  </Typography>

                  <Typography maxWidth="100%">
                    Type - {thisQuiz.questions[currentQs].qsType} <DoneIcon />
                  </Typography>

                  {/* Question */}
                  {thisQuiz.questions[currentQs].qsImageUrl !== '' ? (
                    <Grid item container direction="row">
                      <Grid item md={4} xs={12}>
                        <img
                          src={thisQuiz.questions[currentQs].qsImageUrl}
                          alt={`${thisQuiz.questions[currentQs].qsImageUrl}`}
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
                          {thisQuiz.questions[currentQs].qsText}
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
                        {thisQuiz.questions[currentQs].qsText}
                      </Box>
                    </Grid>
                  )}
                  <hr />
                  <br />
                  <Grid
                    container
                    direction="row"
                    item
                    lg={12}
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                  >
                    {thisQuiz.questions[currentQs].options.map((option, index) => (
                      <Grid
                        container
                        item
                        md={6}
                        alignItems="center"
                        justifyContent="center"
                        xs={12}
                        onClick={() => {
                          const newArr: number[] = [];
                          selected.forEach((selectedOption, index2) => {
                            if (currentQs === index2) {
                              newArr.push(index);
                            } else {
                              newArr.push(selectedOption);
                            }
                          });
                          setSelected(newArr);
                        }}
                      >
                        {option.optionUrl !== '' ? (
                          <Grid item container justifyContent="center">
                            <Stack direction="row" alignItems="center" justifyContent="center">
                              <img
                                src={option.optionUrl}
                                alt={`${option.optionUrl}`}
                                style={
                                  selected[currentQs] === index
                                    ? {
                                        height: '150px',
                                        margin: 'auto',
                                        padding: '1vh',
                                        borderRadius: '15px',
                                        objectFit: 'cover',
                                        border: '2px solid green',
                                      }
                                    : {
                                        height: '150px',
                                        margin: 'auto',
                                        padding: '1vh',
                                        borderRadius: '15px',
                                        objectFit: 'cover',
                                      }
                                }
                              />
                              <Typography
                                position="relative"
                                sx={
                                  selected[currentQs] !== index
                                    ? {
                                        top: '-33%',
                                        left: '-84%',
                                        borderRadius: '50%',
                                        border: '1px solid black',
                                        backgroundColor: 'white',
                                        width: '25px',
                                        height: '25px',
                                        padding: '2px',
                                      }
                                    : {
                                        top: '-33%',
                                        left: '-84%',
                                        borderRadius: '50%',
                                        backgroundColor: 'green',
                                        color: '#fefefe',
                                        width: '25px',
                                        height: '25px',
                                        padding: '2px',
                                      }
                                }
                              >
                                {String.fromCharCode(65 + index)}
                              </Typography>
                            </Stack>
                          </Grid>
                        ) : (
                          <Grid
                            item
                            md={12}
                            xs={12}
                            style={{
                              margin: 'auto',
                              borderRadius: '30px',
                            }}
                          >
                            <Typography
                              textAlign="center"
                              padding="1.7vh"
                              sx={{
                                backgroundColor: '#C4C4C4',
                                borderRadius: '30px',
                                '&:hover': {
                                  fontWeight: 'bold',
                                  cursor: 'pointer',
                                },
                              }}
                              style={
                                selected[currentQs] === index
                                  ? { backgroundColor: '#1AA260', fontWeight: 'bold' }
                                  : {}
                              }
                              m={1}
                            >
                              {' '}
                              {option.optionText}
                            </Typography>
                          </Grid>
                        )}
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export { Quiz };
