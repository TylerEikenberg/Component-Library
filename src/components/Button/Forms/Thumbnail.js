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
    this.didMouseLeave = this.didMouseLeave.bind(this);
  }

  didMouseEnter = () => {
    this.setState({ mouseEnter: true });
  };
  didMouseLeave = () => {
    this.setState({ mouseEnter: false });
  };

  render() {
    /*



    
      OPAQUE THUMBNAIL  



    */
    if (this.props.opaquebg) {
      return (
        <div className="thumbnail-container-opaque">
          <div
            className="image-container"
            onMouseEnter={this.didMouseEnter}
            onMouseLeave={this.didMouseLeave}
          >
            {this.state.mouseEnter ? (
              <div className="item-hover-overlay-opaque">
                <div className="h-c-button-container">
                  <div className="heartbutton-opaque"></div>
                  <div className="cartbutton-opaque"></div>
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

    /*



    
      STRETCHED THUMBNAIL  



    */
    if (this.props.stretch) {
      return (
        <div className="thumbnail-container-stretch">
          <div className="image-container">
            <img className="item-container" src={laptopimg}></img>
          </div>
          <div className="info-container">
            <h4 className="info-title-stretch">Apple MacBook Pro</h4>
            <img className="info-rating-stretch" src={stars}></img>
            <div className="price-container">
              <h3 className="info-real-price-stretch">$300</h3>
              <h3 className="info-old-price-stretch"> $300</h3>
            </div>
          </div>
        </div>
      );
    }

    /*




      DEFAULT THUMBNAIL  



    */
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
