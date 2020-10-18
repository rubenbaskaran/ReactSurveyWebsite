import React from "react";
import { Container, Button, Grid, MenuItem } from "@material-ui/core";
import RatingScale from "../../questionTypes/ratingScale";
import useStyles from "../../styles";
import { Link } from "react-router-dom";
import LinearWithValueLabel from "../../progressBar";
import DropdownList from "../../questionTypes/DropdownList";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function FirstSurvey() {
  const [spacing] = React.useState(1);
  const classes = useStyles();
  const [nextButtonDisabled, setNextButtonDisabled] = React.useState(true);
  const [data, setData] = React.useState([]);
  const numberOfQuestions = 19;

  let conditionalNextPage = "";
  if (useSelector((state) => state.showPreExtraSection)) {
    conditionalNextPage = "/preninetydaythoughts";
  } else {
    conditionalNextPage = "/videotext";
  }

  const firstQuestion = "Hvor tit drikker du noget, der indeholder alkohol?";
  const firstQuestionAnswers = [
    "Aldrig",
    "Højst én gang om måneden",
    "2-4 gange om måneden",
    "2-3 gange om ugen",
    "4 gange om ugen eller oftere",
  ];

  const secondQuestion =
    "Hvor mange genstande drikker du almindeligvis, når du drikker noget?";
  const secondQuestionAnswers = [
    "1-2 genstande",
    "3-4 genstande",
    "5-6 genstande",
    "7-9 genstande",
    "10 eller flere genstande",
  ];

  const thirdQuestion =
    "Hvor tit drikker du fem genstande eller flere ved samme lejlighed?";
  const thirdQuestionAnswers = [
    "Aldrig",
    "Sjældent",
    "Månedligt",
    "Ugentligt",
    "Dagligt eller næsten dagligt",
  ];

  const previousTreatment = [
    "Ja, en gang",
    "Ja, flere gange",
    "Nej, det har jeg ikke",
    "Vil ikke svare",
  ];

  const addictionAmongstFriends = [
    "Ja, en person",
    "Ja, flere mennesker",
    "Nej, jeg kender ikke nogen",
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

  const drinkingTooMuch = [
    "Ja",
    "Nej, men har gjort det tidligere i livet",
    "Nej",
    "Vil ikke svare",
  ];

  const questionsForAll = [
    "I hvor høj grad har du lyst til at ændre dine alkoholvaner?",
    "I hvor høj grad har du lyst at tage en snak med nogen om deres alkoholvaner?",
    "I hvor høj grad har du lyst at søge mere information om alkoholbehandling?",
    "I hvor høj grad har du lyst til at søge behandling for at ændre dine alkoholvaner?",
  ];

  const SaveUserInputInState = (id, question, answer) => {
    let dataPlaceholder = [...data];
    let updated = false;

    dataPlaceholder.forEach((item) => {
      if (item.id == id) {
        console.log("updating existing item");
        item.answer = answer;
        setData(dataPlaceholder);
        updated = true;
      }
    });

    if (updated == false) {
      console.log("add new item");
      setData((oldData) => [
        ...oldData,
        { id: id, question: question, answer: answer },
      ]);
    }
  };

  useEffect(() => {
    if (data.length == numberOfQuestions) {
      if (nextButtonDisabled) {
        setNextButtonDisabled(false);
      }
    }
  });

  const PrintAllData = () => {
    let dataPlaceholder = [...data];
    dataPlaceholder.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));

    let output = "";
    dataPlaceholder.forEach((item) => {
      let concatenated = item.question + " - " + item.answer + "\n";
      output += concatenated;
    });

    alert(output);
  };

  return (
    <div>
      <Container fixed>
        <LinearWithValueLabel value={20} />
        <Grid container spacing={spacing} className={classes.grid}>
          <Grid item xs={12}>
            <h1>Nu vil vi stille nogle spørgsmål om alkohol</h1>
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={1}
              question={firstQuestion}
              answers={firstQuestionAnswers}
              required={false}
              agreeDisagree={false}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={2}
              question={secondQuestion}
              answers={secondQuestionAnswers}
              required={false}
              agreeDisagree={false}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={3}
              question={thirdQuestion}
              answers={thirdQuestionAnswers}
              required={false}
              agreeDisagree={false}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              id={4}
              question="Føler du at du drikker for meget?"
              items={drinkingTooMuch}
              placeholder="Angiv et svar..."
              showExtraSection="first"
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              id={5}
              question="Har du tidligere søgt behandling for at ændre dine alkoholvaner?"
              items={previousTreatment}
              placeholder="Angiv et svar..."
              showExtraSection="none"
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              id={6}
              question="Kender du nogen, der har eller har haft alkoholproblemer?"
              items={addictionAmongstFriends}
              placeholder="Angiv et svar..."
              showExtraSection="none"
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <h1>Hvor uenig eller enig er du i følgende udsagn?</h1>
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={7}
              question={agreeDisagreeOne}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={8}
              question={agreeDisagreeTwo}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={9}
              question={agreeDisagreeThree}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={10}
              question={agreeDisagreeFour}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={11}
              question={agreeDisagreeFive}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={12}
              question={agreeDisagreeSix}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={13}
              question={agreeDisagreeSeven}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={14}
              question={agreeDisagreeEight}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={15}
              question={agreeDisagreeNine}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <h1>Tanker om fremtiden</h1>
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={16}
              question={questionsForAll[0]}
              answers={numberRatingScale}
              required={false}
              notAtAllVeryMuch={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={17}
              question={questionsForAll[1]}
              answers={numberRatingScale}
              required={false}
              notAtAllVeryMuch={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={18}
              question={questionsForAll[2]}
              answers={numberRatingScale}
              required={false}
              notAtAllVeryMuch={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={19}
              question={questionsForAll[3]}
              answers={numberRatingScale}
              required={false}
              notAtAllVeryMuch={true}
              callback={SaveUserInputInState}
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
              to={conditionalNextPage}
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={nextButtonDisabled}
              onClick={PrintAllData}
            >
              Gem og gå til næste
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default FirstSurvey;
