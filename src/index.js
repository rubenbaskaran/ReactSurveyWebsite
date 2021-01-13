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
import store from "./globalVariables";
import { Provider } from "react-redux";

// TODO: Replace exact paths with following codes
// dthCTmsuY0
// LVZqe449a3
// jip0n9h2EG
// cKyqRYVsOE
// 6nd7uhgvXp
// KJ8sL0ZGGp
// SJtaoT6Epc
// Np6xtbeNHx
// tt2KrCfgA3
// 6BAD8j5Vdv

const App = () => {
  const [currentPage, setCurrentPage] = React.useState(0);

  return (
    <Provider store={store}>
      <div>
        {currentPage == 0 ? <Consent setCurrentPage={setCurrentPage} /> : null}
        {currentPage == 1 ? (
          <PersonalInfo setCurrentPage={setCurrentPage} />
        ) : null}
        {currentPage == 2 ? (
          <FirstSurvey setCurrentPage={setCurrentPage} />
        ) : null}
        {currentPage == 3 ? (
          <PreNinetyDayThoughts setCurrentPage={setCurrentPage} />
        ) : null}
        {currentPage == 4 ? (
          <VideoText setCurrentPage={setCurrentPage} />
        ) : null}
        {currentPage == 5 ? (
          <RandomVideo setCurrentPage={setCurrentPage} />
        ) : null}
        {currentPage == 6 ? (
          <SecondSurvey setCurrentPage={setCurrentPage} />
        ) : null}
        {currentPage == 7 ? (
          <PostNinetyDayThoughts setCurrentPage={setCurrentPage} />
        ) : null}
        {currentPage == 8 ? (
          <CompetitionParticipation setCurrentPage={setCurrentPage} />
        ) : null}
      </div>
    </Provider>

    // <HashRouter>
    //   <Switch>
    //     <Provider store={store}>
    //       <Route exact path="/" component={Consent} />
    //       <Route exact path="/personalinfo" component={PersonalInfo} />
    //       <Route exact path="/firstsurvey" component={FirstSurvey} />
    //       <Route
    //         exact
    //         path="/preninetydaythoughts"
    //         component={PreNinetyDayThoughts}
    //       />
    //       <Route exact path="/videotext" component={VideoText} />
    //       <Route exact path="/randomvideo" component={RandomVideo} />
    //       <Route exact path="/secondsurvey" component={SecondSurvey} />
    //       <Route
    //         exact
    //         path="/postninetydaythoughts"
    //         component={PostNinetyDayThoughts}
    //       />
    //       <Route
    //         exact
    //         path="/competitionparticipation"
    //         component={CompetitionParticipation}
    //       />
    //     </Provider>
    //   </Switch>
    // </HashRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
