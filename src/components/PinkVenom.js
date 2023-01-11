import React, {Component} from "react";
import './PinkVenomStyles.css';

class PinkVenom extends Component {
    render() {
        return (
            <div className='pink-venom'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    };
}

export default PinkVenom;
