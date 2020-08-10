import React, { Component } from "react";
import { Link } from "react-router-dom";

class HumanCheck extends Component {
  render() {
    return (
      <div>
        Click on all cars
        <br />
        <Link to="/introduction">
          <button>Back to introduction</button>
        </Link>
        <Link to="/firstsurvey">
          <button>Go to first survey</button>
        </Link>
      </div>
    );
  }
}

export default HumanCheck;
