import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Grid } from "@material-ui/core";
import useStyles from "../../styles";
import LinearWithValueLabel from "../../progressBar";
import GenderQuestion from "../../questionTypes/gender";
import Textfield from "../../questionTypes/Textfield";
import { useSelector } from "react-redux";

// TODO: 6. Pass down callback method for saving question number + question text + answer for each question as states
// TODO: 6a. Save all data in states and then in DB when user presses 'Næste'

function CompetitionParticipation() {
  const [spacing] = React.useState(1);
  const classes = useStyles();

  let conditionalPreviousPage = "";
  if (useSelector((state) => state.showPostExtraSection)) {
    conditionalPreviousPage = "/postninetydaythoughts";
  } else {
    conditionalPreviousPage = "/secondsurvey";
  }

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
              question="Hvis du ønsker at deltage i lodtrækningen, bedes du efterlade din
              e-mail-adresse her"
              required={false}
            />
          </Grid>
          <Grid container item sm={6} xs={12}>
            <Button
              component={Link}
              to={conditionalPreviousPage}
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Tilbage
            </Button>
          </Grid>
          <Grid container item sm={6} xs={12}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              href="https://alkohologsamfund.dk/"
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
