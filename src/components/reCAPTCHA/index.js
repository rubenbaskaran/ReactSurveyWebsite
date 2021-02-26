import React, { Component } from "react";

class Recaptcha extends Component {
  constructor(props) {
    super(props);
    window.handleRecaptcha = props.handleRecaptcha;
  }

  render() {
    return (
      <div
        className="g-recaptcha"
        data-sitekey="6LflOMcZAAAAAKLtg_6NyNLeUUsfncjpWgiWwwH8"
        data-callback="handleRecaptcha"
      ></div>
    );
  }
}

export default Recaptcha;
