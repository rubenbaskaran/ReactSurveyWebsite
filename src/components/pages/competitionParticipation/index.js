import React from "react";
import { Container, Button, Grid } from "@material-ui/core";
import LinearWithValueLabel from "../../progressBar";
import Textfield from "../../questionTypes/Textfield";
import { useSelector } from "react-redux";
import { UploadSixth58 } from "../../CallsToBackend";
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

function CompetitionParticipation() {
  const classes = useStyles();
  const [data, setData] = React.useState({});
  let recordId = useSelector((state) => state.recordId);

  const SaveUserInputInState = (id, question, answer) => {
    setData({ id: id, question: question, answer: answer });
  };

  const UploadDataToRedcap = () => {
    if (data.answer && data.answer.trim()) {
      let payload = {
        record_id: recordId,
        question_58: data.answer,
      };
      UploadSixth58(payload);
    } else {
      window.open("https://alkohologsamfund.dk/", "_self");
    }
  };

  return (
    <div>
      <Container fixed>
        <LinearWithValueLabel value={100} />
        <Grid container spacing={1} className={classes.grid}>
          <Grid item xs={12}>
            <h1>Tak for din deltagelse!</h1>
          </Grid>
          <Grid item xs={12}>
            <Textfield
              id={58}
              question="Hvis du ønsker at deltage i lodtrækningen, bedes du efterlade din
              e-mailadresse her"
              required={false}
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid container item xs={12}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={UploadDataToRedcap}
            >
              Afslut
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default CompetitionParticipation;
