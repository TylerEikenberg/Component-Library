import React, { Component } from "react";
import "./Thumbnail.css";
import laptopimg from "../assets/laptop.svg";

class Thumbnail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mouseEnter: false
    };
  }

  render() {
    return (
      <div className="thumbnail-container">
        <div className="image-container">
          <img className="item-container" src={laptopimg}></img>
        </div>
        <div className="info-container">
          <div className="horizontal-line"></div>
          <h4 className="info-title">300</h4>
          <img className="info-rating"></img>
          <h3 className="info-real-price"></h3>
          <h3 className="info-old-price"></h3>
        </div>
      </div>
    );
  }
}

export default Thumbnail;
