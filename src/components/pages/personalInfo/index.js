import React from "react";
import { Container, Button, Grid } from "@material-ui/core";
import LinearWithValueLabel from "../../progressBar";
import DropdownList from "../../questionTypes/DropdownList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UploadFirst1To7 } from "../../CallsToBackend";
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
    "margin-top": "15px",
    width: "100%",
  },
});

function PersonalInfo(props) {
  const classes = useStyles();
  const [nextButtonDisabled, setNextButtonDisabled] = React.useState(true);
  const [data, setData] = React.useState([]);
  const numberOfQuestions = 7;
  const dispatch = useDispatch();

  const gender = ["Kvinde", "Mand", "Andet", "Vil ikke svare"];

  const age = [];
  for (var i = 18; i < 100; i++) {
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
    "Pensionist/efterlønsmodtager",
    "Hjemmegående",
    "Under uddannelse",
    "Andet",
    "Vil ikke svare",
  ];

  const maritalStatus = [
    "Single",
    "I et forhold",
    "Gift/samboende",
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
    "Europa (ej Danmark eller Norden)",
    "Afrika",
    "Asien",
    "Mellemøsten",
    "Nordamerika (Canada, USA)",
    "Oceania (Australien)",
    "Sydamerika",
    "Vil ikke svare",
  ];

  const SaveUserInputInState = (id, question, answer) => {
    let dataPlaceholder = [...data];
    let updated = false;

    dataPlaceholder.forEach((item) => {
      if (item.id === id) {
        item.answer = answer;
        setData(dataPlaceholder);
        updated = true;
      }
    });

    if (updated === false) {
      setData((oldData) => [
        ...oldData,
        { id: id, question: question, answer: answer },
      ]);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (data.length === numberOfQuestions) {
      if (nextButtonDisabled) {
        setNextButtonDisabled(false);
      }
    }
  }, [data, nextButtonDisabled]);

  const UploadDataToRedcap = () => {
    props.setCurrentPage(2);

    let dataPlaceholder = [...data];
    dataPlaceholder.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));

    let payload = {
      record_id: "null",
      question_1: dataPlaceholder[0].answer,
      question_2: dataPlaceholder[1].answer,
      question_3: dataPlaceholder[2].answer,
      question_4: dataPlaceholder[3].answer,
      question_5: dataPlaceholder[4].answer,
      question_6: dataPlaceholder[5].answer,
      question_7: dataPlaceholder[6].answer,
    };

    UploadFirst1To7(payload, dispatch);
  };

  return (
    <div>
      <Container fixed>
        <LinearWithValueLabel value={10} />
        <Grid container spacing={1} className={classes.grid}>
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
              callback={SaveUserInputInState}
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
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              id={3}
              question="Hvad er din beskæftigelse?"
              items={occupation}
              placeholder="Angiv et svar..."
              showExtraSection="none"
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              id={4}
              question="Hvilken uddannelse har du?"
              items={education}
              placeholder="Angiv et svar..."
              showExtraSection="none"
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              id={5}
              question="Hvad er din civilstand?"
              items={maritalStatus}
              placeholder="Angiv et svar..."
              showExtraSection="none"
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              id={6}
              question="Har du børn?"
              items={childrenStatus}
              placeholder="Angiv et svar..."
              showExtraSection="none"
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid item xs={12}>
            <DropdownList
              id={7}
              question="Hvor er du født?"
              items={origin}
              placeholder="Angiv et svar..."
              showExtraSection="none"
              callback={SaveUserInputInState}
            />
          </Grid>
          <Grid container item xs={12}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={nextButtonDisabled}
              onClick={UploadDataToRedcap}
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
