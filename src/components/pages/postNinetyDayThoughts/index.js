import React from "react";
import { Container, Button, Grid, MenuItem } from "@material-ui/core";
import RatingScale from "../../questionTypes/ratingScale";
import useStyles from "../../styles";
import { Link } from "react-router-dom";
import LinearWithValueLabel from "../../progressBar";
import DropdownList from "../../questionTypes/DropdownList";
import { useEffect } from "react";
import { UploadFifth50To57 } from "../../CallsToBackend";
import { useSelector } from "react-redux";

function PostNinetyDayThoughts() {
  const [spacing] = React.useState(1);
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
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (data.length == numberOfQuestions) {
      if (nextButtonDisabled) {
        setNextButtonDisabled(false);
      }
    }
  });

  const UploadDataToRedcap = () => {
    let dataPlaceholder = [...data];
    dataPlaceholder.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));

    let payload = {
      record_id: recordId,
      question_50: dataPlaceholder[0].answer,
      question_51: dataPlaceholder[1].answer,
      question_52: dataPlaceholder[2].answer,
      question_53: dataPlaceholder[3].answer,
      question_54: dataPlaceholder[4].answer,
      question_55: dataPlaceholder[5].answer,
      question_56: dataPlaceholder[6].answer,
      question_57: dataPlaceholder[7].answer,
    };
    UploadFifth50To57(payload);
  };

  return (
    <div>
      <Container fixed>
        <LinearWithValueLabel value={90} />
        <Grid container spacing={spacing} className={classes.grid}>
          <Grid item xs={12}>
            <h1>
              Hvor ofte i de sidste 90 dage har du haft disse tanker og
              følelser?
            </h1>
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={50}
              question={ninetyDayThoughts[0]}
              answers={ninetyDayThoughtsScale}
              required={false}
              agreeDisagree={false}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={51}
              question={ninetyDayThoughts[1]}
              answers={ninetyDayThoughtsScale}
              required={false}
              agreeDisagree={false}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={52}
              question={ninetyDayThoughts[2]}
              answers={ninetyDayThoughtsScale}
              required={false}
              agreeDisagree={false}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={53}
              question={ninetyDayThoughts[3]}
              answers={ninetyDayThoughtsScale}
              required={false}
              agreeDisagree={false}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={54}
              question={ninetyDayThoughts[4]}
              answers={ninetyDayThoughtsScale}
              required={false}
              agreeDisagree={false}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={55}
              question={ninetyDayThoughts[5]}
              answers={ninetyDayThoughtsScale}
              required={false}
              agreeDisagree={false}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={56}
              question={ninetyDayThoughts[6]}
              answers={ninetyDayThoughtsScale}
              required={false}
              agreeDisagree={false}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              id={57}
              question={ninetyDayThoughts[7]}
              answers={ninetyDayThoughtsScale}
              required={false}
              agreeDisagree={false}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid container item xs={12}>
            <Button
              component={Link}
              to="/competitionparticipation"
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

export default PostNinetyDayThoughts;
