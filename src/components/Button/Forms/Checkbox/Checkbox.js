import React, { Component } from "react";
import "./Checkbox.css";
import Check from "../../assets/check.svg";
class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    !this.state.isChecked
      ? this.setState({ isChecked: true })
      : this.setState({ isChecked: false });
  };

  render() {
    if (this.props.default) {
      return (
        <div className="default-check" onMouseDown={this.handleClick}>
          {this.state.isChecked ? (
            <div className="default-check-click">
              <img className="check" src={Check}></img>
            </div>
          ) : null}
        </div>
      );
    }

    if (this.props.defaultText) {
      return (
        <div className="default-check" onMouseDown={this.handleClick}>
          <h3 className="check-text">Don't show this popup again.</h3>
          {this.state.isChecked ? (
            <div className="default-check-click">
              <img className="check" src={Check}></img>
            </div>
          ) : null}
        </div>
      );
    }

    if (this.props.blue) {
      return (
        <div className="blue-check" onMouseDown={this.handleClick}>
          {this.state.isChecked ? (
            <div className="blue-check-click">
              <img className="check" src={Check}></img>
            </div>
          ) : null}
        </div>
      );
    }
  }
}

export default Checkbox;
