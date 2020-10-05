import React from "react";
import { Container, Button, Grid, MenuItem } from "@material-ui/core";
import RatingScale from "../../questionTypes/ratingScale";
import useStyles from "../../styles";
import { Link } from "react-router-dom";
import LinearWithValueLabel from "../../progressBar";
import DropdownList from "../../questionTypes/DropdownList";

function PreNinetyDayThoughts() {
  const [spacing] = React.useState(1);
  const classes = useStyles();

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
    "Vil ikke svare",
  ];

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
              question={ninetyDayThoughts[0]}
              answers={ninetyDayThoughtsScale}
              required={false}
              agreeDisagree={false}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={ninetyDayThoughts[1]}
              answers={ninetyDayThoughtsScale}
              required={false}
              agreeDisagree={false}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={ninetyDayThoughts[2]}
              answers={ninetyDayThoughtsScale}
              required={false}
              agreeDisagree={false}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={ninetyDayThoughts[3]}
              answers={ninetyDayThoughtsScale}
              required={false}
              agreeDisagree={false}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={ninetyDayThoughts[4]}
              answers={ninetyDayThoughtsScale}
              required={false}
              agreeDisagree={false}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={ninetyDayThoughts[5]}
              answers={ninetyDayThoughtsScale}
              required={false}
              agreeDisagree={false}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={ninetyDayThoughts[6]}
              answers={ninetyDayThoughtsScale}
              required={false}
              agreeDisagree={false}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question={ninetyDayThoughts[7]}
              answers={ninetyDayThoughtsScale}
              required={false}
              agreeDisagree={false}
            />
          </Grid>
          <Grid container item sm={6} xs={12}>
            <Button
              component={Link}
              to="/firstsurvey"
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
              to="/videotext"
              variant="contained"
              color="primary"
              className={classes.button}
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
