import React, { Component } from "react";
import { Link } from "react-router-dom";

class SecondSurvey extends Component {
  render() {
    return (
      <div>
        This is the second survey
        <br />
        <Link to="/randomvideo">
          <button>Back to random video</button>
        </Link>
        <Link to="/competitionparticipation">
          <button>Go to competition participation</button>
        </Link>
      </div>
    );
  }
}

export default SecondSurvey;
