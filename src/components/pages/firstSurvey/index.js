import React from "react";
import { Container, Button, Grid } from "@material-ui/core";
import RatingScale from "../../questionTypes/ratingScale";
import useStyles from "../../styles";
import { Link } from "react-router-dom";
import LinearWithValueLabel from "../../progressBar";

// TODO: Add ”Don’t want to answer” option to all questions
// TODO: Hide questions on conditional statement

function FirstSurvey() {
  const [spacing] = React.useState(1);
  const classes = useStyles();

  const firstQuestion = "Hvor tit drikker du noget, der indeholder alkohol?";
  const firstQuestionAnswers = [
    "Aldrig",
    "Højst én gang om måneden",
    "2-4 gange om måneden",
    "2-3 gange om ugen",
    "4 gange om ugen eller oftere",
    "Vil ikke svare",
  ];

  const secondQuestion =
    "Hvor mange genstande drikker du almindeligvis, når du drikker noget?";
  const secondQuestionAnswers = [
    "1-2 genstande",
    "3-4 genstande",
    "5-6 genstande",
    "7-9 genstande",
    "10 eller flere genstande",
    "Vil ikke svare",
  ];

  const thirdQuestion =
    "Hvor tit drikker du fem genstande eller flere ved samme lejlighed?";
  const thirdQuestionAnswers = [
    "Aldrig",
    "Sjældent",
    "Månedligt",
    "Ugentligt",
    "Dagligt eller næsten dagligt",
    "Vil ikke svare",
  ];

  return (
    <div>
      <Container fixed>
        <LinearWithValueLabel value="40" />
        <Grid container spacing={spacing} className={classes.grid}>
          <Grid item xs={12}>
            <h1>Nu vil vi stille nogle spørgsmål om alkohol</h1>
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={firstQuestion}
              answers={firstQuestionAnswers}
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={secondQuestion}
              answers={secondQuestionAnswers}
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={thirdQuestion}
              answers={thirdQuestionAnswers}
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question="Question 4: Phasellus sollicitudin, ante sed facilisis ultrices, massa lectus commodo quam, id molestie mi nulla sit amet mauris. Ut non placerat quam, placerat varius lacus?"
              answers={thirdQuestionAnswers}
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question="Question 5: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra lacus sed turpis viverra, laoreet sagittis lacus vulputate. Sed quis elementum enim. Donec bibendum tristique ipsum, quis gravida metus condimentum vitae?"
              answers={thirdQuestionAnswers}
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question="Question 6: Phasellus sollicitudin, ante sed facilisis ultrices, massa lectus commodo quam, id molestie mi nulla sit amet mauris. Ut non placerat quam, placerat varius lacus?"
              answers={thirdQuestionAnswers}
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question="Question 7: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra lacus sed turpis viverra, laoreet sagittis lacus vulputate. Sed quis elementum enim. Donec bibendum tristique ipsum, quis gravida metus condimentum vitae?"
              answers={thirdQuestionAnswers}
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question="Question 8: Phasellus sollicitudin, ante sed facilisis ultrices, massa lectus commodo quam, id molestie mi nulla sit amet mauris. Ut non placerat quam, placerat varius lacus?"
              answers={thirdQuestionAnswers}
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question="Question 9: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra lacus sed turpis viverra, laoreet sagittis lacus vulputate. Sed quis elementum enim. Donec bibendum tristique ipsum, quis gravida metus condimentum vitae?"
              answers={thirdQuestionAnswers}
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question="Question 10: Phasellus sollicitudin, ante sed facilisis ultrices, massa lectus commodo quam, id molestie mi nulla sit amet mauris. Ut non placerat quam, placerat varius lacus?"
              answers={thirdQuestionAnswers}
              required={true}
            />
          </Grid>
          <Grid container item sm={6} xs={12}>
            <Button
              component={Link}
              to="/personalinfo"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Tilbage
            </Button>
          </Grid>
          <Grid container item sm={6} xs={12}>
            <Button
              component={Link}
              to="/randomvideo"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Næste
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default FirstSurvey;
