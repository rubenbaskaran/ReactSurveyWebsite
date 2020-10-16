import React from "react";
import { Container, Button, Grid, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "../../styles";
import LinearWithValueLabel from "../../progressBar";
import GenderQuestion from "../../questionTypes/gender";
import DropdownList from "../../questionTypes/DropdownList";
import ChildrenQuestion from "../../questionTypes/children";

function PersonalInfo() {
  const [spacing] = React.useState(1);
  const classes = useStyles();

  const gender = ["Kvinde", "Mand", "Andet", "Vil ikke svare"];

  const age = [];
  for (var i = 16; i < 100; i++) {
    age.push(i.toString());
  }
  age.push("Vil ikke svare");

  const education = [
    "Grundskole",
    "Gymnasial uddannelse",
    "Erhvervsfaglig uddannelse",
    "Kort/mellemlang videregående uddannelse",
    "Lang videregående uddannelse",
    "Vil ikke svare",
  ];

  const occupation = [
    "Er i arbejde",
    "Ledig",
    "Pensionist, efterlønsmodtager eller lign.",
    "Hjemmegående",
    "Under uddannelse",
    "Andet",
    "Vil ikke svare",
  ];

  const maritalStatus = [
    "Ugift",
    "I et forhold",
    "Samboende",
    "Enke/enkemand",
    "Vil ikke svare",
  ];

  const childrenStatus = [
    "Ja, mindreårige",
    "Ja, voksne",
    "Ja, både mindreårige og voksne",
    "Nej",
    "Vil ikke svare",
  ];

  const origin = [
    "Danmark",
    "Norden (Norge, Island, Finland eller Sverige)",
    "Europa (ej Danmark, Norge, Island, Finland eller Sverige)",
    "Afrika",
    "Asien",
    "Nordamerika (Canada, USA)",
    "Oceania (Australien)",
    "Sydamerika",
    "Vil ikke svare",
  ];

  // TODO: 1a. Save all data in states and then in DB when user presses 'Næste'
  const SaveUserInputAsState = (id, question, answer) => {
    console.log("ID: " + id + ". Question: " + question + " Answer: " + answer);
  };

  return (
    <div>
      <Container fixed>
        <LinearWithValueLabel value={10} />
        <Grid container spacing={spacing} className={classes.grid}>
          <Grid item xs={12}>
            <h1>Vi starter med nogle baggrundsspørgsmål</h1>
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              id={1}
              question="Hvad er dit køn?"
              items={gender}
              placeholder="Angiv et svar..."
              required={false}
              showExtraSection="none"
              callback={SaveUserInputAsState}
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              id={2}
              question="Hvad er din alder?"
              items={age}
              placeholder="Angiv et svar..."
              required={false}
              showExtraSection="none"
              callback={SaveUserInputAsState}
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              id={3}
              question="Hvad er din beskæftigelse?"
              items={occupation}
              placeholder="Angiv et svar..."
              showExtraSection="none"
              callback={SaveUserInputAsState}
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              id={4}
              question="Hvilken uddannelse har du?"
              items={education}
              placeholder="Angiv et svar..."
              showExtraSection="none"
              callback={SaveUserInputAsState}
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              id={5}
              question="Hvad er din civilstand?"
              items={maritalStatus}
              placeholder="Angiv et svar..."
              showExtraSection="none"
              callback={SaveUserInputAsState}
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              id={6}
              question="Har du børn?"
              items={childrenStatus}
              placeholder="Angiv et svar..."
              showExtraSection="none"
              callback={SaveUserInputAsState}
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              id={7}
              question="Hvor er du født?"
              items={origin}
              placeholder="Angiv et svar..."
              showExtraSection="none"
              callback={SaveUserInputAsState}
            />
          </Grid>
          <Grid container item sm={6} xs={12}>
            <Button
              component={Link}
              to="/"
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
              to="/firstsurvey"
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

export default PersonalInfo;
