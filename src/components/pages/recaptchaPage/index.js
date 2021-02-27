import React from "react";
import { Container, Button, Grid } from "@material-ui/core";
import LinearWithValueLabel from "../../progressBar";
import Recaptcha from "../../reCAPTCHA";
import { useEffect } from "react";
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

function RecaptchaPage(props) {
  const [disabled, setDisabled] = React.useState(false);
  const classes = useStyles();

  function handleRecaptcha() {
    setDisabled(!disabled);
  }

  const script = document.createElement("script");
  script.src = "https://www.google.com/recaptcha/api.js";
  script.async = true;
  document.body.appendChild(script);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Container fixed>
        <LinearWithValueLabel value={5} />
        <Grid container spacing={1} className={classes.grid}>
          <Grid item xs={12}>
            <h1>
              Sæt venligst flueben i afkrydsningsfeltet herunder og klik
              derefter på "Start" knappen for at starte undersøgelsen
            </h1>
          </Grid>
          <Grid item xs={12} container justify="center">
            {/* <Recaptcha handleRecaptcha={handleRecaptcha} /> */}
          </Grid>
          <Grid container item xs={12}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={disabled}
              onClick={() => {
                props.setCurrentPage(1);
              }}
            >
              Start
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default RecaptchaPage;
