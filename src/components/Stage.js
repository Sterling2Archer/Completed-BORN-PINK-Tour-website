import React, {Component} from "react";
import './StageStyles.css'

class Stage extends Component {
    render() {
        return (
            <div className='stage-pink'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default Stage