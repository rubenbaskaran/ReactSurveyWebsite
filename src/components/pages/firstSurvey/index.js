import React from "react";
import { Container, Button, Grid } from "@material-ui/core";
import RatingScale from "../../questionTypes/ratingScale";
import LinearWithValueLabel from "../../progressBar";
import DropdownList from "../../questionTypes/DropdownList";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { UploadSecond8To26 } from "../../CallsToBackend";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  grid: {
    "margin-top": "20px",
    "margin-bottom": "40px",
    background: "#f6f9fb",
    padding: "20px",
    "border-radius": "10px",
  },
  button: {
    "margin-top": "15px",
    width: "100%",
  },
});

function FirstSurvey(props) {
  const classes = useStyles();
  const [nextButtonDisabled, setNextButtonDisabled] = React.useState(true);
  const [data, setData] = React.useState([]);
  const numberOfQuestions = 19;
  let recordId = useSelector((state) => state.recordId);

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
    "Nej, men jeg har overvejet det",
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
      if (item.id === id) {
        item.answer = answer;
        setData(dataPlaceholder);
        updated = true;
      }
    });

    if (updated === false) {
      setData((oldData) => [
        ...oldData,
        { id: id, question: question, answer: answer },
      ]);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (data.length === numberOfQuestions) {
      if (nextButtonDisabled) {
        setNextButtonDisabled(false);
      }
    }
  }, [data, nextButtonDisabled]);

  const UploadDataToRedcap = () => {
    if (conditionalNextPage === "/preninetydaythoughts") {
      props.setCurrentPage(3);
    } else {
      props.setCurrentPage(4);
    }

    let dataPlaceholder = [...data];
    dataPlaceholder.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));

    let payload = {
      record_id: recordId,
      question_8: dataPlaceholder[0].answer,
      question_9: dataPlaceholder[1].answer,
      question_10: dataPlaceholder[2].answer,
      question_11: dataPlaceholder[3].answer,
      question_12: dataPlaceholder[4].answer,
      question_13: dataPlaceholder[5].answer,
      question_14: dataPlaceholder[6].answer,
      question_15: dataPlaceholder[7].answer,
      question_16: dataPlaceholder[8].answer,
      question_17: dataPlaceholder[9].answer,
      question_18: dataPlaceholder[10].answer,
      question_19: dataPlaceholder[11].answer,
      question_20: dataPlaceholder[12].answer,
      question_21: dataPlaceholder[13].answer,
      question_22: dataPlaceholder[14].answer,
      question_23: dataPlaceholder[15].answer,
      question_24: dataPlaceholder[16].answer,
      question_25: dataPlaceholder[17].answer,
      question_26: dataPlaceholder[18].answer,
    };
    UploadSecond8To26(payload);
  };

  return (
    <div>
      <Container fixed>
        <LinearWithValueLabel value={20} />
        <Grid container spacing={1} className={classes.grid}>
          <Grid item xs={12}>
            <h1>Nu vil vi stille nogle spørgsmål om alkohol</h1>
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={8}
              question={firstQuestion}
              answers={firstQuestionAnswers}
              required={false}
              agreeDisagree={false}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={9}
              question={secondQuestion}
              answers={secondQuestionAnswers}
              required={false}
              agreeDisagree={false}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={10}
              question={thirdQuestion}
              answers={thirdQuestionAnswers}
              required={false}
              agreeDisagree={false}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              id={11}
              question="Føler du at du drikker for meget?"
              items={drinkingTooMuch}
              placeholder="Angiv et svar..."
              showExtraSection="first"
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              id={12}
              question="Har du tidligere søgt behandling for at ændre dine alkoholvaner?"
              items={previousTreatment}
              placeholder="Angiv et svar..."
              showExtraSection="none"
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              id={13}
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
              id={14}
              question={agreeDisagreeOne}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={15}
              question={agreeDisagreeTwo}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={16}
              question={agreeDisagreeThree}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={17}
              question={agreeDisagreeFour}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={18}
              question={agreeDisagreeFive}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={19}
              question={agreeDisagreeSix}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={20}
              question={agreeDisagreeSeven}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={21}
              question={agreeDisagreeEight}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={22}
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
              id={23}
              question={questionsForAll[0]}
              answers={numberRatingScale}
              required={false}
              notAtAllVeryMuch={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={24}
              question={questionsForAll[1]}
              answers={numberRatingScale}
              required={false}
              notAtAllVeryMuch={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={25}
              question={questionsForAll[2]}
              answers={numberRatingScale}
              required={false}
              notAtAllVeryMuch={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={26}
              question={questionsForAll[3]}
              answers={numberRatingScale}
              required={false}
              notAtAllVeryMuch={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid container item xs={12}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={nextButtonDisabled}
              onClick={UploadDataToRedcap}
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
