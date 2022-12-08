import React, {Component} from "react";
import './SongsStyles.css';

class Songs extends Component {
    render() {
        return (
            <div className='songs-pink'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default Songs;
