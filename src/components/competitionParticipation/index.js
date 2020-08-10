import React, { Component } from "react";
import { Link } from "react-router-dom";

class CompetitionParticipation extends Component {
  render() {
    return (
      <div>
        This is the competition participation page
        <br />
        <Link to="/secondsurvey">
          <button>Back to second survey</button>
        </Link>
        <Link to="/thankyou">
          <button>Go to thank you page</button>
        </Link>
      </div>
    );
  }
}

export default CompetitionParticipation;
