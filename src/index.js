import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { HashRouter, Route, Switch } from "react-router-dom";
import Consent from "./components/pages/consent";
import PersonalInfo from "./components/pages/personalInfo";
import FirstSurvey from "./components/pages/firstSurvey";
import PreNinetyDayThoughts from "./components/pages/preNinetyDayThoughts";
import VideoText from "./components/pages/videoText";
import RandomVideo from "./components/pages/randomVideo";
import SecondSurvey from "./components/pages/secondSurvey";
import PostNinetyDayThoughts from "./components/pages/postNinetyDayThoughts";
import CompetitionParticipation from "./components/pages/competitionParticipation";
import "fontsource-roboto";
import { createStore, combineReducers } from "redux";

//ACTION - Describes what you gonna do
const togglePreExtraSection = () => {
  return {
    type: "togglePreExtraSection",
  };
};

const togglePostExtraSection = () => {
  return {
    type: "togglePostExtraSection",
  };
};

//REDUCER - Describes how actions transform the state
const toggle = (state = false, action) => {
  switch (action.type) {
    case "togglePreExtraSection":
      return !state;
    case "togglePostExtraSection":
      return !state;
  }
};

//STORE - Globalized state
let store = createStore(toggle);

// DISPLAY
store.subscribe(() => console.log(store.getState()));

//DISPATCH - Execute the action to the reducer
store.dispatch(togglePreExtraSection());
store.dispatch(togglePreExtraSection());
store.dispatch(togglePreExtraSection());
store.dispatch(togglePreExtraSection());
store.dispatch(togglePostExtraSection());

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Consent} />
        <Route exact path="/personalinfo" component={PersonalInfo} />
        <Route exact path="/firstsurvey" component={FirstSurvey} />
        <Route
          exact
          path="/preninetydaythoughts"
          component={PreNinetyDayThoughts}
        />
        <Route exact path="/videotext" component={VideoText} />
        <Route exact path="/randomvideo" component={RandomVideo} />
        <Route exact path="/secondsurvey" component={SecondSurvey} />
        <Route
          exact
          path="/postninetydaythoughts"
          component={PostNinetyDayThoughts}
        />
        <Route
          exact
          path="/competitionparticipation"
          component={CompetitionParticipation}
        />
      </Switch>
    </HashRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
