import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Consent from "./components/pages/consent";
import RecaptchaPage from "./components/pages/recaptchaPage";
import PersonalInfo from "./components/pages/personalInfo";
import FirstSurvey from "./components/pages/firstSurvey";
import PreNinetyDayThoughts from "./components/pages/preNinetyDayThoughts";
import VideoText from "./components/pages/videoText";
import RandomVideo from "./components/pages/randomVideo";
import SecondSurvey from "./components/pages/secondSurvey";
import PostNinetyDayThoughts from "./components/pages/postNinetyDayThoughts";
import CompetitionParticipation from "./components/pages/competitionParticipation";
import CookiePage from "./components/pages/cookiePage";
import "fontsource-roboto";
import store from "./globalVariables";
import { Provider } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Provider store={store}>
          <Route exact path="/" component={Consent} />
          <Route exact path="/cookie" component={CookiePage} />
          <Route exact path="/recaptcha" component={RecaptchaPage} />
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
serviceWorker.unregister();
