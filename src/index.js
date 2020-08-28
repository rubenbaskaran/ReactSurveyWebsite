import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { HashRouter, Route, Switch } from "react-router-dom";
import Consent from "./components/consent";
import PersonalInfo from "./components/personalInfo";
import HumanCheck from "./components/humanCheck";
import FirstSurvey from "./components/firstSurvey";
import RandomVideo from "./components/randomVideo";
import SecondSurvey from "./components/secondSurvey";
import CompetitionParticipation from "./components/competitionParticipation";
import ThankYou from "./components/thankYou";
import "fontsource-roboto";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Consent} />
      <Route path="/personalinfo" component={PersonalInfo} />
      <Route path="/humancheck" component={HumanCheck} />
      <Route path="/firstsurvey" component={FirstSurvey} />
      <Route path="/randomvideo" component={RandomVideo} />
      <Route path="/secondsurvey" component={SecondSurvey} />
      <Route
        path="/competitionparticipation"
        component={CompetitionParticipation}
      />
      <Route path="/thankyou" component={ThankYou} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
