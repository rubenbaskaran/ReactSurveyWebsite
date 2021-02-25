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
