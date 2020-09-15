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
  const genderItems = gender.map((item) => (
    <MenuItem key={item} value={item}>
      {item.toString()}
    </MenuItem>
  ));

  const ageItems = [];
  for (var i = 16; i < 100; i++) {
    ageItems.push(
      <MenuItem key={i} value={i}>
        {i.toString()}
      </MenuItem>
    );
  }

  const education = [
    "Grundskole",
    "Gymnasial uddannelse",
    "Erhvervsfaglig uddannelse",
    "Kort/mellemlang videregående uddannelse",
    "Lang videregående uddannelse",
    "Vil ikke svare",
  ];
  const educationItems = education.map((item) => (
    <MenuItem key={item} value={item}>
      {item.toString()}
    </MenuItem>
  ));

  const occupation = [
    "Er i arbejde",
    "Ledig",
    "Pensionist, efterlønsmodtager eller lign.",
    "Hjemmegående",
    "Under uddannelse",
    "Andet",
    "Vil ikke svare",
  ];
  const occupationItems = occupation.map((item) => (
    <MenuItem key={item} value={item}>
      {item.toString()}
    </MenuItem>
  ));

  const maritalStatus = [
    "Ugift",
    "I et forhold",
    "Samboende",
    "Enke/enkemand",
    "Vil ikke svare",
  ];
  const maritalItems = maritalStatus.map((item) => (
    <MenuItem key={item} value={item}>
      {item.toString()}
    </MenuItem>
  ));

  const childrenStatus = [
    "Ja, mindreårige",
    "Ja, voksne",
    "Ja, både mindreårige og voksne",
    "Nej",
    "Vil ikke svare",
  ];
  const childrenItems = childrenStatus.map((item) => (
    <MenuItem key={item} value={item}>
      {item.toString()}
    </MenuItem>
  ));

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
  const originItems = origin.map((item) => (
    <MenuItem key={item} value={item}>
      {item.toString()}
    </MenuItem>
  ));

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
              items={genderItems}
              placeholder="Vælg dit køn..."
              required={false}
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              question="Hvad er din alder?"
              items={ageItems}
              placeholder="Vælg din alder..."
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              question="Hvad er din beskæftigelse?"
              items={occupationItems}
              placeholder="Vælg din beskæftigelse..."
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              question="Hvilken uddannelse har du?"
              items={educationItems}
              placeholder="Vælg dit uddannelsesniveau..."
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              question="Hvad er din civilstand?"
              items={maritalItems}
              placeholder="Vælg din civilstand..."
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              question="Har du børn?"
              items={childrenItems}
              placeholder="Angiv om du har børn..."
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              question="Hvor er du født?"
              items={originItems}
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
