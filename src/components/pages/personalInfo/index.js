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
    "Nordamerika (Canada, USA) eller Oceania (Australien)",
    "Sydamerika",
    "Vil ikke svare",
  ];

  return (
    <div>
      <Container fixed>
        <LinearWithValueLabel value="20" />
        <Grid container spacing={spacing} className={classes.grid}>
          <Grid item xs={12}>
            <h1>Vi starter med nogle baggrundsspørgsmål</h1>
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              question="Hvad er dit køn?"
              items={gender}
              placeholder="Vælg dit køn..."
              required={false}
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              question="Hvad er din alder?"
              items={age}
              placeholder="Vælg din alder..."
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              question="Hvad er din beskæftigelse?"
              items={occupation}
              placeholder="Vælg din beskæftigelse..."
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              question="Hvilken uddannelse har du?"
              items={education}
              placeholder="Vælg dit uddannelsesniveau..."
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              question="Hvad er din civilstand?"
              items={maritalStatus}
              placeholder="Vælg din civilstand..."
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              question="Har du børn?"
              items={childrenStatus}
              placeholder="Angiv om du har børn..."
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              question="Hvor er du født?"
              items={origin}
              placeholder="Vælg dit fødested..."
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
              Næste
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default PersonalInfo;
