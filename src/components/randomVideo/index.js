import React, { Component } from "react";
import { Link } from "react-router-dom";

class RandomVideo extends Component {
  render() {
    return (
      <div>
        This is a random video
        <br />
        <Link to="/firstsurvey">
          <button>Back to first survey</button>
        </Link>
        <Link to="/secondsurvey">
          <button>Go to second survey</button>
        </Link>
      </div>
    );
  }
}

export default RandomVideo;
