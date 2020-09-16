import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Grid } from "@material-ui/core";
import RatingScale from "../../questionTypes/ratingScale";
import DropdownList from "../../questionTypes/DropdownList";
import useStyles from "../../styles";
import LinearWithValueLabel from "../../progressBar";

function SecondSurvey() {
  const [spacing] = React.useState(1);
  const classes = useStyles();

  const doYouRememberItems = ["Ja", "Nej", "Ved ikke", "Vil ikke svare"];
  const drinkingTooMuchItems = [
    "Ja",
    "Nej, men har gjort det tidligere i livet",
    "Nej",
    "Vil ikke svare",
  ];

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

  const ninetyDayThoughts = [
    "Jeg tror, at en væsentlig årsag til mine problemer med alkohol er min egen dårlige karakter.",
    "Jeg tænker, at jeg burde skamme mig.",
    "Jeg tænker, at jeg fortjener de dårlige ting, der er sket med mig.",
    "Jeg tænker, at jeg ikke er til at stole på.",
    "Jeg føler mig ringere end mennesker, der aldrig har haft et problem med alkohol.",
    "Jeg føler mig udenfor på grund af mine problemer med alkohol.",
    "Jeg tænker, at jeg permanent har ødelagt mit liv ved at bruge alkohol.",
    "Jeg skammer mig over mig selv.",
  ];

  const ninetyDayThoughtsScale = [
    "Aldrig",
    "Sjældent",
    "Nogle gange",
    "Ofte",
    "Meget ofte",
    "Vil ikke svare",
  ];

  const questionsForAll = [
    "I hvor høj grad har du lyst til at ændre dine alkoholvaner?",
    "I hvor høj grad har du lyst at tage en snak med nogen om deres alkoholvaner?",
    "I hvor høj grad har du lyst at søge mere information om alkoholbehandling?",
    "I hvor høj grad har du lyst til at søge behandling for at ændre dine alkoholvaner?",
  ];

  return (
    <div>
      <Container fixed>
        <LinearWithValueLabel value="80" />
        <Grid container spacing={spacing} className={classes.grid}>
          <Grid item xs={12}>
            <h1>Nu bliver du nødt til at besvare de sidste spørgsmål</h1>
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              question="Kan du huske at have set denne film før?"
              placeholder="Angiv et svar..."
              required={true}
              items={doYouRememberItems}
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              question="Føler du at du drikker for meget?"
              placeholder="Angiv et svar..."
              required={true}
              items={drinkingTooMuchItems}
            />
          </Grid>
          <Grid item xs={12}>
            <h1>Hvor uenig eller enig er du i følgende udsagn?</h1>
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={agreeDisagreeOne}
              answers={numberRatingScale}
              required={true}
              agreeDisagree={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={agreeDisagreeTwo}
              answers={numberRatingScale}
              required={true}
              agreeDisagree={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={agreeDisagreeThree}
              answers={numberRatingScale}
              required={true}
              agreeDisagree={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={agreeDisagreeFour}
              answers={numberRatingScale}
              required={true}
              agreeDisagree={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={agreeDisagreeFive}
              answers={numberRatingScale}
              required={true}
              agreeDisagree={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={agreeDisagreeSix}
              answers={numberRatingScale}
              required={true}
              agreeDisagree={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={agreeDisagreeSeven}
              answers={numberRatingScale}
              required={true}
              agreeDisagree={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={agreeDisagreeEight}
              answers={numberRatingScale}
              required={true}
              agreeDisagree={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={agreeDisagreeNine}
              answers={numberRatingScale}
              required={true}
              agreeDisagree={true}
            />
          </Grid>
          <Grid item xs={12}>
            <h1>
              Hvor ofte i de sidste 90 dage har du haft disse tanker og
              følelser?
            </h1>
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={ninetyDayThoughts[0]}
              answers={ninetyDayThoughtsScale}
              required={true}
              agreeDisagree={false}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={ninetyDayThoughts[1]}
              answers={ninetyDayThoughtsScale}
              required={true}
              agreeDisagree={false}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={ninetyDayThoughts[2]}
              answers={ninetyDayThoughtsScale}
              required={true}
              agreeDisagree={false}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={ninetyDayThoughts[3]}
              answers={ninetyDayThoughtsScale}
              required={true}
              agreeDisagree={false}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={ninetyDayThoughts[4]}
              answers={ninetyDayThoughtsScale}
              required={true}
              agreeDisagree={false}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={ninetyDayThoughts[5]}
              answers={ninetyDayThoughtsScale}
              required={true}
              agreeDisagree={false}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={ninetyDayThoughts[6]}
              answers={ninetyDayThoughtsScale}
              required={true}
              agreeDisagree={false}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={ninetyDayThoughts[7]}
              answers={ninetyDayThoughtsScale}
              required={true}
              agreeDisagree={false}
            />
          </Grid>
          <Grid item xs={12}>
            <h1>Disse spørgsmål stilles til alle informanter</h1>
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={questionsForAll[0]}
              answers={numberRatingScale}
              required={true}
              notAtAllVeryMuch={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={questionsForAll[1]}
              answers={numberRatingScale}
              required={true}
              notAtAllVeryMuch={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={questionsForAll[2]}
              answers={numberRatingScale}
              required={true}
              notAtAllVeryMuch={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={questionsForAll[3]}
              answers={numberRatingScale}
              required={true}
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
              to="/competitionparticipation"
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

export default SecondSurvey;
