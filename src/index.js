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

const App = () => {
  const [currentPage, setCurrentPage] = React.useState(0);

  return (
    <Provider store={store}>
      <div>
        {currentPage === 0 ? <Consent setCurrentPage={setCurrentPage} /> : null}
        {currentPage === 0.5 ? (
          <RecaptchaPage setCurrentPage={setCurrentPage} />
        ) : null}
        {currentPage === 1 ? (
          <PersonalInfo setCurrentPage={setCurrentPage} />
        ) : null}
        {currentPage === 2 ? (
          <FirstSurvey setCurrentPage={setCurrentPage} />
        ) : null}
        {currentPage === 3 ? (
          <PreNinetyDayThoughts setCurrentPage={setCurrentPage} />
        ) : null}
        {currentPage === 4 ? (
          <VideoText setCurrentPage={setCurrentPage} />
        ) : null}
        {currentPage === 5 ? (
          <RandomVideo setCurrentPage={setCurrentPage} />
        ) : null}
        {currentPage === 6 ? (
          <SecondSurvey setCurrentPage={setCurrentPage} />
        ) : null}
        {currentPage === 7 ? (
          <PostNinetyDayThoughts setCurrentPage={setCurrentPage} />
        ) : null}
        {currentPage === 8 ? (
          <CompetitionParticipation setCurrentPage={setCurrentPage} />
        ) : null}
        {currentPage === 9 ? (
          <CookiePage setCurrentPage={setCurrentPage} />
        ) : null}
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
