import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Grid } from "@material-ui/core";
import useStyles from "../../styles";
import LinearWithValueLabel from "../../progressBar";
import { useSelector } from "react-redux";

function VideoText() {
  const [spacing] = React.useState(1);
  const classes = useStyles();

  let conditionalPreviousPage = "";
  if (useSelector((state) => state.showPreExtraSection)) {
    conditionalPreviousPage = "/preninetydaythoughts";
  } else {
    conditionalPreviousPage = "/firstsurvey";
  }

  return (
    <div>
      <Container fixed>
        <LinearWithValueLabel value={40} />
        <Grid container spacing={spacing} className={classes.grid}>
          <Grid item xs={12}>
            <h1>Nu vil du se en film, der varer ca. et minut</h1>
            <p>
              Husk at have lyden tændt, mens du ser filmen.
              <br />
              Når filmen er færdig, skal du besvare nogle af de sidste
              spørgsmål.
            </p>
          </Grid>
          <Grid container item xs={12}>
            <Button
              component={Link}
              to="/randomvideo"
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

export default VideoText;
