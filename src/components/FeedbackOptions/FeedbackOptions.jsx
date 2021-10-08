import React, { Component } from "react";
import PropTypes from 'prop-types';

class FeedbackOptions extends Component{   
    render() {
        return (
        <div>
            {this.props.options.map((stat) => (
                <button
                    key={stat}
                    name={stat}
                    type="button"
                    onClick={()=>this.props.LeaveFeedback(stat)}
                >{stat[0].toUpperCase() + stat.slice(1)}</button>
            ))}
        </div>
        )
    }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  LeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;