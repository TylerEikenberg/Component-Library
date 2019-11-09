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
  if (props.colorless && props.type === "primary") {
    classList += ` button-colorless-primary`;
  }
  if (props.colorless && props.type === "danger") {
    classList += ` button-colorless-danger`;
  }
  if (props.colorless && props.type === "warning") {
    classList += ` button-colorless-warning`;
  }
  if (props.colorless && props.type === "success") {
    classList += ` button-colorless-success`;
  }
  if (props.colorless && props.type === "default") {
    classList += ` button-colorless-default`;
  }

  return <button className={classList}>{props.label}</button>;
};

export default Button;
