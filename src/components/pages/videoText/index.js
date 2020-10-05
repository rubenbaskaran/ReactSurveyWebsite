import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Grid } from "@material-ui/core";
import useStyles from "../../styles";
import LinearWithValueLabel from "../../progressBar";

// TODO: Get global state for determining where to go back

function VideoText() {
  const [spacing] = React.useState(1);
  const classes = useStyles();

  return (
    <div>
      <Container fixed>
        <LinearWithValueLabel value={40} />
        <Grid container spacing={spacing} className={classes.grid}>
          <Grid item xs={12}>
            <h1>Nu vil du se en film, der varer ca. et halvt minut</h1>
            <p>
              Husk at have lyden tændt, mens du ser filmen.
              <br />
              Når filmen er færdig, skal du besvare nogle af de sidste
              spørgsmål.
              <br />
              Dine svar er nu blevet gemt. Når du klikker på "Næste", vil det
              ikke længere være muligt at gå tilbage. Ønsker du at gå videre?
            </p>
          </Grid>
          <Grid container item sm={6} xs={12}>
            <Button
              component={Link}
              to={window.localStorage.getItem("firstPreviousPage")}
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
