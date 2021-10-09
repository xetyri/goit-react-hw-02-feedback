import React, { Component } from "react";
import PropTypes from 'prop-types';
import s from "./Statistics.module.css";

class Statistics extends Component{
    render() {
        const { good } = this.props;
        const { neutral } = this.props;
        const { bad } = this.props;
        const { onTotalFeedbackCount } = this.props;
        const {onPositivePercentageCount} = this.props;
        return (
            <div className={s.Statistics}>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {onTotalFeedbackCount}</p>
                <p>Positive Feedback: {onPositivePercentageCount}%</p>
            </div>
        )
    }
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number,
    percentage: PropTypes.number,
}

export default Statistics;