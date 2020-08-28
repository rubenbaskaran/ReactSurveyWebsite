import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Grid } from "@material-ui/core";
import RatingScale from "../../questionTypes/ratingScale";
import useStyles from "../../styles";
import LinearWithValueLabel from "../../progressBar";

function SecondSurvey() {
  const [spacing] = React.useState(1);
  const classes = useStyles();

  return (
    <div>
      <Container fixed>
        <LinearWithValueLabel value="70" />
        <Grid container spacing={spacing} className={classes.grid}>
          <Grid item xs={12}>
            <h1>This is the second survey</h1>
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
            <RatingScale
              question="Question 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra lacus sed turpis viverra, laoreet sagittis lacus vulputate. Sed quis elementum enim. Donec bibendum tristique ipsum, quis gravida metus condimentum vitae?"
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question="Question 2: Phasellus sollicitudin, ante sed facilisis ultrices, massa lectus commodo quam, id molestie mi nulla sit amet mauris. Ut non placerat quam, placerat varius lacus?"
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question="Question 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra lacus sed turpis viverra, laoreet sagittis lacus vulputate. Sed quis elementum enim. Donec bibendum tristique ipsum, quis gravida metus condimentum vitae?"
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question="Question 4: Phasellus sollicitudin, ante sed facilisis ultrices, massa lectus commodo quam, id molestie mi nulla sit amet mauris. Ut non placerat quam, placerat varius lacus?"
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question="Question 5: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra lacus sed turpis viverra, laoreet sagittis lacus vulputate. Sed quis elementum enim. Donec bibendum tristique ipsum, quis gravida metus condimentum vitae?"
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question="Question 6: Phasellus sollicitudin, ante sed facilisis ultrices, massa lectus commodo quam, id molestie mi nulla sit amet mauris. Ut non placerat quam, placerat varius lacus?"
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question="Question 7: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra lacus sed turpis viverra, laoreet sagittis lacus vulputate. Sed quis elementum enim. Donec bibendum tristique ipsum, quis gravida metus condimentum vitae?"
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question="Question 8: Phasellus sollicitudin, ante sed facilisis ultrices, massa lectus commodo quam, id molestie mi nulla sit amet mauris. Ut non placerat quam, placerat varius lacus?"
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question="Question 9: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra lacus sed turpis viverra, laoreet sagittis lacus vulputate. Sed quis elementum enim. Donec bibendum tristique ipsum, quis gravida metus condimentum vitae?"
              required={true}
            />
          </Grid>
          <Grid item xs={12}>
            <RatingScale
              question="Question 10: Phasellus sollicitudin, ante sed facilisis ultrices, massa lectus commodo quam, id molestie mi nulla sit amet mauris. Ut non placerat quam, placerat varius lacus?"
              required={true}
            />
          </Grid>
          <Grid container item sm={6} xs={12}>
            <Button
              component={Link}
              to="/randomvideo"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Back to random video
            </Button>
          </Grid>
          <Grid container item sm={6} xs={12}>
            <Button
              component={Link}
              to="/competitionparticipation"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Go to competition participation
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default SecondSurvey;
