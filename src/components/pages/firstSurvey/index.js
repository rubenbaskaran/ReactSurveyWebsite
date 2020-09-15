import React from "react";
import { Container, Button, Grid, MenuItem } from "@material-ui/core";
import RatingScale from "../../questionTypes/ratingScale";
import useStyles from "../../styles";
import { Link } from "react-router-dom";
import LinearWithValueLabel from "../../progressBar";
import DropdownList from "../../questionTypes/DropdownList";

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

  const previousTreatment = [
    "Ja, en gang",
    "Ja, flere gange",
    "Nej, det har jeg ikke",
    "Vil ikke svare",
  ];
  const previousTreatmentItems = previousTreatment.map((item) => (
    <MenuItem key={item} value={item}>
      {item.toString()}
    </MenuItem>
  ));

  const addictionAmongstFriends = [
    "Ja, en person",
    "Ja, flere mennesker",
    "Nej, jeg kender ikke nogen",
    "Vil ikke svare",
  ];
  const addictionAmongstFriendsItems = addictionAmongstFriends.map((item) => (
    <MenuItem key={item} value={item}>
      {item.toString()}
    </MenuItem>
  ));

  const numberRatingScale = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const agreeDisagreeOne =
    "Personer med alkoholproblemer er anderledes end resten af befolkningen";
  const agreeDisagreeTwo =
    "Personer med alkoholproblemer er lig resten af befolkningen";
  const agreeDisagreeThree =
    "Personer med alkoholproblemer er sammenlignelige med resten af befolkningen";
  const agreeDisagreeFour =
    "Personer med alkoholproblemer er værre/dårligere personer end resten af befolkningen";
  const agreeDisagreeFive =
    "Personer med alkoholproblemer respekteres mindre sammenlignet med resten af befolkningen";
  const agreeDisagreeSix =
    "Personer med alkoholproblemer er ikke gavnlige sammenlignet med resten af befolkningen";
  const agreeDisagreeSeven =
    "Personer med alkoholproblemer har selv ansvaret for deres sygdom";
  const agreeDisagreeEight =
    "Personer med alkoholproblemer bebrejdes selv for deres sygdom";
  const agreeDisagreeNine =
    "Personer med alkoholproblemer har selv forårsaget deres sygdom";

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
              agreeDisagree={false}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={secondQuestion}
              answers={secondQuestionAnswers}
              required={true}
              agreeDisagree={false}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={thirdQuestion}
              answers={thirdQuestionAnswers}
              required={true}
              agreeDisagree={false}
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              question="Har du tidligere søgt behandling for at ændre dine alkoholvaner?"
              items={previousTreatmentItems}
              placeholder="Angiv et svar..."
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              question="Kender du nogen, der har eller har haft alkoholproblemer?"
              items={addictionAmongstFriendsItems}
              placeholder="Angiv et svar..."
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={agreeDisagreeOne}
              answers={numberRatingScale}
              required={true}
              agreeDisagree={true}
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
