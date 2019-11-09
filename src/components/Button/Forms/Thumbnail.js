import React, { Component } from "react";
import "./Thumbnail.css";
import laptopimg from "../assets/laptop.svg";
import stars from "../assets/stars.svg";
import headphones from "../assets/headphones.svg";
import hot from "../assets/hot.svg";

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
    if (this.props.inline) {
      return (
        <div className="inline-item-container">
          <div className="inline-item-image-container">
            <div className="inline-item-image-border">
              <img className="inline-hot" src={hot}></img>
              <img className="inline-image" src={laptopimg}></img>
            </div>
          </div>
          <div className="inline-item-details-container">
            <h2 className="inline-item-title">
              Beats Solo2 On Ear Headphones - Black
            </h2>
            <div className="inline-item-upper-details">
              <img className="info-rating-smallitem" src={stars}></img>
              <h1 className="inline-reviews">0 reviews</h1>
              <a className="inline-reviews-submit" href="#">
                Submit a review
              </a>
              <div className="inline-horizontal-line"></div>
            </div>
            <div className="inline-prices">
              <h2 className="inline-real-price">$499</h2>
              <h2 className="inline-old-price">$599</h2>
            </div>
            <div className="inline-paragraph-container">
              <p className="inline-paragraph">
                Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida
                et mattis vulputate, tristique ut lectus. Sed et lectus lorem
                nunc leifend laorevtr istique et congue. Vivamus adipiscin
                vulputate g nisl ut dolor ...
              </p>
            </div>
          </div>
        </div>
      );
    }

    if (this.props.smallitem) {
      return (
        <div className="smallitem-container">
          <div className="item-div-border">
            <div className="item-inside-border"></div>
            <img className="item-image-style" src={headphones}></img>
          </div>
          <div className="details-div-border">
            <h1></h1>
            <img></img>
            <h4 className="info-title-smallitem">
              Beats Solo 2 On Ear Headphones - Black
            </h4>
            <img className="info-rating-smallitem" src={stars}></img>
            <h3 className="info-real-price-smallitem">$499</h3>
            <h3 className="info-old-price-smallitem"> $599</h3>
          </div>
        </div>
      );
    }

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
