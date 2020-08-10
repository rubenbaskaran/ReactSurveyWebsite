import React, { Component } from "react";
import { Link } from "react-router-dom";

class FirstSurvey extends Component {
  render() {
    return (
      <div>
        This is the first survey
        <br />
        <Link to="/humancheck">
          <button>Back to human check</button>
        </Link>
        <Link to="/randomvideo">
          <button>Go to random video</button>
        </Link>
      </div>
    );
  }
}

export default FirstSurvey;
