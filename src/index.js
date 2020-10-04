import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { HashRouter, Route, Switch } from "react-router-dom";
import Consent from "./components/pages/consent";
import PersonalInfo from "./components/pages/personalInfo";
import FirstSurvey from "./components/pages/firstSurvey";
import VideoText from "./components/pages/videoText";
import RandomVideo from "./components/pages/randomVideo";
import SecondSurvey from "./components/pages/secondSurvey";
import CompetitionParticipation from "./components/pages/competitionParticipation";
import "fontsource-roboto";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Consent} />
      <Route exact path="/personalinfo" component={PersonalInfo} />
      <Route exact path="/firstsurvey" component={FirstSurvey} />
      <Route exact path="/videotext" component={VideoText} />
      <Route exact path="/randomvideo" component={RandomVideo} />
      <Route exact path="/secondsurvey" component={SecondSurvey} />
      <Route
        exact
        path="/competitionparticipation"
        component={CompetitionParticipation}
      />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
