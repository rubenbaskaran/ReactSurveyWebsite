import React from "react";
import { Container, Button, Grid } from "@material-ui/core";
import LinearWithValueLabel from "../../progressBar";
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
});

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
              Efter filmen skal du genbesvare nogle af de spørgsmål, som blev
              stillet i starten af undersøgelsen.
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
