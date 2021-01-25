import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
    static propTypes = {
        onLeaveFeedback: PropTypes.func.isRequired,
        options: PropTypes.exact({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }).isRequired,
    };

    render() {
        const {options, onLeaveFeedback} = this.props;
        const keys = Object.keys(options);
        return(
            <div className = {s.container}>
                {keys.map (key => (
                    <button className={s.button} key={uuidv4()} type="button" onClick={(e) => onLeaveFeedback(key)}><span className={s.label}>{key.slice(0, 1).toLocaleUpperCase() + key.slice(1)}</span></button>
                ))}
            </div>
        )            
    }
}

export default FeedbackOptions;