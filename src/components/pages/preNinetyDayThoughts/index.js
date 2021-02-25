import React from "react";
import { Container, Button, Grid } from "@material-ui/core";
import RatingScale from "../../questionTypes/ratingScale";
import LinearWithValueLabel from "../../progressBar";
import { useEffect } from "react";
import { UploadThird27To34 } from "../../CallsToBackend";
import { useSelector } from "react-redux";
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

function PreNinetyDayThoughts(props) {
  const classes = useStyles();
  const [nextButtonDisabled, setNextButtonDisabled] = React.useState(true);
  const [data, setData] = React.useState([]);
  const numberOfQuestions = 8;
  let recordId = useSelector((state) => state.recordId);

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
    props.setCurrentPage(4);

    let dataPlaceholder = [...data];
    dataPlaceholder.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));

    let payload = {
      record_id: recordId,
      question_27: dataPlaceholder[0].answer,
      question_28: dataPlaceholder[1].answer,
      question_29: dataPlaceholder[2].answer,
      question_30: dataPlaceholder[3].answer,
      question_31: dataPlaceholder[4].answer,
      question_32: dataPlaceholder[5].answer,
      question_33: dataPlaceholder[6].answer,
      question_34: dataPlaceholder[7].answer,
    };
    UploadThird27To34(payload);
  };

  return (
    <div>
      <Container fixed>
        <LinearWithValueLabel value={30} />
        <Grid container spacing={1} className={classes.grid}>
          <Grid item xs={12}>
            <h1>
              Hvor ofte i de sidste 90 dage har du haft disse tanker og
              følelser?
            </h1>
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={27}
              question={ninetyDayThoughts[0]}
              answers={ninetyDayThoughtsScale}
              required={false}
              agreeDisagree={false}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={28}
              question={ninetyDayThoughts[1]}
              answers={ninetyDayThoughtsScale}
              required={false}
              agreeDisagree={false}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={29}
              question={ninetyDayThoughts[2]}
              answers={ninetyDayThoughtsScale}
              required={false}
              agreeDisagree={false}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={30}
              question={ninetyDayThoughts[3]}
              answers={ninetyDayThoughtsScale}
              required={false}
              agreeDisagree={false}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={31}
              question={ninetyDayThoughts[4]}
              answers={ninetyDayThoughtsScale}
              required={false}
              agreeDisagree={false}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={32}
              question={ninetyDayThoughts[5]}
              answers={ninetyDayThoughtsScale}
              required={false}
              agreeDisagree={false}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={33}
              question={ninetyDayThoughts[6]}
              answers={ninetyDayThoughtsScale}
              required={false}
              agreeDisagree={false}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={34}
              question={ninetyDayThoughts[7]}
              answers={ninetyDayThoughtsScale}
              required={false}
              agreeDisagree={false}
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

export default PreNinetyDayThoughts;
