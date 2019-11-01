import React, { Component } from "react";
import "./Thumbnail.css";

class Thumbnail extends Component {
    constructor(props){
        super(props)

        this.state = {
            mouseEnter: false;
        }


        
    }

    render() {
        return (
            <div className="thumbnail-container">

            </div>
        )
    }
}

export default Thumbnail;
