import React from "react";
import "./Forms.css";

const Form = props => {
  let classList = "";
  let types = ["Email"];
  if (types.includes(props.type)) {
    classList += ` form-${props.type}`;
  }
  if (props.large) {
    classList += ` form-large`;
  }
  console.log(props);
  return (
    <form>
      <label>{props.type}</label>
      <input
        className={classList}
        type="text"
        name="name"
        placeholder={props.type}
      />
    </form>
  );
};

export default Form;
