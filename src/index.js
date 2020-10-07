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
import store, {
  togglePreExtraSectionAction,
  togglePostExtraSectionAction,
} from "./globalVariables";
import { Provider } from "react-redux";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Provider store={store}>
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
        </Provider>
      </Switch>
    </HashRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
