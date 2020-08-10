import React, { Component } from "react";
import { Link } from "react-router-dom";

class Introduction extends Component {
  render() {
    return (
      <div>
        This is the introduction page
        <br />
        <a href="https://alkohologsamfund.dk/">
          <button>Back to alkohologsamfund</button>
        </a>
        <Link to="/humancheck">
          <button>Go to human check</button>
        </Link>
      </div>
    );
  }
}

export default Introduction;
