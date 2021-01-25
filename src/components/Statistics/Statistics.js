import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

class Statistics extends Component {
    static propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positivePercentage: PropTypes.number.isRequired,
    };

    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;
        return(
            <div className = {s.list}>
                <p className={s.item}><span className={s.text}>Good: {good}</span></p>
                <p className={s.item}><span className={s.text}>Neutral: {neutral}</span></p>
                <p className={s.item}><span className={s.text}>Bad: {bad}</span></p>
                <p className={s.item}><span className={s.text}>Total: {total}</span></p>
                <p className={s.item}><span className={s.text}>Positive feedback: {positivePercentage}%</span></p>
            </div>
        )            
    }
}

export default Statistics;