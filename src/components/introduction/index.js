import React from "react";
import {
  Container,
  Button,
  Grid,
  Paper,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  grid: {
    background: "teal",
  },
  childGrid: {
    background: "pink",
  },
  ratingScale: {
    padding: 20,
  },
  question: {
    color: "black",
  },
  button: {
    color: "yellow",
    width: "100%",
  },
});

function Introduction() {
  const [rating, setRating] = React.useState(5);
  const [spacing] = React.useState(1);

  const classes = useStyles();

  const handleChange = (event) => {
    console.log(event.target.value);
    setRating(Number(event.target.value));
  };

  return (
    <div>
      <Container fixed>
        <Grid container spacing={spacing} className={classes.grid}>
          <Grid item xs={12}>
            <h1>This is the introduction page</h1>
          </Grid>
          <Grid container item sm={6} xs={12} className={classes.childGrid}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              href="https://alkohologsamfund.dk/"
            >
              Back to alkohologsamfund
            </Button>
          </Grid>
          <Grid container item sm={6} xs={12} className={classes.childGrid}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              href="/humancheck"
            >
              Go to human check
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Paper>xs=3</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>xs=6</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper>xs=3</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.ratingScale}>
              <FormLabel className={classes.question}>
                Question 1: Write the question here...
              </FormLabel>
              <RadioGroup
                name="questionOne"
                value={rating.toString()}
                onChange={handleChange}
                row
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <FormControlLabel
                    key={value}
                    value={value.toString()}
                    control={<Radio />}
                    label={value.toString()}
                  />
                ))}
              </RadioGroup>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Introduction;
