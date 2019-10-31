import React from "react";
import "./Forms.css";

const Form = props => {
  let classList = "";
  let types = ["email"];
  if (types.includes(props.type)) {
    classList += ` form-${props.type}`;
  }
  if (props.large) {
    classList += ` form-large`;
  }

  return (
    <form>
      <label>{props.type}</label>
      <input type="text" name="name" placeholder={props.type} />
    </form>
  );
};

export default Form;
