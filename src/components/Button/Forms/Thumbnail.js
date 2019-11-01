import React, { Component } from "react";
import "./Thumbnail.css";
import laptopimg from "../assets/laptop.svg";
import stars from "../assets/stars.svg";

class Thumbnail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mouseEnter: false
    };
    this.didMouseEnter = this.didMouseEnter.bind(this);
  }

  didMouseEnter = () => {
    console.log("hey");
    this.setState({ mouseEnter: true });
  };
  didMouseLeave = () => {
    console.log("hey");
    this.setState({ mouseEnter: false });
  };

  render() {
    return (
      <div className="thumbnail-container">
        <div
          className="image-container"
          onMouseEnter={this.didMouseEnter}
          onMouseLeave={this.didMouseLeave}
        >
          {this.state.mouseEnter ? (
            <div className="item-hover-overlay">
              <div className="h-c-button-container">
                <div className="heartbutton"></div>
                <div className="cartbutton"></div>
              </div>
            </div>
          ) : null}

          <img className="item-container" src={laptopimg}></img>
        </div>
        <div className="info-container">
          <div className="horizontal-line"></div>
          <h4 className="info-title">Apple MacBook Pro</h4>
          <img className="info-rating" src={stars}></img>
          <div className="price-container">
            <h3 className="info-real-price">$300</h3>
            <h3 className="info-old-price"> $300</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Thumbnail;
