import React from "react";
import ReactDOM from "react-dom";
import { Button } from "@material-ui/core";
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
import "fontsource-roboto";
import store from "./globalVariables";
import { Provider } from "react-redux";

const App = () => {
  const [currentPage, setCurrentPage] = React.useState(0);

  function ShowCookieDisclaimer() {
    const script = document.createElement("script");
    script.src =
      "https://consent.cookiebot.com/13374a5a-f8ff-4ec7-90c7-9b849796daf7/cd.js";
    script.async = true;
    document.body.appendChild(script);
  }

  return (
    <Provider store={store}>
      <div>
        <script
          id="CookieDeclaration"
          src="https://consent.cookiebot.com/13374a5a-f8ff-4ec7-90c7-9b849796daf7/cd.js"
          type="text/javascript"
          async
        ></script>
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
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            ShowCookieDisclaimer();
          }}
        >
          Cookie-indstillinger
        </Button>
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
