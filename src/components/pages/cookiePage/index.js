import React from "react";
import { Container, Button, Grid } from "@material-ui/core";
import LinearWithValueLabel from "../../progressBar";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  grid: {
    "margin-top": "20px",
    "margin-bottom": "40px",
    background: "#f6f9fb",
    padding: "20px",
    "border-radius": "10px",
  },
  button: {
    width: "100%",
  },
});

function CookiePage(props) {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Container fixed>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => {
            props.setCurrentPage(props.previousPage);
          }}
        >
          Tilbage
        </Button>

        <script
          id="CookieDeclaration"
          src="https://consent.cookiebot.com/13374a5a-f8ff-4ec7-90c7-9b849796daf7/cd.js"
          type="text/javascript"
          async
        ></script>
      </Container>
    </div>
  );
}

export default CookiePage;
