import { Button, Grid, Typography } from '@mui/material';
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
      style={{ userSelect: 'none', backgroundColor: 'white', margin: 'auto' }}
    >
      {/* pallete thing here */}
      <Grid
        item
        xs={11}
        md={4}
        height="max-content"
        margin="2vh auto"
        container
        direction="column"
        border="solid"
        style={{ backgroundColor: '#5B246C1A', borderRadius: '3vh', padding: '2vh' }}
      >
        <Typography>Quiz Pallete</Typography>
        <Grid item container direction="row" style={{ justifyContent: 'space-evenly' }}>
          {quizAvailable.questions.map((item, index) => (
            <Grid
              item
              xs={1.8}
              border="solid"
              onClick={() => setCurrentQs(index)}
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
              variant="text"
              onClick={() => {
                setCurrentQs(Math.max(currentQs - 1, 0));
              }}
            >
              Previous
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="text"
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
              variant="text"
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
      <Grid item xs={12} md={6} margin="auto" container direction="column" border="solid">
        <Typography border="solid">Question {1 + currentQs}</Typography>

        <Typography border="solid" maxWidth="100%">
          Type - {quizAvailable.questions[currentQs].qsType} <DoneIcon />
        </Typography>
        {/* Question */}
        {quizAvailable.questions[currentQs].qsImageUrl !== '' ? (
          <Grid item container direction="row">
            <Grid item md={6} xs={12}>
              <img
                src={quizAvailable.questions[currentQs].qsImageUrl}
                alt={`${quizAvailable.questions[currentQs].qsImageUrl}`}
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
              <Typography border="solid" padding="1vh">
                {' '}
                {quizAvailable.questions[currentQs].qsText}
              </Typography>
            </Grid>
          </Grid>
        ) : (
          <Grid
            item
            style={{
              margin: 'auto',
            }}
          >
            <Typography border="solid" padding="1vh">
              {' '}
              {quizAvailable.questions[currentQs].qsText}
            </Typography>
          </Grid>
        )}
        {quizAvailable.questions[currentQs].options.map((option, index) => (
          <Grid
            item
            container
            direction="row"
            border="solid"
            style={selected[currentQs] === index ? { backgroundColor: '#1AA260' } : {}}
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
              <Grid border="solid" margin="auto">
                <Typography padding="1vh">{1 + index}.</Typography>
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
                  <Typography border="solid" textAlign="left" padding="1vh">
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
                }}
              >
                <Typography border="solid" textAlign="center" padding="1vh">
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
