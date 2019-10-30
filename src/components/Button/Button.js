import React from "react";
import "./Button.css";

// This is a functional component - just sent up a little differently as an arrow function!
const Button = props => {
  let classList = "";
  let types = ["primary", "danger", "success", "warning"];
  if (types.includes(props.type)) {
    classList += ` button-${props.type}`;
  }
  if (props.large) {
    classList += ` button-large`;
  }
  if (props.hover) {
    classList += ` button:hover`;
  }
  if (props.lighter) {
    classList += ` button.lighter`;
  }

  return <button className={classList}>{props.label}</button>;
};

export default Button;
