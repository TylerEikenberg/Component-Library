import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increaseCount = () => {
    let count = this.state.count + 1;
    this.setState({
      count: count
    });
  };
  decreaseCount = () => {
    let count = this.state.count - 1;
    this.setState({
      count: count
    });
  };
  render() {
    return (
      <div className="counter-container">
        <button className="counter-button" onClick={this.decreaseCount}>
          -
        </button>
        <h4 className="counter-text">{this.state.count}</h4>
        <button className="counter-button" onClick={this.increaseCount}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
