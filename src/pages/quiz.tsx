import { Button, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import { quizAvailable } from '../constants/sampleQuizData';

function Quiz() {
  const [currentQs, setCurrentQs] = useState(0);
  const [selected, setSelected] = useState([
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1,
  ]);

  const getColorForPallete = (index: number, selectedOption: number): string => {
    if (currentQs === index) return '#5B246C';
    if (selectedOption !== -1) return '#1AA260  ';
    return 'white';
  };
  return (
    <Grid
      container
      xs={12}
      direction="row"
      style={{ userSelect: 'none', backgroundColor: 'white', margin: '35px auto' }}
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
        style={{ backgroundColor: '#C4C4C4', borderRadius: '3vh', padding: '2vh' }}
      >
        <Typography fontWeight={600}>Quiz Pallete</Typography>
        <Grid item container direction="row" style={{ justifyContent: 'space-evenly' }}>
          {quizAvailable.questions.map((item, index) => (
            <Grid
              item
              xs={1.8}
              onClick={() => setCurrentQs(index)}
              mt={1}
              style={{
                backgroundColor: getColorForPallete(index, selected[index]),
                borderRadius: '2vh',
              }}
            >
              {1 + index}
            </Grid>
          ))}
        </Grid>
        <Grid item container direction="row" justifyContent="space-around" alignItems="center">
          <Grid item xs={4}>
            <Button
              variant="contained"
              size="small"
              sx={{
                padding: '5px',
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
            <Button
              variant="contained"
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
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              size="small"
              sx={{
                padding: '5px',
                marginTop: '10px',
              }}
              onClick={() => {
                setCurrentQs(Math.min(currentQs + 1, quizAvailable.questions.length - 1));
              }}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {/* main quiz panel will appear here */}
      <Grid item xs={12} md={6} margin="auto" container direction="column">
        <Typography fontSize={35} fontWeight={600} mb={-1}>
          Question {1 + currentQs}
        </Typography>

        <Typography maxWidth="100%">
          Type - {quizAvailable.questions[currentQs].qsType} <DoneIcon />
        </Typography>
        {/* Question */}
        {quizAvailable.questions[currentQs].qsImageUrl !== '' ? (
          <Grid item container direction="row">
            <Grid item md={4} xs={12}>
              <img
                src={quizAvailable.questions[currentQs].qsImageUrl}
                alt={`${quizAvailable.questions[currentQs].qsImageUrl}`}
                style={{
                  maxWidth: '100%',
                  maxHeight: '30vh',
                  margin: 'auto',
                  padding: '1vh',
                  borderRadius: '15px',
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
              <Box padding="1vh" fontWeight={400} mt={1} mb={3} sx={{ width: '100%', border: '' }}>
                {' '}
                {quizAvailable.questions[currentQs].qsText}
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
            <Box padding="1vh" fontWeight={400} mt={1} mb={2} sx={{ width: '100%', border: '' }}>
              {' '}
              {quizAvailable.questions[currentQs].qsText}
            </Box>
          </Grid>
        )}
        {quizAvailable.questions[currentQs].options.map((option, index) => (
          <Grid
            item
            container
            direction="row"
            sx={{
              '&:hover': {
                fontWeight: 'bold !important',
                cursor: 'pointer',
              },
            }}
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
            <Grid
              item
              xs={1}
              container
              height="100%"
              direction="column"
              margin="auto 0"
              justifyContent="center"
            >
              <Grid
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
                margin="auto"
              >
                {/* <Box padding="1vh">{1 + index}.</Box> */}
              </Grid>
            </Grid>
            {option.optionUrl !== '' ? (
              <Grid xs={10} item container direction="row">
                <Grid item md={6} xs={12}>
                  <img
                    src={option.optionUrl}
                    alt={`${option.optionUrl}`}
                    style={{ maxWidth: '60%', maxHeight: '20vh', margin: 'auto', padding: '1vh' }}
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                  style={{
                    margin: 'auto',
                  }}
                >
                  <Typography
                    border="solid"
                    textAlign="left"
                    padding="1vh"
                    sx={{
                      borderRadius: '30px',
                      '&:hover': {
                        color: 'red',
                      },
                    }}
                    style={
                      selected[currentQs] === index
                        ? { backgroundColor: '#1AA260', fontWeight: 'bold' }
                        : {}
                    }
                  >
                    {' '}
                    {option.optionText}
                  </Typography>
                </Grid>
              </Grid>
            ) : (
              <Grid
                item
                md={9}
                xs={10}
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
    </Grid>
  );
}

export { Quiz };
