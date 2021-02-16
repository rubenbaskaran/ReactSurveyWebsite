import React from "react";
import { Container, Button, Grid } from "@material-ui/core";
import useStyles from "../../styles";
import LinearWithValueLabel from "../../progressBar";

function VideoText(props) {
  const classes = useStyles();

  return (
    <div>
      <Container fixed>
        <LinearWithValueLabel value={40} />
        <Grid container spacing={1} className={classes.grid}>
          <Grid item xs={12}>
            <h1>Nu vil du se en film, der varer ca. et minut</h1>
            <p style={{ fontSize: 20 }}>
              Husk at have lyden tændt, mens du ser filmen.
              <br />
              Når filmen er færdig, skal du besvare nogle af de sidste
              spørgsmål.
            </p>
          </Grid>
          <Grid container item xs={12}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => props.setCurrentPage(5)}
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
