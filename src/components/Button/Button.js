import React from "react";
import "./Button.css";

// This is a functional component - just sent up a little differently as an arrow function!
const Button = props => {
  let classList = "";
  let types = [
    "primary",
    "danger",
    "success",
    "warning",
    "default",
    "primary-colorless",
    "danger-colorless",
    "success-colorless",
    "warning-colorless",
    "default-colorless",
    "primary-opacity",
    "danger-opacity",
    "success-opacity",
    "warning-opacity",
    "default-opacity",
    "cart",
    "cart-notext",
    "favorites",
    "favorites-notext"
  ];
  if (types.includes(props.type)) {
    classList += ` button-${props.type}`;
  }
  if (props.large) {
    classList += ` button-large`;
  }
  if (props.notext) {
    classList += ` button-notext`;
  }

  return <button className={classList}>{props.label}</button>;
};

export default Button;
