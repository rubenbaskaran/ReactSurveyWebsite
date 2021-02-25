import React from "react";
import { Container, Button, Grid } from "@material-ui/core";
import useStyles from "../../styles";
import LinearWithValueLabel from "../../progressBar";
import Recaptcha from "../../reCAPTCHA";
import { useEffect } from "react";

function RecaptchaPage(props) {
  const [disabled, setDisabled] = React.useState(true);
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
              derefter på "Start"
            </h1>
          </Grid>
          <Grid item xs={12} container justify="center">
            <Recaptcha handleRecaptcha={handleRecaptcha} />
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
