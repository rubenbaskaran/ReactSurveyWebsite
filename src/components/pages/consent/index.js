import React from "react";
import { Container, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "../../styles";
import LinearWithValueLabel from "../../progressBar";
import Recaptcha from "../../reCAPTCHA";
import { useEffect } from "react";
import axios from "axios";
import ApiToken from "../../../ApiToken";

function Consent() {
  const [spacing] = React.useState(1);
  const [disabled, setDisabled] = React.useState(false); // TODO: Remember to set to true
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

  async function onClickHandler() {
    let url =
      "https://cors-anywhere.herokuapp.com/https://open.rsyd.dk/redcap_uddannelse/api/"; // TODO: Remember to remove proxy in production

    let data = new FormData();
    data.append("token", ApiToken.value);
    data.append("content", "record");
    data.append("format", "json");
    data.append("type", "flat");
    data.append("overwriteBehavior", "overwrite");
    data.append("forceAutoNumber", "false");
    data.append(
      "data",
      '[{"record_id":"3", "firstname":"TestName1", "lastname": "TestName2","age":"3","my_first_instrument_complete":"2" }]'
    );
    data.append("returnContent", "count");
    data.append("returnFormat", "json");

    try {
      const response = await axios.post(url, data);
      console.log("RESPONSE:");
      console.log(response);
    } catch (err) {
      console.log("ERROR:");
      console.log(err.message);
    }
  }

  return (
    <div>
      <Container fixed>
        <LinearWithValueLabel value={0} />
        <Grid container spacing={spacing} className={classes.grid}>
          <Grid item xs={12}>
            <h1>Velkommen til projektet XYZ</h1>
            <p>
              I dette projekt vil vi gerne vide mere om, hvordan folk generelt
              ser på dét at søge alkoholbehandling.
            </p>
            <p>
              Vi vil gerne undersøge den almindelige holdning. Du behøver derfor
              ikke selv at opleve et behov for behandling eller at have
              gennemgået behandling. Vi er interesserede i alles svar - uanset
              hvordan dine egne alkoholvaner ser ud.
            </p>
            <p>
              Ved at deltage i undersøgelsen kan du bidrage til at skabe viden
              om, hvordan vi bedst kan kommunikere om alkoholbehandling, og det
              vil på længere sigt gøre os i stand til at skabe bedre måder at nå
              ud til flere personer, der har behov for behandling.
            </p>
            <p>
              Det tager cirka XYZ minutter at gennemføre undersøgelsen. Du skal
              først at besvare nogle spørsmål, derefter vil du se en lille film.
              Husk at have slået lyden til. Derefter skal du besvare nogle af
              spørgsmålene engang til. Du er anonym i undersøgelsen, og dine
              svar, vil kun blive brugt i dette forskningsprojekt. Du skal være
              mindst 16 år for at kunne deltage.
            </p>
            <p>
              Som tak for deltagelsen kan du - hvis du vil - oplyse din
              e-mail-adresse for at deltage i en lodtrækning om
              <b> (AV VADÅ?)</b>.
            </p>
            <p>
              Vi, der er ansvarlige for undersøgelsen og dermed hjemmesiden,, er
              en gruppe forskere ved Syddansk Universitet i Odense ledet af
              Professor Anette Søgaard Nielsen.
            </p>
            <p>
              Spørgsmål om projektet kan sendes til
              <b> VEM (går bra med min mejl)</b>.
            </p>
          </Grid>
          <Grid item xs={12} container justify="center">
            <Recaptcha handleRecaptcha={handleRecaptcha} />
          </Grid>
          <Grid container item xs={12}>
            <Button
              component={Link}
              to="/personalinfo"
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={disabled}
              onClick={onClickHandler}
            >
              Deltag
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Consent;
