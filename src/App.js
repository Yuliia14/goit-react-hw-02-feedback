import './App.css';
import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions'
import Statistics from './components/Statistics/Statistics'
import Section from './components/Section/Section'
import Notification from './components/Notification/Notification'


import './App.css';

export default class App extends Component {
    state = {
        good: 0, 
        neutral: 0, 
        bad: 0
      }
      countTotalFeedback() {
        const { good, neutral, bad } = this.state;
    
        return bad + good + neutral;
      }

      countPositiveFeedbackPercentage() {
        const { good } = this.state;
        const total = this.countTotalFeedback();
    
        return total === 0 ? 0 : Math.floor((good / total) * 100);
      }

      addFeedback = (feedbackType) => {
        
        const { good, neutral, bad } = this.state;
        this.setState(prevState => {
            return {[feedbackType]: prevState[feedbackType] + 1}
        })
    }
  
      render() {
        const { good, neutral, bad } = this.state;

        return(
          
            <div>
                <Section title="Please leave feedack">
                <FeedbackOptions
                 options = {this.state}
                 onLeaveFeedback = {this.addFeedback}/>
                 </Section>
                 
                <Section title="Statistics">
                  {this. countTotalFeedback() > 0 ? (
                    <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()}
                    />
                  ) : (
                    <Notification message="No feedback given" />
                  )}
                
                </Section>
            </div>
        )

      }
}

