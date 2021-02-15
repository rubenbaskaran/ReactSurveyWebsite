import React from "react";
import { Container, Button, Grid } from "@material-ui/core";
import useStyles from "../../styles";
import LinearWithValueLabel from "../../progressBar";
import Textfield from "../../questionTypes/Textfield";
import { useSelector } from "react-redux";
import { UploadSixth58 } from "../../CallsToBackend";

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
              e-mail-adresse her"
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
