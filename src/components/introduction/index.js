import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function Introduction() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <h1>This is the introduction page</h1>
          </Grid>
          <Grid item xs={6}>
            <a href="https://alkohologsamfund.dk/">
              <Button variant="contained" color="primary">
                Back to alkohologsamfund
              </Button>
            </a>
          </Grid>
          <Grid item xs={6}>
            <Link to="/humancheck">
              <Button variant="contained" color="primary">
                Go to human check
              </Button>
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Paper>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper>xs=3</Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Introduction;
