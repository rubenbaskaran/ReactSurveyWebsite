import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Grid } from "@material-ui/core";
import useStyles from "../../styles";
import LinearWithValueLabel from "../../progressBar";
import Textfield from "../../questionTypes/Textfield";
import { useSelector } from "react-redux";

function CompetitionParticipation() {
  const [spacing] = React.useState(1);
  const classes = useStyles();
  const [data, setData] = React.useState({});

  let conditionalPreviousPage = "";
  if (useSelector((state) => state.showPostExtraSection)) {
    conditionalPreviousPage = "/postninetydaythoughts";
  } else {
    conditionalPreviousPage = "/secondsurvey";
  }

  const SaveUserInputInState = (id, question, answer) => {
    setData({ id: id, question: question, answer: answer });
  };

  const PrintAllData = () => {
    if (data.answer != undefined && data.answer.trim().length != 0) {
      alert(data.id + " - " + data.question + " - " + data.answer);
    }
  };

  return (
    <div>
      <Container fixed>
        <LinearWithValueLabel value={100} />
        <Grid container spacing={spacing} className={classes.grid}>
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
              href="https://alkohologsamfund.dk/"
              onClick={PrintAllData}
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
