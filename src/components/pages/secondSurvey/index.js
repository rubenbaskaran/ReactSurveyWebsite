import React from "react";
import { Container, Button, Grid } from "@material-ui/core";
import RatingScale from "../../questionTypes/ratingScale";
import DropdownList from "../../questionTypes/DropdownList";
import LinearWithValueLabel from "../../progressBar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { UploadFourth35To49 } from "../../CallsToBackend";
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
  paper: {
    padding: 20,
  },
  question: {
    color: "black",
    background: "#bccfe8",
    display: "block",
    width: "100%",
    padding: "15px",
    "font-family": "Segoe UI",
    "letter-spacing": "0.5px",
    "line-height": "1.5",
    "font-size": "18px",
    marginBottom: "20px",
  },
  questionWithoutMarginBottom: {
    color: "black",
    background: "#bccfe8",
    display: "block",
    width: "100%",
    padding: "15px",
    "font-family": "Segoe UI",
    "letter-spacing": "0.5px",
    "line-height": "1.5",
    "font-size": "18px",
  },
  ratingScale: {
    "margin-left": "15px",
    "margin-top": "20px",
    display: "inline-block",
  },
  required: {
    display: "block",
    "text-align": "right",
    color: "red",
    paddingRight: "15px",
  },
  textField: {
    "margin-top": "20px",
    display: "inline-block",
    width: "100%",
    "& p": {
      color: "red",
    },
  },
});

function SecondSurvey(props) {
  const classes = useStyles();
  const [nextButtonDisabled, setNextButtonDisabled] = React.useState(true);
  const [data, setData] = React.useState([]);
  const numberOfQuestions = 15;
  let recordId = useSelector((state) => state.recordId);
  let timestampStart = useSelector((state) => state.timestampStart);

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
    let timestampEnd = null;
    let surveyDuration = null;
    let answersComplete = "0";

    if (conditionalNextPage === "/postninetydaythoughts") {
      timestampStart = null;
      props.setCurrentPage(7);
    } else {
      answersComplete = "2";
      timestampEnd = new Date();
      surveyDuration = Math.abs(
        (timestampEnd - timestampStart) / 1000
      ).toString();
      timestampStart =
        timestampStart.getHours() +
        ":" +
        timestampStart.getMinutes() +
        ":" +
        timestampStart.getSeconds();
      timestampEnd =
        timestampEnd.getHours() +
        ":" +
        timestampEnd.getMinutes() +
        ":" +
        timestampEnd.getSeconds();
      props.setCurrentPage(8);
    }

    let dataPlaceholder = [...data];
    dataPlaceholder.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));

    let payload = {
      record_id: recordId,
      timestamp_start: timestampStart,
      timestamp_end: timestampEnd,
      survey_duration: surveyDuration,
      question_35: dataPlaceholder[0].answer,
      question_36: dataPlaceholder[1].answer,
      question_37: dataPlaceholder[2].answer,
      question_38: dataPlaceholder[3].answer,
      question_39: dataPlaceholder[4].answer,
      question_40: dataPlaceholder[5].answer,
      question_41: dataPlaceholder[6].answer,
      question_42: dataPlaceholder[7].answer,
      question_43: dataPlaceholder[8].answer,
      question_44: dataPlaceholder[9].answer,
      question_45: dataPlaceholder[10].answer,
      question_46: dataPlaceholder[11].answer,
      question_47: dataPlaceholder[12].answer,
      question_48: dataPlaceholder[13].answer,
      question_49: dataPlaceholder[14].answer,
      answers_complete: answersComplete,
    };
    UploadFourth35To49(payload);
  };

  return (
    <div>
      <Container fixed>
        <LinearWithValueLabel value={70} />
        <Grid container spacing={1} className={classes.grid}>
          <Grid item xs={12}>
            <h1>Nu er du kommet til de sidste spørgsmål</h1>
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              id={35}
              question="Kan du huske at have set denne film før?"
              placeholder="Angiv et svar..."
              required={false}
              items={doYouRememberItems}
              showExtraSection="none"
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              id={36}
              question="Nu hvor du har set filmen, føler du så, at du drikker for meget?"
              placeholder="Angiv et svar..."
              required={false}
              items={drinkingTooMuchItems}
              showExtraSection="second"
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <h1>Hvor uenig eller enig er du i følgende udsagn?</h1>
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={37}
              question={agreeDisagreeOne}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={38}
              question={agreeDisagreeTwo}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={39}
              question={agreeDisagreeThree}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={40}
              question={agreeDisagreeFour}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={41}
              question={agreeDisagreeFive}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={42}
              question={agreeDisagreeSix}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={43}
              question={agreeDisagreeSeven}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={44}
              question={agreeDisagreeEight}
              answers={numberRatingScale}
              required={false}
              agreeDisagree={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={45}
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
              id={46}
              question={questionsForAll[0]}
              answers={numberRatingScale}
              required={false}
              notAtAllVeryMuch={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={47}
              question={questionsForAll[1]}
              answers={numberRatingScale}
              required={false}
              notAtAllVeryMuch={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={48}
              question={questionsForAll[2]}
              answers={numberRatingScale}
              required={false}
              notAtAllVeryMuch={true}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={49}
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

export default SecondSurvey;
