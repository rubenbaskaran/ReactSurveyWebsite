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

  const ageItems = [];
  for (var i = 16; i < 100; i++) {
    ageItems.push(
      <MenuItem key={i} value={i}>
        {i.toString()}
      </MenuItem>
    );
  }

  const education = [
    "Primary school",
    "High school",
    "Bachelor's degree",
    "Master's degree",
    "PhD",
  ];
  const educationItems = education.map((item) => (
    <MenuItem key={item} value={item}>
      {item.toString()}
    </MenuItem>
  ));

  const occupation = [
    "Unemployed",
    "Student",
    "Junior employee",
    "Senior employee",
    "Manager",
    "Leader",
    "Self-employed",
  ];

  const occupationItems = occupation.map((item) => (
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
            <h1>This is the personal info page</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu
              nunc id leo tristique blandit. Integer at dolor ornare, blandit
              nunc tristique, volutpat tortor. Phasellus quis magna posuere,
              faucibus lectus sit amet, venenatis nibh. Proin efficitur
              dignissim accumsan. Maecenas magna sem, suscipit nec odio ac,
              accumsan blandit felis. Suspendisse tincidunt massa sit amet
              consequat mattis. Curabitur interdum faucibus justo, et
              ullamcorper odio euismod ut. Nulla pellentesque feugiat nunc, ut
              luctus urna elementum a. Proin in cursus mauris. Donec tempor
              porttitor porttitor. Quisque at erat auctor, malesuada velit
              eleifend, malesuada urna. Donec in elit sit amet tellus consequat
              placerat. Mauris sit amet tempor elit. Mauris libero turpis,
              laoreet ac pretium non, condimentum vel ex.
            </p>
          </Grid>
          <Grid item xs={12}>
            <GenderQuestion question="Gender" required={true} />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              question="Age"
              items={ageItems}
              placeholder="Choose your age..."
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              question="Education"
              items={educationItems}
              placeholder="Choose your educational level..."
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              question="Occupation"
              items={occupationItems}
              placeholder="Choose your occupation..."
            />
          </Grid>
          <Grid item xs={12}>
            <ChildrenQuestion question="Do you have children?" />
          </Grid>
          <Grid item xs={12}>
            <ChildrenQuestion question="If yes, are they adults?" />
          </Grid>
          <Grid container item sm={6} xs={12}>
            <Button
              component={Link}
              to="/"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Tilbage til forsiden
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
              Go to first survey
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default PersonalInfo;
