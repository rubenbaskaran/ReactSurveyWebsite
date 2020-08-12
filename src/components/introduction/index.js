import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

class Introduction extends Component {
  render() {
    return (
      <div>
        This is the introduction page
        <br />
        <a href="https://alkohologsamfund.dk/">
          <Button variant="contained" color="primary">
            Back to alkohologsamfund
          </Button>
        </a>
        <Link to="/humancheck">
          <Button variant="contained" color="primary">
            Go to human check
          </Button>
        </Link>
      </div>
    );
  }
}

export default Introduction;
