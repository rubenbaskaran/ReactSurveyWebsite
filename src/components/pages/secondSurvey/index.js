import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Grid } from "@material-ui/core";
import RatingScale from "../../questionTypes/ratingScale";
import DropdownList from "../../questionTypes/DropdownList";
import useStyles from "../../styles";
import LinearWithValueLabel from "../../progressBar";

function SecondSurvey() {
  const [spacing] = React.useState(1);
  const classes = useStyles();

  const doYouRememberItems = ["Ja", "Nej", "Ved ikke", "Vil ikke svare"];

  return (
    <div>
      <Container fixed>
        <LinearWithValueLabel value="80" />
        <Grid container spacing={spacing} className={classes.grid}>
          <Grid item xs={12}>
            <h1>Nu bliver du nødt til at besvare de sidste spørgsmål.</h1>
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              question="Kan du huske at have set denne film før?"
              placeholder="Angiv et svar..."
              required={true}
              items={doYouRememberItems}
            />
          </Grid>
          <Grid container item sm={6} xs={12}>
            <Button
              component={Link}
              to="/randomvideo"
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
              to="/competitionparticipation"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Næste
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default SecondSurvey;
