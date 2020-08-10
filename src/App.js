import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Introduction from "./components/introduction";
import HumanCheck from "./components/humanCheck";
import FirstSurvey from "./components/firstSurvey";
import RandomVideo from "./components/randomVideo";
import SecondSurvey from "./components/secondSurvey";
import CompetitionParticipation from "./components/competitionParticipation";
import ThankYou from "./components/thankYou";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/introduction" component={Introduction} />
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
    </div>
  );
}

export default App;
