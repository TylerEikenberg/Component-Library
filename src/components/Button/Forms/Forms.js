import React from "react";
import "./Forms.css";

const Form = props => {
  let classList = "";
  let types = ["Email", "Voucher"];
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
  }
};

export default Form;
