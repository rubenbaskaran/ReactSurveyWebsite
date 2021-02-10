import React from "react";
import { Container, Button, Grid } from "@material-ui/core";
import useStyles from "../../styles";
import LinearWithValueLabel from "../../progressBar";
import Recaptcha from "../../reCAPTCHA";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTimestampStartAction } from "../../../globalVariables";

function Consent(props) {
  const [disabled, setDisabled] = React.useState(true);
  const classes = useStyles();
  const dispatch = useDispatch();

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

  function SetTimestampStart() {
    let fullTimestamp = new Date();
    console.log("timestamp start: " + fullTimestamp);
    dispatch(setTimestampStartAction(fullTimestamp));
  }

  // TODO: Insert translated final consent text
  return (
    <div>
      <Container fixed>
        <LinearWithValueLabel value={0} />
        <Grid container spacing={1} className={classes.grid}>
          <Grid item xs={12}>
            <h1>
              Velkommen til forskningsprojektet REACH ved Syddansk Universitet
            </h1>
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
              Det tager cirka 5-10 minutter at gennemføre undersøgelsen. Du skal
              først besvare nogle spørgsmål, derefter se en lille film. Husk at
              have slået lyden til. Derefter skal du svare på nogle af
              spørgsmålene engang til. Du er anonym i undersøgelsen, og dine
              svar vil kun blive brugt i denne undersøgelse. Du skal være mindst
              18 år for at kunne deltage.
            </p>
            <p>
              Som tak for deltagelsen kan du - hvis du vil - oplyse din
              e-mail-adresse for at deltage i en lodtrækning om
              delikatessekurver.
            </p>
            <p>
              Du inviteres hermed til at deltage i ovenstående
              forskningsprojekt.
            </p>
            <p>
              Læs deltagerinformationen nøje, klik af i feltet nedenfor og klik
              derefter på "Deltag" knappen for at bekræfte, at du gerne vil
              deltage og at:
            </p>
            <ul>
              <li>Du har læst og forstået den givne information om studiet.</li>
              <li>
                Du har haft mulighed for at overveje informationen og maile
                eventuelle spørgsmål.
              </li>
              <li>
                Du forstår, at deltagelse er frivillig, og at du kan trække dig
                ud af undersøgelsen, når du vil og uden at give forklaring.
              </li>
              <li>
                Du forstår, at data i undersøgelsen anvendes anonymiseret til
                brug for undervisning, publikationer og præsentationer på
                videnskabelige møder.
              </li>
              <li>Du er fyldt 18 år og myndig.</li>
            </ul>
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
                SetTimestampStart();
                props.setCurrentPage(1);
              }}
            >
              Deltag
            </Button>
          </Grid>
          <Grid item xs={12} style={{ fontSize: "15px" }}>
            <p>
              <i>
                Hvis du ønsker mere information om undersøgelsen og dermed
                hjemmesiden, kan du kontakte Post Doc Sara Wallhed Finn (
                <a href={`mailto:sarawf@health.sdu.dk`}>sarawf@health.sdu.dk</a>
                ).
              </i>
            </p>
            <p>
              <i>
                Hvis du har klager eller bekymringer i forhold til studiet,
                kontakt da venligst den ansvarlige for studiet, Professor Anette
                Søgaard Nielsen, (
                <a href={`mailto:ansnielsen@health.sdu.dk`}>
                  ansnielsen@health.sdu.dk
                </a>
                ), eller den Videnskabsetiske komite på SDU (REC) (
                <a href={`mailto:rec@sdu.dk`}>rec@sdu.dk</a>/
                <a href={`mailto:nadko@sdu.dk`}>nadko@sdu.dk</a>).
              </i>
            </p>
          </Grid>
          <Grid container item xs={12} justify="center">
            <img src={require("./logo.png")} style={{ width: "20%" }}></img>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Consent;
