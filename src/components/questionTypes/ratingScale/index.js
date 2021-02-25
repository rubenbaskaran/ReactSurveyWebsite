import React, { useEffect } from "react";
import useStyles from "../../styles";
import {
  Paper,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
} from "@material-ui/core";

function RatingScale(props) {
  const [rating, setRating] = React.useState("");
  const [dirty, setDirty] = React.useState(false);
  const [listOfAnswerOptions, setListOfAnswerOptions] = React.useState([]);
  const classes = useStyles();
  const [radioButtonGridWidth, setRadioButtonGridWidth] = React.useState(1);
  const [
    radioButtonLabelPosition,
    setRadioButtonLabelPosition,
  ] = React.useState("start");

  useEffect(() => {
    if (props.answers.length !== 9) {
      setRadioButtonGridWidth(2);
      setRadioButtonLabelPosition("top");
    }
  }, [props.answers.length]);

  if (listOfAnswerOptions.length === 0) {
    props.answers.map((value) => {
      setListOfAnswerOptions((oldList) => [...oldList, value]);
      return null;
    });
  }

  const handleChange = (event) => {
    setDirty(true);

    let answer = "";
    if (Number(event.target.value) === 10) {
      answer = "Vil ikke svare";
    } else {
      answer = listOfAnswerOptions[event.target.value];
    }

    props.callback(props.id, props.question, answer);
    setRating(Number(event.target.value));
  };

  return (
    <Paper className={classes.paper}>
      <RadioGroup name="questionOne" value={rating} onChange={handleChange} row>
        <FormLabel className={classes.question}>
          <b>{props.question}</b>
        </FormLabel>
        {(props.agreeDisagree === true && (
          <Grid
            container
            xs={12}
            sm={12}
            md={radioButtonGridWidth}
            item
            lg={radioButtonGridWidth}
            xl={radioButtonGridWidth}
            justify="center"
            alignItems="center"
            alignContent="center"
          >
            <label style={{ marginLeft: "20px", textAlign: "center" }}>
              Meget uenig
            </label>
          </Grid>
        )) ||
          (props.notAtAllVeryMuch === true && (
            <Grid
              container
              xs={12}
              sm={12}
              md={radioButtonGridWidth}
              item
              lg={radioButtonGridWidth}
              xl={radioButtonGridWidth}
              justify="center"
              alignItems="center"
            >
              <label style={{ marginLeft: "20px", textAlign: "center" }}>
                Slet ikke
              </label>
            </Grid>
          ))}

        {props.answers.map((value) => (
          <Grid
            key={props.answers.indexOf(value)}
            container
            xs={12}
            sm={12}
            md={radioButtonGridWidth}
            item
            lg={radioButtonGridWidth}
            xl={radioButtonGridWidth}
            justify="center"
          >
            <FormControlLabel
              key={props.answers.indexOf(value)}
              value={props.answers.indexOf(value)}
              control={<Radio />}
              label={value}
              labelPlacement={radioButtonLabelPosition}
              style={{ textAlign: "center" }}
            />
          </Grid>
        ))}

        {(props.agreeDisagree === true && (
          <Grid
            container
            xs={12}
            sm={12}
            md={radioButtonGridWidth}
            item
            lg={radioButtonGridWidth}
            xl={radioButtonGridWidth}
            justify="center"
            alignItems="center"
          >
            <label
              style={{
                marginLeft: "10px",
                textAlign: "center",
              }}
            >
              Meget enig
            </label>
          </Grid>
        )) ||
          (props.notAtAllVeryMuch === true && (
            <Grid
              container
              xs={12}
              sm={12}
              md={radioButtonGridWidth}
              item
              lg={radioButtonGridWidth}
              xl={radioButtonGridWidth}
              justify="center"
              alignItems="center"
            >
              <label
                style={{
                  marginLeft: "10px",
                  textAlign: "center",
                }}
              >
                I meget høj grad
              </label>
            </Grid>
          ))}

        <Grid
          container
          xs={12}
          sm={12}
          md={radioButtonGridWidth}
          item
          lg={radioButtonGridWidth}
          xl={radioButtonGridWidth}
          justify={"flex-end"}
          style={{ marginTop: "20px" }}
        >
          <FormControlLabel
            key={10}
            value={10}
            control={<Radio />}
            label={"Vil ikke svare"}
            labelPlacement="top"
            style={{ textAlign: "center" }}
          />
        </Grid>
      </RadioGroup>
      {dirty === false && (
        <div className={classes.required}>
          <label>*svar mangler</label>
        </div>
      )}
    </Paper>
  );
}

export default RatingScale;
