import React from "react";
import { Container, Button, Grid, MenuItem } from "@material-ui/core";
import RatingScale from "../../questionTypes/ratingScale";
import useStyles from "../../styles";
import { Link } from "react-router-dom";
import LinearWithValueLabel from "../../progressBar";
import DropdownList from "../../questionTypes/DropdownList";
import { useEffect } from "react";
import {
  UploadFirst1To7,
  UploadSecond8To26,
  UploadThird27To34,
  UploadFourth35To49,
  UploadFifth50To57,
  UploadSixth58,
} from "../../CallsToBackend";

function PreNinetyDayThoughts() {
  const [spacing] = React.useState(1);
  const classes = useStyles();
  const [nextButtonDisabled, setNextButtonDisabled] = React.useState(true);
  const [data, setData] = React.useState([]);
  const numberOfQuestions = 8;

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

    // TODO: Get actual record_id
    let payload = {
      record_id: "22",
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
        <Grid container spacing={spacing} className={classes.grid}>
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
              component={Link}
              to="/videotext"
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
