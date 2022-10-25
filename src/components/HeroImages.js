import React, {Component} from "react";
import './HeroImagesStyles.css'

class HeroImages extends Component {
    render() {
        return (
            <div className='album-4'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default HeroImages