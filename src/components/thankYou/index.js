import React, { Component } from "react";
import { Link } from "react-router-dom";

class ThankYou extends Component {
  render() {
    return (
      <div>
        This is the thank you page
        <br />
        <Link to="/competitionparticipation">
          <button>Back to competition participation</button>
        </Link>
        <a href="https://alkohologsamfund.dk/">
          <button>Go to alkohologsamfund</button>
        </a>
      </div>
    );
  }
}

export default ThankYou;
