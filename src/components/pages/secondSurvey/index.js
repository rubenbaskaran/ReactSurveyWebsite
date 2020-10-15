import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Grid } from "@material-ui/core";
import RatingScale from "../../questionTypes/ratingScale";
import DropdownList from "../../questionTypes/DropdownList";
import useStyles from "../../styles";
import LinearWithValueLabel from "../../progressBar";
import { useSelector } from "react-redux";

// TODO: 4. Pass down callback method for saving question number + question text + answer for each question as states
// TODO: 4a. Save all data in local storage and DB when user presses 'Næste'

function SecondSurvey() {
  const [spacing] = React.useState(1);
  const classes = useStyles();

  let conditionalNextPage = "";
  if (useSelector((state) => state.showPostExtraSection)) {
    conditionalNextPage = "/postninetydaythoughts";
  } else {
    conditionalNextPage = "/competitionparticipation";
  }

  const doYouRememberItems = ["Ja", "Nej", "Ved ikke", "Vil ikke svare"];
  const drinkingTooMuchItems = [
    "Ja",
    "Nej, men har gjort det tidligere i livet",
    "Nej",
    "Vil ikke svare",
  ];

  const numberRatingScale = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
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

  const questionsForAll = [
    "I hvor høj grad har du lyst til at ændre dine alkoholvaner?",
    "I hvor høj grad har du lyst at tage en snak med nogen om deres alkoholvaner?",
    "I hvor høj grad har du lyst at søge mere information om alkoholbehandling?",
    "I hvor høj grad har du lyst til at søge behandling for at ændre dine alkoholvaner?",
  ];

  return (
    <div>
      <Container fixed>
        <LinearWithValueLabel value={70} />
        <Grid container spacing={spacing} className={classes.grid}>
          <Grid item xs={12}>
            <h1>Nu er du kommet til de sidste spørgsmål</h1>
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              question="Kan du huske at have set denne film før?"
              placeholder="Angiv et svar..."
              required={false}
              items={doYouRememberItems}
              showExtraSection="none"
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              question="Nu hvor du har set filmen, føler du så, at du drikker for meget?"
              placeholder="Angiv et svar..."
              required={false}
              items={drinkingTooMuchItems}
              showExtraSection="second"
            />
          </Grid>
          <Grid item xs={12}>
            <h1>Hvor uenig eller enig er du i følgende udsagn?</h1>
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={agreeDisagreeOne}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={agreeDisagreeTwo}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={agreeDisagreeThree}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={agreeDisagreeFour}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={agreeDisagreeFive}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={agreeDisagreeSix}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={agreeDisagreeSeven}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={agreeDisagreeEight}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={agreeDisagreeNine}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
            />
          </Grid>
          <Grid item xs={12}>
            <h1>Tanker om fremtiden</h1>
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={questionsForAll[0]}
              answers={numberRatingScale}
              required={false}
              notAtAllVeryMuch={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={questionsForAll[1]}
              answers={numberRatingScale}
              required={false}
              notAtAllVeryMuch={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={questionsForAll[2]}
              answers={numberRatingScale}
              required={false}
              notAtAllVeryMuch={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={questionsForAll[3]}
              answers={numberRatingScale}
              required={false}
              notAtAllVeryMuch={true}
            />
          </Grid>
          <Grid container item sm={6} xs={12}>
            <Button
              component={Link}
              to="/randomvideo"
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
              to={conditionalNextPage}
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Gem og gå til næste
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default SecondSurvey;
