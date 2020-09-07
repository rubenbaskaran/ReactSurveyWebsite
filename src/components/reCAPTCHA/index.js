import React, { Component } from "react";
import SecurityKey from "./SecurityKey";

class Recaptcha extends Component {
  constructor(props) {
    super(props);
    window.handleRecaptcha = this.handleRecaptcha;
  }

  handleRecaptcha() {
    console.log("Verified");
  }

  render() {
    return (
      <div
        className="g-recaptcha"
        data-sitekey={SecurityKey.value}
        data-callback="handleRecaptcha"
      ></div>
    );
  }
}

export default Recaptcha;
