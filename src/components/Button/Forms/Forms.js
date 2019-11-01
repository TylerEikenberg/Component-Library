import React from "react";
import "./Forms.css";

const Form = props => {
  let classList = "";
  let types = ["Email", "Voucher", "Checkbox"];
  if (types.includes(props.type)) {
    classList += ` form-${props.type}`;
  }
  if (props.large) {
    classList += ` form-large`;
  }
  if (props.extralarge) {
    classList += ` form-extra-large`;
  }
  if (props.large && props.type === "Voucher") {
    classList += ` Voucher-large`;
  }
  if (props.extralarge && props.type === "Voucher") {
    classList += ` Voucher-extra-large`;
  }
  if (props.blue) {
    classList += ` Checkbox-blue`;
  }

  if (props.type === "Email") {
    return (
      <form>
        <label className={classList}>{props.type}</label>
        <input
          className={classList}
          type="text"
          name="name"
          placeholder={props.type}
        />
      </form>
    );
  } else if (props.type === "Voucher") {
    return (
      <form>
        <input
          className={classList}
          type="text"
          name="name"
          placeholder={props.type}
        />
        <button className={props.large ? props.label + "large" : props.label}>
          {props.label}
        </button>
      </form>
    );
  } else if (props.type === "Checkbox") {
    return (
      <div>
        <span className={props.label ? props.label : null}>
          <input
            type="checkbox"
            className={classList}
            onChange={console.log("hi")}
          ></input>
        </span>
      </div>
    );
  }
};

export default Form;
