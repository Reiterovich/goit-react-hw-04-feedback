// import { Component } from 'react';
import { useState } from 'react';
import { Statistics } from './statistics/statistics';
import { FeedbackOptions } from './feedbackOptions/feedbackOptions';
import { Section } from './section/section';
import { Notification } from './notification/notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const plusFeedBackAll = option => {
    switch (option) {
      case 'good': {
        setGood(option + 1);
        console.log(option);
        return;
      }
      case 'neutral': {
        setNeutral(option + 1);
        return;
      }
      case 'bad': {
        setBad(option + 1);
        return;
      }
    }
    // default: return;
  };

  // this.setState(prevState => {
  //   return {
  //     [option]: prevState[option] + 1,
  //   };
  // });

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    // const { good } = this.state;
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={plusFeedBackAll}
          // options={Object.keys(state)}
          options={Object.keys([good, neutral, bad])}
        ></FeedbackOptions>
      </Section>

      {countTotalFeedback() === 0 && (
        <Notification message="There is no feedback"></Notification>
      )}

      {countTotalFeedback() >= 1 && (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      )}
    </>
  );
};

export default App;
